import React, { useState, useEffect } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import {
  Payload,
  ChartProps,
  initLegendData,
  numberWithCommas,
  CustomTooltipForTinyChart,
} from "../config/chartUtils";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 3,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
    },
    title: {
      display: "inline",
    },
    dailyInfo: {
      textAlign: "center",
    },
  })
);

interface TinyLineProps {
  chartProps: ChartProps;
  color: string;
  title: string;
}

const TinyLineViewChart: React.FC<TinyLineProps> = (props) => {
  const classes = useStyles();
  const [legendData, setlegendData] = useState<Array<Payload>>([]);
  const [color, setColor] = useState("black");
  const [dataName, setDataName] = useState("data");

  useEffect(() => {
    const data: Payload[] = initLegendData(props.chartProps);
    setlegendData(data);
  }, [props.chartProps]);

  useEffect(() => {
    const dataName = props.chartProps.legendDataList.includes("data")
      ? "data"
      : props.chartProps.legendDataList[0];
    setDataName(dataName);
  }, [props.chartProps.legendDataList]);

  useEffect(() => {
    const data = props.chartProps.data;
    const standard: number = data[data.length - 2][dataName];
    const newValue: number = data[data.length - 1][dataName];
    if (newValue > standard) {
      setColor("#dc3912");
    } else {
      setColor("#3366cc");
    }
  }, [props.chartProps.data, dataName]);

  const RenderData = (legendData: Payload[]) => {
    return legendData
      ?.filter((data) => data.active === true)
      .map((payload, idx) => {
        return (
          <Line
            key={payload.value}
            type="linear"
            dataKey={payload.value}
            stroke={props.color}
            fill={props.color}
            dot={false}
            strokeWidth={4}
            isAnimationActive={false}
          />
        );
      });
  };

  useEffect(() => {}, [legendData]);

  const RenderDailyDifference = () => {
    const data = props.chartProps.data;
    const standard: number = data[data.length - 2][dataName];
    const newValue: number = data[data.length - 1][dataName];
    const difference = numberWithCommas(
      (((newValue - standard) * 100) / standard).toFixed(2)
    );
    return (
      <div className={classes.dailyInfo}>
        <h3>{props.title}</h3>
        <h2>{`${numberWithCommas(newValue?.toFixed(2))} `}</h2>
        <h4 style={{ color: color }}>{difference}% OVER 1D</h4>
      </div>
    );
  };

  return (
    <div>
      {RenderDailyDifference()}
      <ResponsiveContainer width={"100%"} height={100}>
        <LineChart data={props.chartProps.data}>
          <Tooltip content={<CustomTooltipForTinyChart />} />
          {RenderData(legendData)}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyLineViewChart;

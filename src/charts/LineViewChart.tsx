import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Payload,
  ChartProps,
  initLegendData,
  renderCustomizedLegend,
  CustomTooltip,
  dataFormater,
} from "../config/chartUtils";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 420,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
    },
    title: {
      display: "inline",
    },
  })
);

const LineViewChart: React.FC<ChartProps> = (props) => {
  const classes = useStyles();
  const [legendData, setlegendData] = useState<Array<Payload>>([]);

  useEffect(() => {
    const data: Payload[] = initLegendData(props);
    setlegendData(data);
  }, [props]);

  const RenderData = (legendData: Payload[]) => {
    return legendData
      ?.filter((data) => data.active === true)
      .map((payload, idx) => {
        return (
          <Line
            key={payload.value}
            type="linear"
            dataKey={payload.value}
            stroke={payload.color}
            fill={payload.color}
            dot={false}
            isAnimationActive={false}
          />
        );
      });
  };

  return (
    <div className={classes.root}>
      <div>
        <h3 className={classes.title}>{`${props.title} `}</h3>
        <h6 className={classes.title}>
          {props.dateSection &&
            `${props.dateSection?.startDate} ~ ${props.dateSection?.endDate}`}
        </h6>
      </div>
      <ResponsiveContainer width={"98%"} height={"95%"}>
        <LineChart
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={props.XAisDataKey}
            tick={{ fontSize: 13, fill: "#000000" }}
          />
          <YAxis
            dataKey={props.YAisDataKey}
            tickFormatter={dataFormater}
            allowDataOverflow={true}
          />
          <Tooltip
            wrapperStyle={{
              zIndex: 1000,
            }}
            content={<CustomTooltip />}
          />
          <Legend
            verticalAlign="top"
            payload={legendData}
            content={renderCustomizedLegend(legendData, setlegendData)}
          />
          {RenderData(legendData)}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineViewChart;

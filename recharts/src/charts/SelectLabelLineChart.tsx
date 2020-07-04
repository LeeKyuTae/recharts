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
  CustomTooltip,
  dataFormater,
  ControllLegendSelect,
  initLegendDataForSelectedOne,
} from "../config/chartUtils";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 400,
      paddingTop: 10,
      paddingLeft: 5,
      paddingRight: 5,
    },
    title: {
      display: "inline",
    },
  })
);

const SelectLabelLineChart: React.FC<ChartProps> = (props) => {
  const classes = useStyles();
  const [legendData, setlegendData] = useState<Array<Payload>>([]);

  useEffect(() => {
    const data: Payload[] = initLegendDataForSelectedOne(props);
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
            strokeWidth={2}
            isAnimationActive={false}
          />
        );
      });
  };

  return (
    <div className={classes.root}>
      <Grid container justify="space-between">
        <Grid>
          <h3>{`${props.title} `}</h3>
        </Grid>
        <Grid>
          <ControllLegendSelect
            legendData={legendData}
            updateLegend={setlegendData}
          />
        </Grid>
      </Grid>
      <ResponsiveContainer width={"98%"} height={"88%"}>
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
            wrapperStyle={{ zIndex: 1000 }}
            content={<CustomTooltip />}
          />
          {RenderData(legendData)}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SelectLabelLineChart;

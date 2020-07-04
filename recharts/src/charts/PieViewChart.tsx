import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import {
  Payload,
  ChartProps,
  initLegendData,
  renderCustomizedLegend,
  CustomPieTooltip,
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
      overflow: "auto",
    },
    title: {
      display: "inline",
    },
  })
);

interface PieData extends Payload {
  total: number;
  totalValue: number;
}
const PIE_DATA_VIEW = "total";
const RADIAN = Math.PI / 180;

const PieViewChart: React.FC<ChartProps> = (props) => {
  const classes = useStyles();
  const [legendData, setlegendData] = useState<Array<Payload>>([]);
  const [pieData, setPieData] = useState<Array<PieData>>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const data: Payload[] = initLegendData(props);
    setlegendData(data);
  }, [props]);

  useEffect(() => {
    let sum = 0;
    legendData
      ?.filter((data) => data.active === true)
      .map((value) => {
        const labelKey = value.value;
        const labelValue = props.data.reduce(
          (prev: number, next: any) =>
            prev + (next[labelKey] ? next[labelKey] : 0),
          0
        );

        sum += labelValue;
      });
    setTotal(sum);
  }, [legendData, props]);

  useEffect(() => {
    const data: PieData[] = legendData
      ?.filter((data) => data.active === true)
      .map((value) => {
        const labelKey = value.value;
        const labelValue = props.data.reduce(
          (prev: number, next: any) =>
            prev + (next[labelKey] ? next[labelKey] : 0),
          0
        );

        const payload: PieData = {
          ...value,
          total: labelValue,
          totalValue: total,
        };
        return payload;
      })
      .filter((data) => data.total > 0);
    setPieData(data);
  }, [legendData, props, total]);

  const RenderPie = (legendData: PieData[]) => {
    return legendData.map((payload, idx) => (
      <Cell key={`${idx}`} fill={payload.color} />
    ));
  };

  return (
    <div className={classes.root}>
      <h3>{props.title}</h3>
      <ResponsiveContainer width={"98%"} height={"90%"}>
        <PieChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          cx={300}
          cy={250}
          outerRadius={150}
        >
          <Legend
            verticalAlign="top"
            payload={legendData}
            content={renderCustomizedLegend(legendData, setlegendData)}
          />
          <Tooltip
            wrapperStyle={{ zIndex: 1000 }}
            content={<CustomPieTooltip />}
          />
          <Pie
            data={pieData}
            fill="#8884d8"
            fillOpacity={0.6}
            dataKey={PIE_DATA_VIEW}
            isAnimationActive={false}
          >
            {RenderPie(pieData)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieViewChart;

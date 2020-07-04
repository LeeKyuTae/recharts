import React, { useState, useEffect } from "react";
import {
  RadarChart,
  Radar,
  Legend,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  Payload,
  ChartProps,
  initLegendData,
  renderCustomizedLegend,
} from "../config/chartUtils";
import Paper from "@material-ui/core/Paper";

const RadarViewChart: React.FC<ChartProps> = (props) => {
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
          <Radar
            key={payload.value}
            dataKey={payload.value}
            stroke={payload.color}
            fill={payload.color}
            fillOpacity={0.6}
          />
        );
      });
  };

  return (
    <Paper>
      <h3>{props.title}</h3>
      <ResponsiveContainer width={"98%"} height={500}>
        <RadarChart
          data={props.data}
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
          <PolarGrid />
          <PolarAngleAxis dataKey={props.XAisDataKey} />
          <PolarRadiusAxis />
          <Legend
            verticalAlign="top"
            payload={legendData}
            content={renderCustomizedLegend(legendData, setlegendData)}
          />
          {RenderData(legendData)}
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default RadarViewChart;

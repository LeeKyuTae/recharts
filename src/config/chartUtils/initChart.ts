import { LegendPayload } from "recharts";

export interface Payload extends LegendPayload {
  active: boolean;
}

export interface DateSection {
  startDate: string;
  endDate: string;
}

export interface ChartProps {
  title?: string;
  data: any[];
  XAisDataKey: string;
  YAisDataKey?: string;
  legendDataList: string[];
  dateSection?: DateSection;
}

// reference by : https://stackoverflow.com/questions/32131668/from-where-can-i-get-list-of-all-color-patterns-used-by-google-charts
export const chartColors = [
  "#3366cc",
  "#dc3912",
  "#ff9900",
  "#109618",
  "#990099",
  "#0099c6",
  "#dd4477",
  "#66aa00",
  "#b82e2e",
  "#316395",
  "#994499",
  "#22aa99",
  "#aaaa11",
  "#6633cc",
  "#e67300",
  "#8b0707",
  "#651067",
  "#329262",
  "#5574a6",
  "#3b3eac",
  "#b77322",
  "#16d620",
  "#b91383",
  "#f4359e",
  "#9c5935",
  "#a9c413",
  "#2a778d",
  "#668d1c",
  "#bea413",
  "#0c5922",
  "#743411",
];

export const testDatas = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
    asdsadsadadsadadds: 5000,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 22,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2200,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page I",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page J",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page K",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page L",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const initData: ChartProps = {
  data: testDatas,
  XAisDataKey: "",
  legendDataList: [],
};

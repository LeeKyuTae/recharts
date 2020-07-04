import { hostname } from "os";

const getClassInfoWithAvgQCAndUQC = (day: string, sscode: string) => {
  return `/api/classinfo/qc-uqc?day=${day}&sscode=${sscode}`;
};

const getClassInfoTrends = (day: string, sscode: string) => {
  return `/api/classinfo/trends?day=${day}&sscode=${sscode}`;
};

const getTotalUqc = (day: string, sscode: string) => {
  return `/api/classinfo/uqc?day=${day}&sscode=${sscode}`;
};

const getTotalClassInfo = (day: string, sscode: string, data: string) => {
  return `/api/classinfo?day=${day}&sscode=${sscode}&data=${data}`;
};

const getTotalQCAndCC = (day: string, sscode: string) => {
  return `/api/classinfo/qc-cc?day=${day}&sscode=${sscode}`;
};

const getTotalYRank = (day: string, sscode: string) => {
  return `/api/classinfo/yrank?day=${day}&sscode=${sscode}`;
};

const getRankAndQCAndCC = (day: string, sscode: string) => {
  return `/api/rankinfo/qc-cc?day=${day}&sscode=${sscode}`;
};

const getAvgCTR = (day: string, sscode: string, data: string) => {
  return `/api/rankinfo/avg?day=${day}&sscode=${sscode}&data=${data}`;
};

const getDataByCollWithDate = (day: string, sscode: string, data: string) => {
  return `/api/collinfo/coll?day=${day}&sscode=${sscode}&data=${data}`;
};

const getDataByCollWithRank = (day: string, sscode: string, data: string) => {
  return `/api/collrankinfo/rank?day=${day}&sscode=${sscode}&data=${data}`;
};

const getCollListForMakeButtons = (day: string, sscode: string) => {
  return `/api/collrankinfo/coll-list?day=${day}&sscode=${sscode}`;
};

const getAvgDataByCollRankWithEachColl = (
  day: string,
  sscode: string,
  data: string,
  coll: string
) => {
  return `/api/collrankinfo/coll?day=${day}&sscode=${sscode}&data=${data}&coll=${coll}`;
};

const getAvgDataTrendsCompareWithEachColl = (
  day: string,
  sscode: string,
  coll: string
) => {
  return `/api/collrankinfo/trends-each?day=${day}&sscode=${sscode}&coll=${coll}`;
};

const getTrendsCTRByColl = (day: string, sscode: string, coll: string) => {
  return `/api/collrankinfo/trends?day=${day}&sscode=${sscode}&coll=${coll}`;
};

const getAvgRankByColl = (day: string, sscode: string, coll: string) => {
  return `/api/collinfo/rank?day=${day}&sscode=${sscode}&coll=${coll}`;
};

const getThemeListForMakeButtons = (
  day: string,
  sscode: string,
  mincc: string
) => {
  return `/api/themeareainfo/theme-list?day=${day}&sscode=${sscode}&mincc=${mincc}`;
};
const getDataTrendByTheme = (day: string, sscode: string, data: string) => {
  return `/api/themeinfo/trends?day=${day}&sscode=${sscode}&data=${data}`;
};
const getDataTrendByThemeArea = (
  day: string,
  sscode: string,
  data: string,
  theme: string,
  mincc: string
) => {
  return `/api/themeareainfo/trends?day=${day}&sscode=${sscode}&data=${data}&theme=${theme}&mincc=${mincc}`;
};

const getSSCodeList = () => {
  return `/api/sscode`;
};

export default {
  getClassInfoWithAvgQCAndUQC,
  getClassInfoTrends,
  getTotalUqc,
  getTotalQCAndCC,
  getTotalYRank,
  getRankAndQCAndCC,
  getAvgCTR,
  getDataByCollWithDate,
  getDataByCollWithRank,
  getCollListForMakeButtons,
  getAvgDataByCollRankWithEachColl,
  getAvgDataTrendsCompareWithEachColl,
  getTrendsCTRByColl,
  getAvgRankByColl,
  getThemeListForMakeButtons,
  getDataTrendByTheme,
  getDataTrendByThemeArea,
  getSSCodeList,
  getTotalClassInfo,
};

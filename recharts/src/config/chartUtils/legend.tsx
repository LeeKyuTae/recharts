import { LegendPayload, Surface, Symbols } from "recharts";
import React, { useEffect } from "react";
import styles from "../CSSModule.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { THEME_SIGNIFICANT_LIST } from "../utils";
import Grid from "@material-ui/core/Grid";
import { Payload, ChartProps, chartColors } from "./initChart";

export const initLegendData = (props: ChartProps) => {
  const initDataList = props.legendDataList?.filter(
    (data) => data !== props.XAisDataKey && data !== props.YAisDataKey
  );
  const newDataList: Payload[] = [];
  initDataList?.map((value, idx) => {
    const payload: Payload = {
      value: value,
      id: idx,
      type: "circle",
      color: chartColors[idx % chartColors.length],
      active: true,
    };
    newDataList.push(payload);
  });
  return newDataList;
};

interface SelectProps {
  legendData: Array<Payload>;
  updateLegend: (updatedData: Array<Payload>) => void;
}

export const ControllLegendSelect: React.FC<SelectProps> = ({
  legendData,
  updateLegend,
}) => {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState<number>(0);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTheme(Number(event.target.value));
    updateActiveThemeData(legendData, Number(event.target.value), updateLegend);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    setTheme(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document.URL]);
  return (
    legendData && (
      <div className={styles.legendBox}>
        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">Theme</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={theme}
            onChange={handleChange}
          >
            {legendData?.map((entry, idx) => {
              return (
                <MenuItem value={idx} key={idx} style={{ cursor: "pointer" }}>
                  <Surface width={15} height={10}>
                    <Symbols
                      cx={5}
                      cy={5}
                      type="circle"
                      size={75}
                      fill={entry.color}
                    />
                  </Surface>
                  <span>{entry.value}</span>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>
    )
  );
};

export const renderCustomizedLegend = (
  legendData: Array<Payload>,
  updateLegend: (updatedData: Array<Payload>) => void
) => {
  return (
    <>
      <Grid
        container
        spacing={1}
        justify={"flex-end"}
        style={{ marginBottom: 5 }}
      >
        {legendData?.map((entry, idx) => {
          const active = entry.active;
          const style = {
            marginRight: 10,
            color: active ? "#000" : "#AAA",
            zIndex: 3,
            cursor: "pointer",
          };

          return (
            <span
              key={idx}
              className="legend-item"
              onClick={() => toggleLegendData(legendData, entry, updateLegend)}
              onDoubleClick={() =>
                updateActiveThemeData(legendData, idx, updateLegend)
              }
              style={style}
            >
              <Surface width={15} height={10}>
                <Symbols cx={5} cy={5} type="circle" size={75} fill={"#FFF"} />
                {active && (
                  <Symbols
                    cx={5}
                    cy={5}
                    type="circle"
                    size={75}
                    fill={entry.color}
                  />
                )}
              </Surface>
              <span>{entry.value}</span>
            </span>
          );
        })}
      </Grid>
    </>
  );
};

export const updateActiveThemeData = (
  originData: Array<Payload>,
  toggleDataIndex: number,
  updateLegend: (updatedData: Array<Payload>) => void
) => {
  updateLegend(
    originData.map((payload, idx) => {
      if (idx === toggleDataIndex) {
        payload.active = true;
      } else {
        payload.active = false;
      }
      return payload;
    })
  );
};

export const toggleLegendData = (
  originData: Array<Payload>,
  toggleData: LegendPayload,
  updateLegend: (updatedData: Array<Payload>) => void
) => {
  const newActiveLabel: Payload[] = [];
  let activeCount = 0;
  originData.map((payload) => {
    if (payload.value === toggleData.value) {
      payload.active = !payload.active;
    }
    if (payload.active) {
      activeCount++;
    }
    newActiveLabel.push(payload);
  });
  activeCount === 0
    ? resetLegendData(originData, updateLegend)
    : updateLegend(newActiveLabel);
};

const resetLegendData = (
  originData: Array<Payload>,
  updateLegend: (updatedData: Array<Payload>) => void
) => {
  const initActiveLabel: Payload[] = [];
  originData.map((payload) => {
    initActiveLabel.push({
      active: true,
      value: payload.value,
      color: payload.color,
      id: payload.id,
      type: payload.type,
    });
  });
  updateLegend(initActiveLabel);
};

export const initLegendDataForSelectedOne = (props: ChartProps) => {
  const dataList = props.legendDataList?.filter(
    (data) => data !== props.XAisDataKey && data !== props.YAisDataKey
  );
  const initDataList = Array.prototype.slice.call(THEME_SIGNIFICANT_LIST);
  dataList.map((value) => {
    if (initDataList.includes(value) === false) {
      initDataList.push(value);
    }
  });
  const newDataList: Payload[] = [];
  initDataList?.map((value, idx) => {
    const payload: Payload = {
      value: value,
      id: idx,
      type: "circle",
      color: chartColors[idx % chartColors.length],
      active: idx === 0 ? true : false,
    };
    newDataList.push(payload);
  });
  return newDataList;
};

import { TooltipProps } from "recharts";
import React from "react";
import styles from "../CSSModule.module.css";
import { numberWithCommas, dataFormater, totalPercentage } from "./utils";

export const CustomTooltipWithTotal = (props: TooltipProps) => {
  let total = 0;
  if (props.active) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">
          <b>{`${props.label}`}</b>
        </p>
        {props.payload &&
          props.payload.map((payload, idx) => {
            if (typeof payload.value === "number") {
              total += payload.value;
            }
            const style = {
              backgroundColor: payload.color,
            };
            return (
              <div className={styles.row} key={idx}>
                <div className={styles.colorBox} style={style}></div>

                <span className={styles.toolTipKey}>
                  {" "}
                  {`${payload.dataKey}`}
                </span>
                <span className={styles.toolTipValue}>
                  {" "}
                  <b>{`${numberWithCommas(
                    Number(payload.value).toFixed(2)
                  )}`}</b>
                </span>
              </div>
            );
          })}

        <div className={styles.row}>
          <div className={styles.colorBox}></div>
          <span className={styles.toolTipKey}>
            {" "}
            <b>TOTAL</b>
          </span>
          <span className={styles.toolTipValue}>
            {" "}
            <b>{`${dataFormater(Number(total.toFixed(2)))}`}</b>
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export const CustomTooltip = (props: TooltipProps) => {
  if (props.active) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">
          <b>{`${props.label}`}</b>
        </p>
        {props.payload &&
          props.payload.map((payload, idx) => {
            const style = {
              backgroundColor: payload.color,
            };
            return (
              <div className={styles.row} key={idx}>
                <div className={styles.colorBox} style={style}></div>

                <span className={styles.toolTipKey}>
                  {" "}
                  {`${payload.dataKey}`}
                </span>
                <span className={styles.toolTipValue}>
                  {" "}
                  <b>{`${numberWithCommas(
                    Number(payload.value).toFixed(3)
                  )}`}</b>
                </span>
              </div>
            );
          })}
      </div>
    );
  }

  return null;
};

export const CustomTooltipForTinyChart = (props: TooltipProps) => {
  if (props.active) {
    return (
      <div className={styles.customTooltip}>
        <p className="label">
          <b>{`${props.payload && props.payload[0].payload["date"]}`}</b>
        </p>
        {props.payload &&
          props.payload.map((payload, idx) => {
            const style = {
              backgroundColor: payload.color,
            };
            return (
              <div className={styles.row} key={idx}>
                <div className={styles.colorBox} style={style}></div>

                <span className={styles.toolTipKey}>
                  {" "}
                  {`${payload.dataKey}`}
                </span>
                <span className={styles.toolTipValue}>
                  {" "}
                  <b>{`${numberWithCommas(
                    Number(payload.value).toFixed(3)
                  )}`}</b>
                </span>
              </div>
            );
          })}
      </div>
    );
  }

  return null;
};

export const CustomPieTooltip = (props: TooltipProps) => {
  if (props.active) {
    return (
      <div className={styles.customTooltip}>
        {props.payload &&
          props.payload.map((payload, idx) => {
            const style = {
              backgroundColor: payload.payload && payload.payload.color,
            };
            return (
              <div className={styles.row} key={idx}>
                <div className={styles.colorBox} style={style}></div>

                <span className={styles.toolTipKey}>
                  {" "}
                  {`${payload.payload && payload.payload.value}`}
                </span>
                <span className={styles.toolTipValue}>
                  {" "}
                  <b>{`${numberWithCommas(
                    Number(payload.value).toFixed(3)
                  )}`}</b>
                </span>
                <span className={styles.toolTipKey}>
                  {" "}
                  {`  (${totalPercentage(
                    payload.payload && payload.payload.totalValue,
                    payload.payload && payload.payload.total
                  )}%)`}
                </span>
              </div>
            );
          })}
      </div>
    );
  }

  return null;
};

import React from "react";

export const totalPercentage = (total: number, value: number) => {
  return ((value * 100) / total).toFixed(2);
};

export const numberWithCommas = (input: string) => {
  return parseFloat(input)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dataFormater = (number: number) => {
  if (number >= 1000000000) {
    return numberWithCommas((number / 1000000000).toFixed(2).toString()) + "B";
  } else if (number >= 1000000) {
    return numberWithCommas((number / 1000000).toFixed(2).toString()) + "M";
  } else {
    return numberWithCommas(number.toString());
  }
};

export default {
  totalPercentage,
  numberWithCommas,
  dataFormater,
};

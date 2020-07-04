import { StackOffsetType } from "recharts";
import React from "react";

const stackOptions = ["Stack", "Shilhouette", "Expand"];
const barOptions = ["Grouped", "Stacked"];

const switchStackOption = (
  option: number,
  updateStack: (option: StackOffsetType) => void
) => {
  switch (option) {
    case 0: {
      updateStack("none");
      break;
    }
    case 1: {
      updateStack("silhouette");
      break;
    }
    case 2: {
      updateStack("expand");
      break;
    }
    default: {
      updateStack("none");
      break;
    }
  }
};

const switchBarOption = (
  option: number,
  isStack: (option: boolean) => void
) => {
  switch (option) {
    case 0: {
      isStack(false);
      break;
    }
    case 1: {
      isStack(true);
      break;
    }
    default: {
      isStack(false);
      break;
    }
  }
};

export const selectBarOption = (isStack: (option: boolean) => void) => {
  return barOptions.map((option, idx) => {
    return (
      <label key={idx}>
        <input
          type="radio"
          name="chk_stack"
          value={option}
          onClick={() => switchBarOption(idx, isStack)}
        />
        {option}
      </label>
    );
  });
};

export const selectStackOption = (
  updateStack: (option: StackOffsetType) => void
) => {
  return stackOptions.map((option, idx) => {
    return (
      <label key={idx}>
        <input
          type="radio"
          name="chk_stack"
          value={option}
          onClick={() => switchStackOption(idx, updateStack)}
        />
        {option}
      </label>
    );
  });
};

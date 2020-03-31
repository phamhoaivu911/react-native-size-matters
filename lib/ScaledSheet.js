import { StyleSheet } from "react-native";

import Config from "./config";
import deepMap from "./deep-map";

const validScaleSheetRegex = /^(\-?\d+(\.\d{1,3})?)(@(ms(\d+(\.\d{1,2})?)?|s|vs|n)(r?))?$/;

const scaleByAnnotation = (scale, verticalScale, moderateScale) => (value) => {
  if (!validScaleSheetRegex.test(value)) {
    return value;
  }

  const regexExecResult = validScaleSheetRegex.exec(value);
  const size = parseFloat(regexExecResult[1]);
  const scaleFunc = regexExecResult[4];
  const shouldRound = typeof value === "string" ? value.endsWith("r") : false;

  let result;

  switch (scaleFunc) {
    case "n":
      return size;
    case undefined:
      const { alwaysScale } = Config.get();
      if (alwaysScale) {
        result = alwaysScale(size);
        break;
      } else {
        return size;
      }
    case "s":
      result = scale(size);
      break;
    case "vs":
      result = verticalScale(size);
      break;
    case "ms":
      result = moderateScale(size);
      break;
    default:
      const scaleFactor = value.split("ms")[1].replace("r", "");
      result = moderateScale(size, parseFloat(scaleFactor));
  }

  return shouldRound ? Math.round(result) : result;
};

const scaledSheetCreator = (scale, verticalScale, moderateScale) => {
  const scaleFunc = scaleByAnnotation(scale, verticalScale, moderateScale);
  return {
    create: (styleSheet) => StyleSheet.create(deepMap(styleSheet, scaleFunc)),
  };
};

export default scaledSheetCreator;

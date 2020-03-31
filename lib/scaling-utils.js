import { Dimensions } from "react-native";

import Config from "./config";

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

export const scale = (size) =>
  (shortDimension / Config.get().guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / Config.get().guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

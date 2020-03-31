import { Dimensions } from "react-native";

import Config from "./config";

const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const { guidelineBaseWidth, guidelineBaseHeight } = Config.get();

export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

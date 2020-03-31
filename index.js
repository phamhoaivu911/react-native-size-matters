import scaledSheetCreator from "./lib/ScaledSheet";
import { scale, verticalScale, moderateScale } from "./lib/scaling-utils";
import Config from "./lib/config";

export { Config };
export const ScaledSheet = scaledSheetCreator(
  scale,
  verticalScale,
  moderateScale
);
export * from "./lib/scaling-utils";

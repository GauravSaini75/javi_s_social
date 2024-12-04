import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const moderateScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const textScale = (size: number, factor = 0.5) => size + (moderateScale(size) - size) * factor;

export { textScale, moderateScale, verticalScale };

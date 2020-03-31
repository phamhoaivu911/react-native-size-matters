const createConfig = () => {
  // Default guideline sizes are based on standard ~5" screen mobile device
  let defaultGuidelineBaseWidth = 350;
  let defaultGuidelineBaseHeight = 680;

  // By default, we do not scale value without @ postfix
  let defaultAlwaysScale = false;

  const set = ({
    guidelineBaseWidth,
    guidelineBaseHeight,
    alwaysScale,
  } = {}) => {
    defaultGuidelineBaseWidth = guidelineBaseWidth;
    defaultGuidelineBaseHeight = guidelineBaseHeight;
    defaultAlwaysScale = alwaysScale;
  };

  const get = () => ({
    guidelineBaseWidth: defaultGuidelineBaseWidth,
    guidelineBaseHeight: defaultGuidelineBaseHeight,
    alwaysScale: defaultAlwaysScale,
  });

  return { set, get };
};

export default createConfig();

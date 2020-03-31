import Config from "../lib/config";

describe("config", () => {
  test("default value", () => {
    expect(Config.get()).toEqual({
      guidelineBaseWidth: 350,
      guidelineBaseHeight: 680,
      alwaysScale: false,
    });
  });

  test("set", () => {
    const scale = jest.fn();
    Config.set({
      guidelineBaseWidth: 375,
      guidelineBaseHeight: 812,
      alwaysScale: scale,
    });
    expect(Config.get()).toEqual({
      guidelineBaseWidth: 375,
      guidelineBaseHeight: 812,
      alwaysScale: scale,
    });
  });
});

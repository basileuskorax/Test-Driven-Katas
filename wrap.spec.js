const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });

  it("Ignores spaces", () => {
    expect(wrap("This sates my hunger", 10)).to.equal("This sates\nmy hunger");
  });

  it("Handles a very long word", () => {
    expect(wrap("Thissatesmyhunger", 10)).to.equal("Thissatesm\nyhunger");
  });
});

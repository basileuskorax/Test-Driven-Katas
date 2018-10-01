const { expect } = require("chai");
const twoSum = require("./twoSum");

describe("twoSum", () => {
  it("Returns an array", () => {
    expect(twoSum([], 5)).to.equal([]);
  });

  it("Returns an empty array if there are no elements that sum up to the target", () => {
    expect(twoSum([5, 2, 1], 5)).to.equal([]);
  });

  it("Returns indices of matching elements", () => {
    expect(twoSum([1, 2, 3], 5)).to.equal([1, 2]);
  });

  it("Does not use the same elements twice", () => {
    expect(twoSum([3, 2, 4, 5, 1], 6)).to.equal([1, 2]);
  });
});

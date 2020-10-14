import excitedCells from "./excitedCells";

describe("shortState", () => {
  const shortState = [1, 0, 1, 1];
  test("with one step", () => {
    const expected = [1, 0, 1, 0];
    const result = excitedCells(shortState, 1);
    expect(expected).toEqual(result);
  });
  test("with two steps", () => {
    const expected = [0, 0, 0, 0];
    const result = excitedCells(shortState, 2);
    expect(expected).toEqual(result);
  });
  test("with 100 steps", () => {
    const expected = [0, 0, 0, 0];
    const result = excitedCells(shortState, 100);
    expect(expected).toEqual(result);
  });
});

describe("spreadAround", () => {
    const spreadAroundState = [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0];
    test("with one step", () => {
        const expected = [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0];
        const result = excitedCells(spreadAroundState, 1);
        expect(expected).toEqual(result);
    })
    test("with ten steps", () => {
        const expected = [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0];
        const result = excitedCells(spreadAroundState, 7);
        expect(expected).toEqual(result);
    })
})
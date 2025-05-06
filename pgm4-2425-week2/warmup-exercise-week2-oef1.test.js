import { checkExam } from "./warmup-exercise-week2-oef1";

describe("multipleOfOwnIndex", () => {
  it("should return the expected string", () => {
    expect(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])).toEqual(6);
  });
});

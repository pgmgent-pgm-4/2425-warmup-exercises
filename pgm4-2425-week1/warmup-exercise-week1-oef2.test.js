import { multipleOfOwnIndex } from "./warmup-exercise-week1-oef2.js";

describe("multipleOfOwnIndex", () => {
    it("should return the expected string", () => {
        expect(multipleOfOwnIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25]);
    });
});
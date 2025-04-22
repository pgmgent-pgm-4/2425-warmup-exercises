import { getLikesAsString } from "./warmup-exercise-1.js";

describe("getLikesAsString", () => {
    it("should return the expected string", () => {
        expect(getLikesAsString([])).toBe("Niemand vindt dit leuk");
        expect(getLikesAsString(["Peter"])).toBe("Peter vindt dit leuk");
        expect(getLikesAsString(["Marc", "Alex"])).toBe("Marc en Alex vinden dit leuk");
        expect(getLikesAsString(["Louise", "Lukas", "Bert"])).toBe("Louise, Lukas en Bert vinden dit leuk");
        expect(getLikesAsString(["Tom", "Sarah", "Marc", "Max"])).toBe("Tom, Sarah en 2 anderen vinden dit leuk");
        expect(getLikesAsString(["Tom", "Sarah", "Jan", "Marc", "Max"])).toBe("Tom, Sarah en 3 anderen vinden dit leuk");
    });
});
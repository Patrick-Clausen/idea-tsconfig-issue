import {describe, it} from "node:test";
import assert from "node:assert"
import {main} from "./main";

describe("main", () => {
    it("should return test", () => {
        assert.strictEqual(main(), "My-string");
    })
})
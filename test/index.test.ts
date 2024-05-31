import { expect, test } from "bun:test"

test("+1", () => {
  expect(1 + 1).toBe(2)
})

test("-1", () => {
  expect(1 - 1).toBe(0)
})

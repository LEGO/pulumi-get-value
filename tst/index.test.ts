import { Output } from "@pulumi/pulumi";
import { getValue } from "../src";

describe("getValue", () => {
  it("returns the wrapped value", async () => {
    // Arrange
    const value = "my-value";
    const output = Output.create(value);

    // Act
    const result = await getValue(output);

    // Assert
    expect(result).toBe(value);
  });

  it("eventually returns the wrapped value", async () => {
    // Arrange
    const value = "my-value";
    const promise = Promise.resolve(value);
    const output = Output.create(promise);

    // Act
    const result = await getValue(output);

    // Assert
    expect(result).toBe(value);
  });
});
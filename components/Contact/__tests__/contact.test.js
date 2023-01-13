import { render, screen } from "@testing-library/react";
import ContactComponent from "../ContactComponent";
import { contactSchema } from "../../Validation/ContactSchema";

function sum(a, b) {
  return a + b;
}

describe("Testing contact", () => {
  test("contact reason", async () => {
    const data = {
      reason: "The reason",
    }
   await expect(
      await contactSchema.validateAt("reason", data.reason)
    ).resolves.toBeTruthy();
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

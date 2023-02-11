import { contactSchema } from "../../Validation/ContactSchema";
import { reach } from "yup";

describe("Testing contact", () => {
  // testing email field
  test("Reason value string expect true", async () => {
    const data = {
      email: "Marcin@gmail.com",
    };
    await expect(
      await reach(contactSchema, "email").isValidSync(data.email)
    ).toBeTruthy();
  });

  test("Reason input not email expect false", async () => {
    const data = {
      email: "Marcin",
    };
    await expect(
      await reach(contactSchema, "email").isValidSync(data.email)
    ).toBeFalsy();
  });

  test("Reason input as object expect fail", async () => {
    const data = {
      email: "Marcin@gmail.com",
    };
    await expect(
      await reach(contactSchema, "email").isValidSync(data)
    ).toBeFalsy();
  });

  // testing reason field
  test("Reason value string expect true", async () => {
    const data = {
      reason: "The reason",
    };
    await expect(
      await reach(contactSchema, "reason").isValidSync(data.reason)
    ).toBeTruthy();
  });

  test("Reason value empty string expect false", async () => {
    const data = {
      reason: "",
    };
    await expect(
      await reach(contactSchema, "reason").isValidSync(data.reason)
    ).toBeFalsy();
  });

  test("Reason value object expect fail", async () => {
    const data = {
      reason: "the reason",
    };
    await expect(
      await reach(contactSchema, "reason").isValidSync(data)
    ).toBeFalsy();
  });
  // testing describe field
  test("Describe value string between 50 to 300 letters expect true", async () => {
    const data = {
      describe: "The reason is that I want to know more about this project and I want to be a part of it SPAM SPAM SPAM SPAM",
    };
    await expect(
      await reach(contactSchema, "describe").isValidSync(data.describe)
    ).toBeTruthy();
  });

  test("Describe value object expect fail", async () => {
    const data = {
      describe: "The reason is that I want to know more about this project and I want to be a part of it SPAM SPAM SPAM SPAM",
    };
    await expect(
      await reach(contactSchema, "describe").isValidSync(data)
    ).toBeFalsy();
   });

  test("Describe value string less than 50 letters expect false", async () => {
    const data = {
      describe: "Weee",
    };
    await expect(
      await reach(contactSchema, "describe").isValidSync(data.describe)
    ).toBeFalsy();
  });

});

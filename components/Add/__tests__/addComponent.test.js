import { addSchema } from "../../Validation/AddSchema";
import { reach } from "yup";

describe("Testing add", () => {
    // testing title field
    test( "Title value string expect true", async () => {
    const data = {
        title: "The title",
    };
    await expect(
        await reach(addSchema, "title").isValidSync(data.title)
    ).toBeTruthy();
    });

    test("Title value empty string expect false", async () => {
        const data = {
            title: "",
        };
        await expect(
            await reach(addSchema, "title").isValidSync(data.title)
        ).toBeFalsy();
    });

    test("Title value object expect fail", async () => {
        const data = {
            title: "the title",
        };
        await expect(
            await reach(addSchema, "title").isValidSync(data)
        ).toBeFalsy();
    });
    // testing description field
    test("Description value in range expect true", async () => {
        const data = {
            description: "The reason is that I want to know more about this project and I want to be a part of it SPAM SPAM SPAM SPAM",
        };
        await expect(
            await reach(addSchema, "description").isValidSync(data.description)
        ).toBeTruthy();
    });

    test("Description value object expect fail", async () => {
        const data = {
            description: "The reason is that I want to know more about this project and I want to be a part of it SPAM SPAM SPAM SPAM",
        };
        await expect(
            await reach(addSchema, "description").isValidSync(data)
        ).toBeFalsy();
    });

    test("Description value string less than 50 letters expect false", async () => {
        const data = {
            description: "Weee",
        };
        await expect(
            await reach(addSchema, "description").isValidSync(data.description)
        ).toBeFalsy();
    });
    // model field
    test("Model value string expect true", async () => {
        const data = {
            model: "The model",
        };
        await expect(
            await reach(addSchema, "model").isValidSync(data.model)
        ).toBeTruthy();
    });

    test("Model value empty string expect false", async () => {
        const data = {
            model: "",
        };
        await expect(
            await reach(addSchema, "model").isValidSync(data.model)
        ).toBeFalsy();
    });

    test("Model value object expect fail", async () => {
        const data = {
            model: "the model",
        };
        await expect(
            await reach(addSchema, "model").isValidSync(data)
        ).toBeFalsy();
    });
    // price field
    test("Price value number expect true", async () => {
        const data = {
            price: 100,
        };
        await expect(
            await reach(addSchema, "price").isValidSync(data.price)
        ).toBeTruthy();
    });

    // test("Price value string expect false", async () => {
    //     const data = {
    //         price: "100",
    //     };
    //     await expect(
    //         await reach(addSchema, "price").isValidSync(data.price)
    //     ).toBeFalsy();
    // });

    test("Price value object expect fail", async () => {
        const data = {
            price: 100,
        };
        await expect(
            await reach(addSchema, "price").isValidSync(data)
        ).toBeFalsy();
    });
    // count field
    test("Count value number expect true", async () => {
        const data = {
            count: 100,
        };
        await expect(
            await reach(addSchema, "count").isValidSync(data.count)
        ).toBeTruthy();
    });

    // test("Count value string expect false", async () => {
    //     const data = {
    //         count: "100",
    //     };
    //     await expect(
    //         await reach(addSchema, "count").isValidSync(data.count)
    //     ).toBeFalsy();
    // });

    test("Count value object expect fail", async () => {
        const data = {
            count: 100,
        };
        await expect(
            await reach(addSchema, "count").isValidSync(data)
        ).toBeFalsy();
    });
    // image field

    // test("Proper file expect false", async () => {
    //     const data = {
    //         image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    //     };
    //     await expect(
    //         await reach(addSchema, "image").isValidSync(data.image)
    //     ).toBeTruthy();
    // });

    test("Image value empty string expect false", async () => {
        const data = {
            image: "",
        };
        await expect(
            await reach(addSchema, "image").isValidSync(data.image)
        ).toBeFalsy();
    });

    test("Image value object expect fail", async () => {
        const data = {
            image: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        };
        await expect(
            await reach(addSchema, "image").isValidSync(data)
        ).toBeFalsy();
    });


});
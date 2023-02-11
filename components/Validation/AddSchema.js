import * as yup from "yup";
import { shoeSize, shoeType, shoeCategory } from "../reusable/shoesInfo";

const maxFileSize = 10;

export const addSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  model: yup.string().required("Model is required"),
  description: yup
    .string()
    .min(50)
    .max(300, " You need to provide atleast 50 to 300 ")
    .required("Description is required"),
  size: yup
    .number("you need to provide number")
    .positive("please choose number")
    .required("Size is required")
    .typeError("pick size"),
  count: yup
    .number("Please provide count")
    .positive("provide positive number")
    .required("Count is required")
    .typeError("provide positive number"),
  price: yup
    .number("Please provide price")
    .positive("provide positive number")
    .required("Price is required") 
    .typeError("provide positive number"),
  image: yup
    .mixed()
    .required("Image is required")
    .test({
      message: "Please provide a supported file type",
      test: (file, context) => {
        const ext = file[0]?.type?.split("/")[1];
        const isValid = ["png", "jpeg", "webm"].includes(ext);
        if (!isValid) context?.createError();
        return isValid;
      },
    })
    .test({
      message: `File too big, can't exceed ${maxFileSize}mb`,
      test: (file) => {
        const isValid = file[0]?.size / 1024 / 1024 < maxFileSize;
        return isValid;
      },
    }),
  brand: yup.string().required("Brand is required"),
  // category: yup.array().of(
  //   yup.string().oneOf(
  //     [...shoeCategory],
  //   ).required("Category is required"))
  // type: yup.string().required("Type is required"),
});

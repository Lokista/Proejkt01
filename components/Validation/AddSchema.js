import * as yup from 'yup';

const AddSchema = {
    owner: yup.string().required('Owner is required'),
    title:  yup.string().required('Title is required'),
    model: yup.string().required('Model is required'),
    description: yup.string().required('Description is required'),
    size: yup.string().required('Size is required'),
    count: yup.number().required('Count is required'),
    price: yup.number().required('Price is required'),
    image: yup.string().required('Image is required'),
    brand: yup.string().required('Brand is required'),
    category: yup.string().required('Category is required'),
    type: yup.string().required('Type is required'),


}
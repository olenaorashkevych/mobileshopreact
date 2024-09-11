import * as yup from "yup";
const userschema = yup.object().shape({
    name: yup.string().required(),
        email: yup.string().email().required(),
        phone: yup.number(),
        town: yup.string().min(3).max(25),
        post_office: yup.number().required(),
        payment: yup.string().required
})
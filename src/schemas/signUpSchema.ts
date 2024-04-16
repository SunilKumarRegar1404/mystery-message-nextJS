import {z} from 'zod'

export const userNameValidation= z
    .string()
    .min(2,"username must be of atleast 2 characters")
    .max(20,"username must be no more than 20 characters")
    .regex(/^[a-zA-A0-9]+$/,"username must not contain special characters")


export const singUpSchema=z.object({
    username:userNameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:"password must be atleast 6 characters"})
})
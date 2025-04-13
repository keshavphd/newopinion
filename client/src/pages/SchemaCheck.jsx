import { z } from "zod";

export const genderOptions = ["male", "female", "other"];

const today = new Date();
const minAge = 14;
const maxAge = 99;

export const calculateAge = (dateOfBirthString) => {
  if (!dateOfBirthString) return "0";

  const dateOfBirth = new Date(dateOfBirthString);
  if (isNaN(dateOfBirth.getTime())) {
    return "Invalid date";
  }
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDifference = today.getMonth() - dateOfBirth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dateOfBirth.getDate())
  ) {
    return age - 1;
  }
  return age;
};

export const allSchema = z.object({
  firstname: z
    .string()
    .min(1, { message: "Field is required" })
    .regex(/^[a-zA-Z ]+$/, "Please enter only alphabets"),
  lastname: z
    .string()
    .min(1, { message: "Field is required" })
    .regex(/^[a-zA-Z ]+$/, "Please enter only alphabets"),
  email: z
    .string()
    .min(1, { message: "Field is required" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address"),
  mobile: z
    .string()
    .min(1, { message: "Field is required" })
    .regex(/^[0-9]+$/, "Please enter only numbers"),
  gender: z.enum(genderOptions, {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  dateOfBirth: z.coerce.date().refine(
    (date) => {
      const age = calculateAge(date);
      return age >= minAge && age < maxAge;
    },
    {
      message: `Age must be between ${minAge} and ${maxAge} years old`,
    }
  ),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmpassword: z.string(),
}).refine((data) => data.password === data.confirmpassword, {
  message: 'Passwords do not match',
  path: ['confirmpassword'],
});

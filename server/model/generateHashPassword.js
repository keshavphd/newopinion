import argon2 from "argon2";
const generateHashPassword = async (password) => {
  const hashPassword = await argon2.hash(password);
  return hashPassword;
};
export default generateHashPassword;

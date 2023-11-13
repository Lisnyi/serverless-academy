import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 10);

  return hashPassword;
};

export { hashPassword };

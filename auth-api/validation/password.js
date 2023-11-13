const isPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,32}$/;
  return passwordRegex.test(password);
};

export { isPassword };

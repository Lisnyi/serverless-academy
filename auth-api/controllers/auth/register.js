import {
  addUser,
  findUserByEmail,
  updateUserAccessToken,
  updateUserRefreshToken,
  isUniqUserEmail,
} from "../../services/authServices/index.js";
import { hashPassword, createToken } from "../../helpers/index.js";

const register = async (req, res) => {
  const { email, password } = req.body;

  await isUniqUserEmail(email);

  const hashedPassword = await hashPassword(password);

  await addUser(email, hashedPassword);
  const user = await findUserByEmail(email);
  const payload = {
    email,
    id: user.id,
  };
  const accessToken = createToken(payload, true);
  const refreshToken = createToken(payload);

  await updateUserAccessToken(accessToken, user.id);
  const newUser = await updateUserRefreshToken(refreshToken, user.id);

  res.status(201).json({
    success: true,
    data: {
      id: newUser.id,
      accessToken: newUser.access_token,
      refreshToken: newUser.refresh_token,
    },
  });
};

export { register };

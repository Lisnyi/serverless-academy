import {
  findUserByEmail,
  updateUserAccessToken,
} from "../../services/authServices/index.js";
import { createToken, comparePasswords } from "../../helpers/index.js";

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  await comparePasswords(password, user.password);

  const payload = {
    id: user.id,
    email: user.email,
  };

  const newAccessToken = createToken(payload, true);

  const updatedUser = await updateUserAccessToken(newAccessToken, user.id);

  res.json({
    success: true,
    data: {
      id: updatedUser.id,
      accessToken: updatedUser.access_token,
      refreshToken: updatedUser.refresh_token,
    },
  });
};

export { login };

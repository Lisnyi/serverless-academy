import { Router } from "express";
import { register, login } from "../../controllers/auth/index.js";
import { controllersWrapper } from "../../helpers/index.js";
import { validateBody } from "../../middlewares/index.js";
import { loginSchema, registrationSchema } from "../../schemas/index.js";

const authRouter = Router();

authRouter.post(
  "/sign-up",
  validateBody(registrationSchema),
  controllersWrapper(register)
);

authRouter.post(
  "/sign-in",
  validateBody(loginSchema),
  controllersWrapper(login)
);

export { authRouter };

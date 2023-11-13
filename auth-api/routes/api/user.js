import { Router } from "express";
import { getCurrent } from "../../controllers/auth/index.js";
import { controllersWrapper } from "../../helpers/index.js";
import { authenticate } from "../../middlewares/index.js";

const userRouter = Router();

userRouter.get("/me", authenticate, controllersWrapper(getCurrent));

export { userRouter };

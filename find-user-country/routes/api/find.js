import { Router } from "express";
import { controllersWrapper } from "../../helpers/index.js";
import { findCountry } from "../../controllers/index.js";

const findRouter = Router();

findRouter.get("/", controllersWrapper(findCountry));

export { findRouter };

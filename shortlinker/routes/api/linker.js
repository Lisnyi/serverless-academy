import { Router } from "express";
import {
  generateShortLink,
  redirectShortLink,
} from "../../controllers/index.js";
import { controllersWrapper } from "../../helpers/index.js";
import { validateURL } from "../../middlewares/index.js";

const linkerRouter = Router();

linkerRouter.post("/short", validateURL, controllersWrapper(generateShortLink));
linkerRouter.get("/:id", controllersWrapper(redirectShortLink));

export { linkerRouter };

import { Router } from "express";
import { sendData, getData } from "../../controllers/index.js";
import { controllersWrapper } from "../../helpers/index.js";

const storageRouter = Router();

storageRouter.get("/:path", controllersWrapper(getData));
storageRouter.post("/:path", controllersWrapper(sendData));

export { storageRouter };

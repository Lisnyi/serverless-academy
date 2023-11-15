import { readData } from "../services/index.js";

const sendData = async (req, res) => {
  const path = req.params.path;

  const data = await readData(path);

  res.json({
    success: true,
    data,
  });
};

export { sendData };

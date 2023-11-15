import { writeData } from "../services/index.js";

const getData = async (req, res) => {
  const path = req.params.path;
  const data = req.body;

  await writeData(path, data);

  res.status(201).json({
    success: true,
    path,
    data,
  });
};

export { getData };

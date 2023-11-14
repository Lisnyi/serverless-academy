import { app } from "./app.js";

const { PORT = 3000 } = process.env;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});

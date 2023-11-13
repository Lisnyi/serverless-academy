import { app } from "./app.js";
import { client } from "./db/index.js";

const { PORT = 3000 } = process.env;

client
  .connect()
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

import { ENDPOINTS } from "./endpoints.js";
import { getResponse } from "./api.js";
import { flatObject } from "./utils.js";

async function sortResponses() {
  let isDoneTrue = 0;
  let isDoneFalse = 0;
  for (const endpoint of ENDPOINTS) {
    try {
      const response = await getResponse(endpoint);
      const flatResponse = flatObject(response);
      if (flatResponse.isDone) {
        isDoneTrue++;
      } else {
        isDoneFalse++;
      }

      console.log(`[Success] ${endpoint}: isDone - ${flatResponse.isDone}`);
    } catch (e) {
      console.log(`[Fail] ${endpoint}: The endpoint is unavailable`);
    }
  }
  console.log(
    `Found True values: ${isDoneTrue}\nFound False values: ${isDoneFalse}`
  );
}

sortResponses();

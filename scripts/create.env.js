import fs from "node:fs/promises";
import path from "node:path";
import "dotenv/config";

(async () => {
  const object = {};
  for (const key in process.env) {
    if (Object.hasOwnProperty.call(process.env, key)) {
      if (key.startsWith("VITE_PUBLIC")) {
        const value = process.env[key];
        object[key] = value;
      }
    }
  }
  const output = `window.env = ${JSON.stringify(object)}`;
  await fs.writeFile(path.resolve(import.meta.dirname, "../public/env.js"), output);
})();

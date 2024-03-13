import { exec } from "child_process";
import "dotenv/config";

const execPromise = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, {}, (error, stdout, stderr) => {
      if (error) {
        const message = `>>> error: ${error.message}`;
        console.log(message);
        reject(message);
      }

      if (stderr) {
        const message = `>> stderr: ${stderr}`;
        console.log(message);
        resolve(message);
      }

      const message = `> stdout: ${stdout}`;
      console.log(message);
      resolve(message);
    });
  });
};

(async () => {
  try {
    const date = new Date();
    const token = process.env?.VITE_WEB_GH_TOKEN || "";
    const commit = `git commit -m "Auto deploy from script (${date.toUTCString()})"`;
    const push = `git push --set-upstream -f https://${token}@github.com/ngmthaq/ngmthaq.github.io.git main`;
    await execPromise(`cd ./dist && git init`);
    await execPromise(`cd ./dist && git branch -M main`);
    await execPromise(`cd ./dist && git add --all`);
    await execPromise(`cd ./dist && ${commit}`);
    await execPromise(`cd ./dist && ${push}`);
  } catch (error) {
    console.error(error);
  }
})();

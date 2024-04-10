import { backup } from "./backup";

console.log("NodeJS Version: " + process.version);

console.log("Running backup...");

backup()
  .then(() => {
    console.log("Backup finished...");
    process.exit(0);
  })
  .catch((error) => {
    console.error("Error while running backup: ", error);
    process.exit(1);
  });

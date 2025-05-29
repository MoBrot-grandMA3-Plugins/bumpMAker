const { spawn } = require("child_process");
const path = require("path");
const fs = require("fs");

const bin = path.resolve(__dirname, "../node_modules/.bin/tstl.cmd"); // Windows: use .cmd

if (!fs.existsSync(bin)) {
    console.error("❌ tstl binary not found at", bin);
    process.exit(1);
}

const child = spawn(bin, process.argv.slice(2), { stdio: "inherit", shell: true });

child.on("error", (err) => {
    console.error("❌ Failed to spawn tstl:", err);
    process.exit(1);
});

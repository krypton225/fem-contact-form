import path from "path";
import { fileURLToPath } from "url";

// ES Module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/js/index.js",
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "public"),
    },
};

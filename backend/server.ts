import app from "./src/app.ts";
import { config } from "./src/config/config.ts"
import connectDB from "./src/config/db.ts";

const startServer = async () => {
    const port = config.port;

    await connectDB();

    app.listen(port, () => {
        console.log(`Listerning on port: ${port}`);
    });
}

startServer();
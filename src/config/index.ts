import dotenv from "dotenv";
dotenv.config();

interface config {
  port: number;
}

const config: config = {
  port: Number(process.env.PORT) || 3000
};

export default config;

import express from "express";
import cors from "cors";

import routes from "./routes";
import "./database";

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.server.use(express.json());
  }
  routes() {
    this.server(cors());
    this.server.use(routes);
  }
}

export default new App().server;

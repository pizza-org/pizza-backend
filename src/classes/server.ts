import express, { Application } from "express";
export default class Server {
  port: number;
  app: Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
    this.escucharPuerto();
  }

  escucharPuerto() {
    this.app.listen(this.port, () => {
      console.log(`Escuchando el puerto ${this.port}`);
    });
  }
}

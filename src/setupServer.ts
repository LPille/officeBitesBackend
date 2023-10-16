import { Application, json, urlencoded, Response, Request, NextFunction } from 'express';
import http from 'http';

const SERVER_PORT = 5000;

export class OfficeBitesServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.startServer(this.app);
  }

  private async startServer(app: Application): Promise<void> {
  }
}
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recipeRoutes from './routes/recipeRoutes';
import { MongoClient } from 'mongodb';
import { OfficeBitesServer } from './setupServer';
import databaseConnection from './setupDatabase';
const cors = require('cors');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());


databaseConnection();

app.use('/api', recipeRoutes);


app.get('/', (req: Request, res: Response) => {
  res.send('Office Bites Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});





/* class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: OfficeBitesServer = new OfficeBitesServer(app);
    server.start();
    Application.handleExit();
  }


  private static handleExit(): void {
    process.on('uncaughtException', (error: Error) => {
      console.error(`There was an uncaught error: ${error}`);
      Application.shutDownProperly(1);
    });

    process.on('unhandleRejection', (reason: Error) => {
      console.error(`Unhandled rejection at promise: ${reason}`);
      Application.shutDownProperly(2);
    });

    process.on('exit', () => {
      console.error('Exiting');
    });
  }

  private static shutDownProperly(exitCode: number): void {
    Promise.resolve()
      .then(() => {
        console.info('Shutdown complete');
        process.exit(exitCode);
      })
      .catch((error) => {
        console.error(`Error during shutdown: ${error}`);
        process.exit(1);
      });
  }
}

const application: Application = new Application();

application.initialize(); */
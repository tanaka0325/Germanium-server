import * as bodyParser from "body-parser"
import * as express from "express"
import { Request, Response } from "express"
import "reflect-metadata"
import { createConnection } from "typeorm"
import { Memo } from "./entity/Memo"
import { Routes } from "./routes"

const PORT = 8888

createConnection()
  .then(async connection => {
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
      ;(app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const resultController = new (route.controller as any)()[route.action](req, res, next)
        if (resultController instanceof Promise) {
          resultController.then(result =>
            result !== null && result !== undefined ? res.send(result) : undefined
          )
        } else if (resultController !== null && resultController !== undefined) {
          res.json(resultController)
        }
      })
    })

    // start express server
    app.listen(PORT)
    console.log(
      `Express server has started on port ${PORT}. Open http://localhost:${PORT} to see results`
    )
  })
  .catch(error => console.log(error))

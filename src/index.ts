import * as bodyParser from "body-parser"
import * as express from "express"
import { Request, Response } from "express"
import { resolve } from "path"

const PORT = 8888
const app = express()
app.use(bodyParser.json())

// routes
app.get("/", (req, res) => {
  res.json({ msg: "hello world" })
})

// start express server
app.listen(PORT)
console.log(
  `Express server has started on port ${PORT}. Open http://localhost:${PORT} to see results`
)

import { NextFunction, Request, Response } from "express"
import { getRepository } from "typeorm"
import * as dayjs from "dayjs"

import { Sheet } from "../entity/Sheet"

export class SheetController {
  private sheetRepository = getRepository(Sheet)

  public async all(request: Request, response: Response, next: NextFunction) {
    return this.sheetRepository.find()
  }

  public async one(request: Request, response: Response, next: NextFunction) {
    return this.sheetRepository.findOne(request.params.id)
  }

  public async save(request: Request, response: Response, next: NextFunction) {
    const now = new Date()
    const todayString = dayjs(now).format("YYYY-MM-DD")
    const record = await this.sheetRepository
      .createQueryBuilder("sheet")
      .where(`date(created_at) = "${todayString}"`)
      .getOne()
    if (record) {
      return { msg: "today's record already exists!" }
    }
    const sheet = new Sheet()
    return this.sheetRepository.save(sheet)
  }
}

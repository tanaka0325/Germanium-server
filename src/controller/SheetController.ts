import { NextFunction, Request, Response } from "express"
import { getRepository } from "typeorm"

import { Sheet } from "../entity/Sheet"
import { formatDate } from "../utils"

export class SheetController {
  private sheetRepository = getRepository(Sheet)

  public async all(request: Request, response: Response, next: NextFunction) {
    return this.sheetRepository.find()
  }

  public async one(request: Request, response: Response, next: NextFunction) {
    return this.sheetRepository.findOne(request.params.id, { relations: ["memos"] })
  }

  public async insert(request: Request, response: Response, next: NextFunction) {
    const now = new Date()
    const todayString = formatDate(now)
    const record = await this.sheetRepository
      .createQueryBuilder("sheet")
      .where(`date(created_at) = "${todayString}"`)
      .getOne()
    if (record) {
      response.status(400)
      return {
        error: {
          message: "today's record already exists!",
        },
      }
    }
    const sheet = new Sheet()
    return this.sheetRepository.insert(sheet)
  }
}

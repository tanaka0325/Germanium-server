import { NextFunction, Request, Response } from "express"
import { getRepository } from "typeorm"

import { Memo } from "../entity/Memo"

export class MemoController {
  private memoRepository = getRepository(Memo)

  public async all(request: Request, response: Response, next: NextFunction) {
    return this.memoRepository.find()
  }

  public async save(request: Request, response: Response, next: NextFunction) {
    const memo = new Memo({ text: request.body.text, sheet_id: request.body.sheet_id })
    return this.memoRepository.save(memo)
  }
}

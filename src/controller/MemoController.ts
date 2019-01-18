import { NextFunction, Request, Response } from "express"
import { getRepository } from "typeorm"

import { Memo } from "../entity/Memo"
import { Sheet } from "../entity/Sheet"

export class MemoController {
  private memoRepository = getRepository(Memo)
  private sheetRepository = getRepository(Sheet)

  public async all(request: Request, response: Response, next: NextFunction) {
    return this.memoRepository.find()
  }

  public async save(request: Request, response: Response, next: NextFunction) {
    const sheet = await this.sheetRepository.findOne(request.body.sheet_id)
    const memo = new Memo({ text: request.body.text, sheet: sheet })
    return this.memoRepository.save(memo).catch(err => console.log(err))
  }

  public async remove(request: Request, response: Response, next: NextFunction) {
    const memo = await this.memoRepository.findOne(request.params.id)
    return this.memoRepository.remove(memo)
  }

  public async edit(request: Request, response: Response, next: NextFunction) {
    const memo = await this.memoRepository.findOne(request.params.id)
    const newMemo = Object.assign({}, memo, request.body)
    return this.memoRepository.save(newMemo)
  }
}

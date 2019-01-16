import { ulid } from "ulid"
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm"

import { Sheet } from "./Sheet"

@Entity()
export class Memo {
  @PrimaryColumn()
  public id: string

  @Column()
  public text: string

  @ManyToOne(type => Sheet, sheet => sheet.memos)
  public sheet: Sheet

  @CreateDateColumn({ type: "datetime" })
  public created_at: Date

  @UpdateDateColumn({ type: "datetime" })
  public updated_at: Date

  constructor(memo: { text: string; sheet: Sheet }) {
    if (memo) {
      this.id = ulid()
      this.text = memo.text
      this.sheet = memo.sheet
    }
  }
}

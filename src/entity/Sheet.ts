import { ulid } from "ulid"
import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  OneToMany,
  Column,
} from "typeorm"

import { Memo } from "./Memo"

@Entity()
export class Sheet {
  @PrimaryColumn()
  public id: string

  @OneToMany(type => Memo, memo => memo.sheet)
  public memos: Memo[]

  @CreateDateColumn({ type: "datetime" })
  public created_at: Date

  @UpdateDateColumn({ type: "datetime" })
  public updated_at: Date

  constructor() {
    this.id = ulid()
  }
}

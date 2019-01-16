import { ulid } from "ulid"
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Memo {
  @PrimaryColumn()
  public id: string

  @Column()
  public title: string

  @Column()
  public sheet_id: string

  @CreateDateColumn({ type: "datetime" })
  public created_at: Date

  @UpdateDateColumn({ type: "datetime" })
  public updated_at: Date

  constructor(memo: { title: string; sheet_id: string }) {
    if (memo) {
      this.id = ulid()
      this.title = memo.title
      this.sheet_id = memo.sheet_id
    }
  }
}

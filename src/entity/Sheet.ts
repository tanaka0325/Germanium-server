import { ulid } from "ulid"
import { CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Sheet {
  @PrimaryColumn()
  public id: string

  @CreateDateColumn({ type: "datetime" })
  public created_at: Date

  @UpdateDateColumn({ type: "datetime" })
  public updated_at: Date

  constructor() {
    this.id = ulid()
  }
}

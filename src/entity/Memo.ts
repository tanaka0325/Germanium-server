import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Memo {
  @PrimaryColumn()
  public id: string

  @Column()
  public title: string

  @CreateDateColumn({ type: "datetime" })
  public createdAt: Date

  @UpdateDateColumn({ type: "datetime" })
  public updatedAt: Date
}

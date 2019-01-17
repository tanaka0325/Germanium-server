import { MemoController } from "./controller/MemoController"
import { SheetController } from "./controller/SheetController"

export const Routes = [
  {
    method: "get",
    route: "/memos",
    controller: MemoController,
    action: "all",
  },
  {
    method: "post",
    route: "/memos",
    controller: MemoController,
    action: "save",
  },
  {
    method: "delete",
    route: "/memos/:id",
    controller: MemoController,
    action: "remove",
  },
  {
    method: "get",
    route: "/sheets",
    controller: SheetController,
    action: "all",
  },
  {
    method: "get",
    route: "/sheets/:id",
    controller: SheetController,
    action: "one",
  },
  {
    method: "post",
    route: "/sheets",
    controller: SheetController,
    action: "save",
  },
]

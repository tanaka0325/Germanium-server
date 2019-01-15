import { MemoController } from "./controller/MemoController"

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
]

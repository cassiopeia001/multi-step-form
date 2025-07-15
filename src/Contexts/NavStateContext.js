import { createContext } from "react";

export const navStateContext = createContext({
  navState: { step: 1, direction: 1 },
  navStateDispatch: () => {}
})
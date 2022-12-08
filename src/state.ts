import { atom } from "jotai"

type ButtonStates = "NORMAL" | "LOADING" | "ERROR"

const ButtonStateAtom = atom<ButtonStates>("NORMAL")

export { type ButtonStates, ButtonStateAtom }

import { atom } from "jotai"

type ButtonStates = "NORMAL" | "LOADING" | "ERROR" | "DONE"
type FadeStates = "fadeIn" | "fadeOut" | "baseButton"

const ButtonStateAtom = atom<ButtonStates>("NORMAL")
const FadeStateAtom = atom<FadeStates>("baseButton")

export { type ButtonStates, ButtonStateAtom, FadeStateAtom }

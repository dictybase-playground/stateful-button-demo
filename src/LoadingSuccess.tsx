import { ReactNode } from "react"
import { ButtonStateAtom, ButtonStates } from "./state"
import { useAtomValue } from "jotai"
import LoadingButton from "./LoadingButton"
import NormalButton from "./NormalButton"
import ErrorButton from "./ErrorButton"

const selectButton: Record<ButtonStates, ReactNode> = {
  NORMAL: <NormalButton />,
  LOADING: <LoadingButton />,
  ERROR: <ErrorButton />,
}

const LoadingSuccess = () => {
  const buttonState = useAtomValue(ButtonStateAtom)
  return <>{selectButton[buttonState]}</>
}

export default LoadingSuccess

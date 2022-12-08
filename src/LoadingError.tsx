import { ReactNode } from "react"
import { ButtonStateAtom, ButtonStates } from "./state"
import { useAtomValue } from "jotai"
import LoadingButton from "./LoadingButton"
import NormalButtonFail from "./NormalButtonFail"
import ErrorButton from "./ErrorButton"

const selectButton: Record<ButtonStates, ReactNode> = {
  NORMAL: <NormalButtonFail />,
  LOADING: <LoadingButton />,
  ERROR: <ErrorButton />,
}

const LoadingSuccess = () => {
  const buttonState = useAtomValue(ButtonStateAtom)
  return <>{selectButton[buttonState as keyof typeof selectButton]}</>
}

export default LoadingSuccess

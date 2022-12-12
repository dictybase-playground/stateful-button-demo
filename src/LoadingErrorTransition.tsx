import { ReactNode } from "react"
import { ButtonStateAtom, ButtonStates } from "./state"
import { useAtomValue } from "jotai"
import { TransitionGroup, Transition } from "react-transition-group"
import LoadingButton from "./LoadingButton"
import NormalButtonFail from "./NormalButtonFail"
import ErrorButton from "./ErrorButton"
import WithTransition from "./WithTransition"

const selectButton: Record<ButtonStates, ReactNode> = {
  NORMAL: <NormalButtonFail />,
  LOADING: <LoadingButton />,
  ERROR: <ErrorButton />,
}

const LoadingErrorTransition = () => {
  const buttonState = useAtomValue(ButtonStateAtom)
  return (
    <TransitionGroup>
      <Transition key={buttonState} timeout={100}>
        {(state) => (
          <WithTransition state={state}>
            {selectButton[buttonState as keyof typeof selectButton]}
          </WithTransition>
        )}
      </Transition>
    </TransitionGroup>
  )
}

export default LoadingErrorTransition

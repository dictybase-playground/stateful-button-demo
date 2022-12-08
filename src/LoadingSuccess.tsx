import { useState , ReactNode} from "react"
import { Button } from "@material-ui/core"

const successfulFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("success"), 2000)
  })
}

type ButtonStates = "NORMAL" | "LOADING" | "ERROR" | "SUCCESS"

const selectButton : Record<ButtonStates,ReactNode> = {
	NORMAL: 
}

enum States {
  NORMAL,
  LOADING,
  ERROR,
  SUCCESS,
}

const getButtonColor = (state: States) => {
  switch (state) {
    case States.ERROR: {
      return "secondary"
    }
    case States.SUCCESS: {
      return "primary"
    }
    default: {
      return "default"
    }
  }
}

const SuccessButton = () => {
  const [buttonState, setButtonState] = useState(States.NORMAL)

  const onClick = async () => {
    setButtonState(States.LOADING)
    try {
      await successfulFetch()
      setButtonState(States.SUCCESS)
    } catch (error) {
      setButtonState(States.ERROR)
    }
  }

  return (
    <Button
      color={getButtonColor(buttonState)}
      onClick={onClick}
      disabled={buttonState === States.LOADING}
      variant="contained">
      Will Succeed
    </Button>
  )
}

export default SuccessButton

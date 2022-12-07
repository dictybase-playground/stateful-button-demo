import { useState } from "react"
import { Button } from "@material-ui/core"

const failedFetch = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("error"), 2000)
  })
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

const ErrorButton = () => {
  const [buttonState, setButtonState] = useState(States.NORMAL)

  const onClick = async () => {
    setButtonState(States.LOADING)
    try {
      await failedFetch()
      setButtonState(States.NORMAL)
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
      Will Fail
    </Button>
  )
}

export default ErrorButton

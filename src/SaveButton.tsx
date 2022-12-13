import { ReactNode } from "react"
import { useAtom } from "jotai"
import { Button, CircularProgress, PropTypes } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import DoneIcon from "@material-ui/icons/Done"
import ErrorIcon from "@material-ui/icons/Error"
import { ButtonStateAtom, ButtonStates } from "./state"
import useButtonStyles from "./useButtonStyles"

const successfulFetch = () => {
  return new Promise((_, reject) => {
    setTimeout(() => reject("error"), 2000)
  })
}

const buttonText: Record<ButtonStates, String> = {
  NORMAL: "Save",
  LOADING: "Loading",
  DONE: "Done!",
  ERROR: "Error",
}

const buttonColor: Record<ButtonStates, PropTypes.Color> = {
  NORMAL: "primary",
  LOADING: "default",
  DONE: "primary",
  ERROR: "secondary",
}

const buttonIcon: Record<ButtonStates, ReactNode> = {
  NORMAL: <SaveIcon />,
  LOADING: <CircularProgress size={22} />,
  DONE: <DoneIcon />,
  ERROR: <ErrorIcon />,
}

const SaveButton = () => {
  const [buttonState, setButtonState] = useAtom(ButtonStateAtom)
  const { root } = useButtonStyles()

  const onClick = async () => {
    setButtonState("LOADING")
    try {
      await successfulFetch()
      setButtonState("DONE")
    } catch (error) {
      setButtonState("ERROR")
    } finally {
      setTimeout(() => {
        setButtonState("NORMAL")
      }, 1500)
    }
  }
  return (
    <Button
      className={root}
      variant="contained"
      color={buttonColor[buttonState]}
      disabled={buttonState === "LOADING"}
      onClick={onClick}
      startIcon={buttonIcon[buttonState]}>
      {buttonText[buttonState]}
    </Button>
  )
}

export default SaveButton

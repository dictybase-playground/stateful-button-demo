import { ReactNode, forwardRef } from "react"
import { useAtom } from "jotai"
import { motion } from "framer-motion"
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

const SaveButton = forwardRef<HTMLButtonElement>((_, ref) => {
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
      ref={ref}
      className={root}
      variant="contained"
      color={buttonColor[buttonState]}
      disabled={buttonState === "LOADING"}
      onClick={onClick}
      startIcon={buttonIcon[buttonState]}>
      {buttonText[buttonState]}
    </Button>
  )
})

const SaveButtonMotion = motion(SaveButton)

const SaveButtonFramer = () => (
  <SaveButtonMotion
    initial={{ x: -100 }}
    animate={{ x: 0 }}
    whileHover={{ scale: 1.2 }}
  />
)

export default SaveButtonFramer

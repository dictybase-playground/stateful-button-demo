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

type TextSlideProperties = {
  text: string
}

const TextSlide = ({ text }: TextSlideProperties) => (
  <motion.div key={text} initial={{ y: 20 }} animate={{ y: 0 }}>
    {text}
  </motion.div>
)

const buttonText: Record<ButtonStates, ReactNode> = {
  NORMAL: <TextSlide text={"Save"} />,
  LOADING: <TextSlide text={"Loading"} />,
  DONE: <TextSlide text={"Done!"} />,
  ERROR: <TextSlide text={"Error"} />,
}

const buttonIcon: Record<ButtonStates, ReactNode> = {
  NORMAL: <SaveIcon />,
  LOADING: <CircularProgress size={22} />,
  DONE: <DoneIcon />,
  ERROR: <ErrorIcon />,
}

const buttonColor: Record<ButtonStates, PropTypes.Color> = {
  NORMAL: "primary",
  LOADING: "default",
  DONE: "primary",
  ERROR: "secondary",
}

const SaveButton = () => {
  const [buttonState, setButtonState] = useAtom(ButtonStateAtom)
  const { root } = useButtonStyles()

  const onClick = async () => {
    // A better solution would probably be to set the button's state to disabled
    // when in the DONE or ERROR state, and override MUI's default styling for
    // a disabled button. Will try tomorrow, if time permits
    if (buttonState !== "NORMAL") return

    setButtonState("LOADING")
    try {
      await successfulFetch()
      setButtonState("DONE")
    } catch (error) {
      setButtonState("ERROR")
    } finally {
      setTimeout(() => {
        setButtonState("NORMAL")
      }, 2000)
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

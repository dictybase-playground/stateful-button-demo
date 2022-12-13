import { ReactNode } from "react"
import { useAtom } from "jotai"
import { motion, AnimatePresence } from "framer-motion"
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

// some repetitive code underneath. If this is a viable solution,
// I can create a separate component for it
const buttonText: Record<ButtonStates, ReactNode> = {
  NORMAL: (
    <motion.span
      key="normal"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      exit={{ y: -30, position: "absolute" }}>
      {"Save"}
    </motion.span>
  ),
  LOADING: (
    <motion.span
      key="loading"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      exit={{ y: -30, position: "absolute" }}>
      {"Loading"}
    </motion.span>
  ),
  DONE: (
    <motion.span
      key="done"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      exit={{ y: -30, position: "absolute" }}>
      {"Done!"}
    </motion.span>
  ),
  ERROR: (
    <motion.span
      key="error"
      initial={{ y: 30 }}
      animate={{ y: 0 }}
      exit={{ y: -30, position: "absolute" }}>
      {"Error"}
    </motion.span>
  ),
}

const buttonIcon: Record<ButtonStates, ReactNode> = {
  NORMAL: <SaveIcon />,
  LOADING: <CircularProgress size={22} />,
  DONE: <DoneIcon />,
  ERROR: <ErrorIcon />,
}

// I removed the disabled property for the loading state and kept it to a single
// color so we can observe the animation clearly.
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
      }, 2000)
    }
  }
  return (
    <Button
      className={root}
      variant="contained"
      onClick={onClick}
      startIcon={buttonIcon[buttonState]}>
      <AnimatePresence>{buttonText[buttonState]}</AnimatePresence>
    </Button>
  )
}

export default SaveButton

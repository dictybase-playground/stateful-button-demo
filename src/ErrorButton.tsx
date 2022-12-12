import { Button } from "@material-ui/core"
import { useSetAtom } from "jotai"
import ErrorIcon from "@material-ui/icons/Error"
import { ButtonStateAtom } from "./state"
import useButtonStyles from "./useButtonStyles"

const ErrorButton = () => {
  const { root } = useButtonStyles()
  const setButtonState = useSetAtom(ButtonStateAtom)
  const onClick = () => {
    setButtonState("NORMAL")
  }

  return (
    <Button
      onClick={onClick}
      className={root}
      variant="contained"
      color="secondary"
      startIcon={<ErrorIcon />}>
      {"Error"}
    </Button>
  )
}

export default ErrorButton

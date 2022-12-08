import { Button } from "@material-ui/core"
import ErrorIcon from "@material-ui/icons/Error"
import useButtonStyles from "./useButtonStyles"

const ErrorButton = () => {
  const { root } = useButtonStyles()

  return (
    <Button
      className={root}
      variant="contained"
      color="secondary"
      startIcon={<ErrorIcon />}>
      {"Error"}
    </Button>
  )
}

export default ErrorButton

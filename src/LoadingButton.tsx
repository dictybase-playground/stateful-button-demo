import { Button, CircularProgress } from "@material-ui/core"
import useButtonStyles from "./useButtonStyles"

const ICON_SIZE = 22

const LoadingButton = () => {
  const { root } = useButtonStyles()

  return (
    <Button
      className={root}
      variant="contained"
      disabled
      startIcon={<CircularProgress size={ICON_SIZE} />}>
      {"Saving"}
    </Button>
  )
}
export default LoadingButton

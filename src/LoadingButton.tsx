import { Button, CircularProgress } from "@material-ui/core"

const LoadingButton = () => (
  <Button variant="contained" disabled>
    <CircularProgress />
    {"Saving"}
  </Button>
)
export default LoadingButton

import { Button, CircularProgress } from "@material-ui/core"

const LoadingButton = () => (
  <Button variant="contained" disabled>
    <CircularProgress />
  </Button>
)

export default LoadingButton

import { Grid, Container } from "@material-ui/core"
import SuccessButton from "./SuccessButton"
import ErrorButton from "./ErrorButton"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <SuccessButton />
        </Grid>
        <Grid item>
          <ErrorButton />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

import { Grid, Container } from "@material-ui/core"
import NormalButton from "./NormalButton"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <NormalButton />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

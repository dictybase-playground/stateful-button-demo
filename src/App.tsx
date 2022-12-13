import { Grid, Container } from "@material-ui/core"
import NormalLoading from "./NormalLoading"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <NormalLoading />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

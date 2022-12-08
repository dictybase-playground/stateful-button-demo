import { Grid, Container } from "@material-ui/core"
import LoadingSuccess from "./LoadingSuccess"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <LoadingSuccess />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

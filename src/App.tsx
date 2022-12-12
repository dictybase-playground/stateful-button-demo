import { Grid, Container } from "@material-ui/core"
import LoadingSuccess from "./LoadingSuccess"
import FadeoutButton from "./FadeoutButton"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <LoadingSuccess />
        </Grid>
        <Grid item>
          <FadeoutButton />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

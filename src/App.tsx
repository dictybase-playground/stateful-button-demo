import { Grid, Container } from "@material-ui/core"
import { Provider } from "jotai"
import LoadingSuccess from "./LoadingSuccess"
import LoadingError from "./LoadingError"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Provider>
            <LoadingSuccess />
          </Provider>
        </Grid>
        <Grid item>
          <Provider>
            <LoadingError />
          </Provider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

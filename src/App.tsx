import { Grid, Container } from "@material-ui/core"
import { Provider } from "jotai"
import SaveButton from "./SaveButton"
import {SaveButton as SaveButtonDemo} from "./SaveButtonFramer"
import SaveButtonReactSimpleAnimate from "./SaveButtonReactSimpleAnimate"

function App() {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Provider>
            <SaveButton />
          </Provider>
        </Grid>
        <Grid item>
          <Provider>
            <SaveButtonDemo />
          </Provider>
        </Grid>
        <Grid item>
          <Provider>
            <SaveButtonReactSimpleAnimate />
          </Provider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App

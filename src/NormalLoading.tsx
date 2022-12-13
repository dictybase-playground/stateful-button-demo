import { Button } from "@material-ui/core"
import { ButtonStateAtom, ButtonStates } from "./state"
import { useAtom } from "jotai"

const fancyWait = (time:number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("success"), time)
  })
}

const selectButtonText: Record<ButtonStates, string> = {
  NORMAL: "Save",
  LOADING: ".. Loading",
  ERROR: "Error",
  DONE: "Done ..",
}

const NormalLoading = () => {
  const [buttonState, setButtonState] = useAtom(ButtonStateAtom)
  const onClick = async () => {
    setButtonState("LOADING")
    try {
      await fancyWait(2500)
      setButtonState("DONE")
      await fancyWait(2000)
      setButtonState("NORMAL")
    } catch (error) {
      setButtonState("ERROR")
    }
  }
  return (
    <Button size="large" variant="contained" color="primary" onClick={onClick}>
      {selectButtonText[buttonState]}
    </Button>
  )
}

export default NormalLoading

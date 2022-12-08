import { Button } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import { ButtonStateAtom } from "./state"
import { useSetAtom } from "jotai"

const successfulFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("success"), 2000)
  })
}

const NormalButton = () => {
  const setButtonState = useSetAtom(ButtonStateAtom)
  const onClick = async () => {
    setButtonState("LOADING")
    try {
      await successfulFetch()
      setButtonState("NORMAL")
    } catch (error) {
      setButtonState("ERROR")
    }
  }
  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<SaveIcon />}>
      {"Save"}
    </Button>
  )
}

export default NormalButton

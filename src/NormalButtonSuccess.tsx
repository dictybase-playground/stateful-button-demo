import { Button } from "@material-ui/core"
import SaveIcon from "@material-ui/icons/Save"
import { ButtonStateAtom } from "./state"
import { useSetAtom } from "jotai"
import useButtonStyles from "./useButtonStyles"

const successfulFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("success"), 2000)
  })
}

const NormalButtonSuccess = () => {
  const setButtonState = useSetAtom(ButtonStateAtom)
  const { root } = useButtonStyles()

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
      className={root}
      variant="contained"
      color="primary"
      onClick={onClick}
      startIcon={<SaveIcon />}>
      {"Save"}
    </Button>
  )
}

export default NormalButtonSuccess

import { makeStyles } from "@material-ui/core"

const useButtonStyles = makeStyles({
  root: {
    transition: `opacity 500ms ease-in-out`,
  },
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 1,
  },
  exited: {
    opacity: 0,
  },
})

export default useButtonStyles

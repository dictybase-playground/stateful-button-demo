import { Button } from "@material-ui/core"
import Contactless from "@material-ui/icons/Contactless"
import { makeStyles } from "@material-ui/core/styles"
import { useState } from "react"

const useStyles = makeStyles({
  beforeTransition: {
    transitionProperty: "opacity",
    transitionDuration: "0.5s",
    transitionTimingFunction: "linear",
    visibility: "visible",
    opacity: 1,
  },
  afterTransition: {
    transition: "visibility 0s 2s,opacity 0.5s linear",
    visibility: "hidden",
    opacity: 0,
  },
})

const FadeoutButton = () => {
  const [isTransitioned, setTransitioned] = useState(false)
  const classes = useStyles()
  const classValue = isTransitioned
    ? classes.afterTransition
    : classes.beforeTransition
  return (
    <Button
      className={classValue}
      onClick={() => {
        setTransitioned(true)
      }}
      size="large"
      variant="contained"
      color="primary"
      startIcon={<Contactless />}>
      {"Fade"}
    </Button>
  )
}

export default FadeoutButton

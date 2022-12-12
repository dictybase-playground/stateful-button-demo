import { makeStyles } from "@material-ui/core/styles"
import { Box } from "@material-ui/core"

type transitionStylesProperties = {
  timeout: number
}

type withTransitionProperties = {
  state: string
  children: React.ReactNode
}

const timeout = 100

const useTransitionStyles = makeStyles({
  root: {
    transition: (props: transitionStylesProperties) =>
      `opacity ${props.timeout}ms ease-in-out`,
  },
  entering: {
    position: "absolute",
    opacity: 0.5,
  },
  entered: {
    opacity: 1,
  },
  exiting: {
    opacity: 0,
  },
  exited: {
    opacity: 0,
  },
})

const WithTransition = ({ state, children }: withTransitionProperties) => {
  const transitionClasses = useTransitionStyles({ timeout })
  return (
    <Box
      className={`${transitionClasses.root} ${
        transitionClasses[state as keyof typeof transitionClasses]
      }`}>
      {children}
    </Box>
  )
}

export default WithTransition

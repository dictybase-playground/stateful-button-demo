# Button Transitions

## react-transition-group: Transition Group, Transition

A Transition component allows us to wrap a component and render it with four separate states:

    ENTERING,
    ENTERED,
    EXITING,
    EXITED

We can use these states to control the styling of a component over time to create an animated affect.

On it's own, the **Transition** component determines these states when the "in" boolean prop changes, but when wrapped by a **Transition Group** component, these states change when the **Transition** component is added to **Transition Group's** children

    INITIAL:

    <TransitionGroup>
        <Transition key={key} timeout={200}>
            {state => (<ComponentA state={state} />)}
        </Transition>
    </TransitionGroup>

    New Transition Component added to children

    NEXT:
    <TransitionGroup>
        <Transition key={key} timeout={200}>
            {state => (<ComponentA state={state} />)}
        </Transition>
        <Transition key={key} timeout={200}>
            {state => (<ComponentB state={state} />)}
        </Transition>
    </TransitionGroup>

```mermaid
    flowchart LR
        first[Transition w/ ComponentB is added to children]
        ---> second[ComponentB gets ENTERING state]
        --  200ms ---> third[ComponentB switches to ENTERED state]

```

Similarly, when a child is removed, the component will be given the EXITING state, followed by EXITED.

    <TransitionGroup>
        <Transition key={key} timeout={200}>
            {state => (<ComponentA state={state} />)}
        </Transition>
        {/* Transiton w/ ComponentB removed  */}
    </TransitionGroup>

```mermaid
    flowchart LR
        first[Transition w/ ComponentB is removed from children]
        ---> second[ComponentB gets EXITING state]
        --  200ms ---> third[ComponentB switches to EXITED state]

```

## Implementing in our Application

Since we want to animate changing from one **Button** component to another in the same place, we can render two different buttons on top of one another while the **opacity** _decreases_ for the initial Button and the **opacity** _increases_ for the incoming Button.

For example, When our **buttonState** atom changes, from "NORMAL" to "LOADING", the NormalButton component will be removed from the TransitionGroup's children and the LoadingButton component will be added. For a time, both components will be present:

-The NormalButton in the EXITING state, its opacity gradually changes from 1 to 0

-The LoadingButton in the ENTERING state, begins at 0.5

After the transition period:

-The NormalButton is in the EXITING state, it is immediately unmounted

-The LoadingButton is in the ENTERED state, its opacity gradually changes from 0.5 to 1

### With Transition

To avoid altering the Button Component files themselves to give them the transition styles, I created a WithTransition component that wraps the its children in a MUI Box component, which is what actually receives the transition styles.

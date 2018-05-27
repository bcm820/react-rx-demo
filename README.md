## react-Rx

---

This repo demonstrates how to do state management using an `Observable`.

What is an observable?

* Like an `EventEmitter`, it receives multiple listeners for registered events.
* Like a `Promise`, it handles events (i.e. success/failure) asynchronously.
* Like an `Iterator`, it can return multiple values over time before completing.

An observable produces/processes a single stream of data that can be `subscribed` to from multiple places in an application. As you can probably guess, React components can share a unified application state by subscribing to the same observable.

The best type of observable to use this with is the [BehaviorSubject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject), a hybrid observable/observer from [Reactive Extensions (RxJS)](https://github.com/Reactive-Extensions/RxJS). Here's how to initialize the data store that will hold the shared state:

```
const store$ = new BehaviorSubject(initialState);
```

The shared state can be subscribed to from within multiple components via the `componentDidMount` method and its value passed to the component's local state:

```
store$.subscribe(state => this.setState(state))
```

To reduce boilerplate and avoid repeating code, I composed a higher-component to handle the subscription. The `Observer` class HOC can receive the BehaviorSubject (plus optional configuration) via an `observe` function:

```
const rxConnect = observe(store$, ...configs)
export default rxConnect(WrappedComponent)
```

The Observer HOC will then pass down the shared state into its wrapped component as `props.rxState`.

To update the BehaviorSubject's value, it is as easy as calling `store$.next(newValue)`. But since the Observer HOC stores the reference to the BehaviorSubject, it's better not to have to import it into the component directly and expose its `next` method. Instead, the Observer provides a helper method, called `setRxState`, which which receives the state update and pushes it to the store$.

```
handleChange = nextValue => {
  this.props.setRxState(nextValue);
};
```

What if you want to map the state in a certain way in a component (i.e. compute some value based on the state)?

In order to modify the behavior of a subscription, RxJS provides various `operators`. These can be passed as any number of additional arguments to the `observe` function. For example,

```
const rxConnectPairwise = observe(store$, pairwise())
rxConnectPairwise(WrappedComponent)
```

returns a component whose `rxState` will be an array of two values: the previous rxState `[0]` and the current `[1]`. A more common operator is the `map` operator, which can function like a `mapStateToProps`:

```
const mapRxStateToProps = map(rxState => {
  const { string, number } = rxState;
  const doubleNumber = number * 2;
  return { string, doubleNumber };
})
const rxConnectMapped = observe(store$, mapRxStateToProps);
```

To learn more about RxJS operators, see [RxJS 5 Operators By Example](https://www.learnrxjs.io/operators/).

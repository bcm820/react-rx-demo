## react-rx

---

This repo demonstrates how easy it is to manage an application's shared state using `observables` from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS).

Observables provide an effective way for asynchronously handling the flow of data in an application. Data stored in observables are `pushed` to `subscribers`, usually on initial subscription as well as on each update.

In this demo, the observable state mechanism is a [BehaviorSubject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject), called `rxStore`. Updates to the rxStore from one connected component are multicasted to all others, ensuring the data is consistent across the application.

```
const rxStore$ = new BehaviorSubject(initialValue);
```

For convenience, I composed a higher-order component (HOC), `Observer`, to receive the observable (plus additional configuration) and to handle the subscriptions. The function used to connect the Observer to the rxStore$ and to wrap it around a component can be called like this:

```
const rxConnect = observe(rxStore$, ...args)
export default rxConnect(WrappedComponent)
```

The Observer then asynchronously receives the observable's `next` value on each update and passes this value down as props into its wrapped component as `props.rxState`.

```
<div>{this.props.rxState.whateverDataIsStored}</div>
```

The Observer also passes down a `setRxState` method which receives the state update and **updates the observable** (not just the local state of the HOC). This way, every HOC receives the update and re-renders its wrapped component with the updated `rxState`.

```
handleChange = nextValue => {
  this.props.setRxState(nextValue);
};
```

In order to modify the behavior of the observable (or a subscription of it), Rxjs provides various `operators`. These can be passed as additional arguments to the `observe` function. For example,

```
observe(rxStore$, pairwise())(WrappedComponent)
```

will return a component whose `props.rxState` will be an array of two values: the previous rxState `[0]` and the current `[1]`. A list of operators can be found in various places, but [this is a good start](https://www.learnrxjs.io/operators/).

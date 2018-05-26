## react-Rx

---

It is easy to manage an application's shared state using a unique kind of `observable/observer hybrid` from [Reactive Extensions (RxJS)](https://github.com/Reactive-Extensions/RxJS) known as a [Subject](http://reactivex.io/rxjs/manual/overview.html#subject). The data store for this application's shared state is initialized as a Subject variant known as a [BehaviorSubject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject):

```
const store$ = new BehaviorSubject(initialState);
```

Within a React application, the store$ can be subscribed to from within a component's `componentDidMount` method and its value passed to the component's state to be rendered:

```
const this._subscription = store$.subscribe(state => this.setState(state))
```

To reduce boilerplate and avoid repeating code, a higher-component is available to handle the subscription and to store each state update in its own state. The `Observer` class HOC can receive the store$ (plus additional configuration) via an `observe` function that connects store$ to its wrapped component:

```
const rxConnect = observe(store$, ...configs)
export default rxConnect(WrappedComponent)
```

The Observer then asynchronously receives the observable's `next` value on each update and passes this value down as props into its wrapped component as `props.rxState`.

```
<div>{this.props.rxState.someString}</div>
```

The Observer also passes down a `setRxState` method which receives the state update and **pushes it to the store$** (not just the local state of the HOC). This way, every HOC subscription receives the update and re-renders its wrapped component with the updated `rxState`.

```
handleChange = nextValue => {
  this.props.setRxState(nextValue);
};
```

In order to modify the behavior of the observable (or a subscription of it), RxJS provides various `operators`. These can be passed as additional arguments to the `observe` function. For example,

```
observe(store$, pairwise())(WrappedComponent)
```

will return a component whose `props.rxState` will be an array of two values: the previous rxState `[0]` and the current `[1]`.

To learn more about RxJS operators, see [RxJS 5 Operators By Example](https://www.learnrxjs.io/operators/).

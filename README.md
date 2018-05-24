## React-Rx Demo

This repo demonstrates how easy it is to manage an application's shared state using observables from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS).

In this demo, the application's state mechanism is an Rxjs observable [BehaviorSubject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject).

Observables allow us to asynchronously handle events across an application while maintaining clear separation between our business and view logic, using predictable patterns and very little boilerplate.

Each component within the application has its own read/write interaction with the shared state. State updates from any component are multicasted to all and immediately rendered via an asynchronous `subscribe` function that is called on `componentDidMount`.

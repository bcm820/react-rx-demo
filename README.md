## React-Rx Demo

This repo demonstrates how easy it is to manage an application's shared state using observables from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS) and other reactive stream libraries such as [xstream](https://github.com/staltz/xstream).

In this demo, the application's shared state is stored inside of a single Rxjs [BehaviorSubject](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject). The BehaviorSubject is then subscribed to from various components, each with their internal state and presentation logic:

* Spinner component maps reads the shared state and maps it to animation logic for its StyledSpinner child component
* NumberControls component reads and writes to the shared state via number inputs, which are then read by the Spinner component.

Since both components subscribe to the same BehaviorSubject, they are able to re-render whenever the BehaviorSubject's `next()` value is updated.

## React-Rx Demo

This repo demonstrates how easy it is to manage an application's shared state using observables from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS) and other reactive stream libraries such as [xstream](https://github.com/staltz/xstream).

In this demo, isolated pieces of an application's shared state are stored inside of Rxjs observable [BehaviorSubjects](http://reactivex.io/rxjs/manual/overview.html#behaviorsubject). Each component within the application has its own isolated read/write interaction with one or more BehaviorSubject:

* A `Controls` component writes to shared state via various inputs by updating a `Control$` subject's `next` value (a config object).
* A `Movements` component writes to shared state via a select input by updating a `Movement$` subject's `next` value (a function to call).
* A `Spinner` component reads all writes to both subjects via an asynchronous `subscribe` function and maps each value to a variety of presentation logic (i.e. passed as props into `StyledSpinner` for CSS animations).

This state management approach allows us to easily select, import, map, and render parts of an application's shared state with very little boilerplate involved.

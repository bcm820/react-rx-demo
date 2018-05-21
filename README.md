## React-Rx Demo

This repo demonstrates how easy it is to manage an application's shared state using observables from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS) and other reactive stream libraries such as [xstream](https://github.com/staltz/xstream).

In this demo, isolated pieces of an application's shared state are stored inside of individual Rxjs observable [Subjects](http://reactivex.io/rxjs/manual/overview.html#subject). Each component within the application has its own isolated read/write interaction with one or more Subject:

* A `NumberControls` component writes to the shared state via number inputs, passed as a single object with each update to a `NumberSubject` as its `next` value.
* An `TweenSelector` component (TODO) writes to the shared state via a select input, passed as a single object with each update to a `TweenSubject` as its `next` value.
* A `Spinner` component reads all writes to both subjects via asynchronous `subscribe` functions and maps each `next` value to its own presentation logic (i.e. passed as props into `StyledSpinner`).

This state management approach allows us to more easily select and import parts of an application's shared state with very little boilerplate.

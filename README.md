## React-Rx Demo

This repo demonstrates how easy it is to manage state universally across an application built in React using observables from [Reactive Extensions (Rxjs)](https://github.com/Reactive-Extensions/RxJS) and other reactive stream libraries such as [xstream](https://github.com/staltz/xstream).

In this demo, application state is stored as an Rxjs BehaviorSubject observable in [streams.js](./src/streams.js) and accessed universally across components.

One component has read/write access, while the other has read only access. Since both components subscribe to the same BehaviorSubject, they are able to re-render whenever the BehaviorSubject's `next()` value is updated.

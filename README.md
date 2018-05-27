## react-Rx (reduxified)

---

Please refer to the [master branch](https://github.com/bcmendoza/react-rx-demo) for the main overview.

My goal here is to partially re-implement [react-redux](https://github.com/reduxjs/react-redux) with react-Rx, while retaining use of RxJS operators.

I retained usage of `props.rxState` since it neatly stores state (or selected portions of state, via RxJS operators) in an object that can be spread into child components.

Usage:

```
const { dispatch } = props;
dispatch(action(payload));
```

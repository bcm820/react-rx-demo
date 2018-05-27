## react-Rx (reduxified)

---

Please refer to the [master branch](https://github.com/bcmendoza/react-rx-demo) for the main overview.

My goal here is to re-implement [react-redux](https://github.com/reduxjs/react-redux) with react-Rx.

Usage:

```
const connect = observe(store$);
connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
```

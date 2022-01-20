if (process.env.NODE_ENV != 'production') {
    global.$RefreshReg$ = () => {};
    global.$RefreshSig$ = () => () => {};
  }
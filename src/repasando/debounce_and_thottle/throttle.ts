function throttle(func, delayTime) {
  let wait = false; //flag to track the next execution

  let nextArgs;

  function nextCall() {
    //this will be used to queue the next request after the delay is over
    if (!nextArgs) {
      wait = false;
    } else {
      func(...nextArgs);
      nextArgs = null;
      setTimeout(nextCall, delayTime);
    }
  }

  return function (...args) {
    if (wait) {
      nextArgs = args;
      return;
    }

    func(...args);
    wait = true;

    setTimeout(function () {
      wait = false;
      setTimeout(nextCall, delayTime);
    });
  };
}

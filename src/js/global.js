export default {
  delay(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, x);
    });
  }
}
function debounce(callfunc, ms) {
  let timer = null;
  return function () {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(callfunc, ms);
  }
}
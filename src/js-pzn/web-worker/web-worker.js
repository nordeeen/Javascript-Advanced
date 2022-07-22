function showLog(total) {
  for (let i = 0; i < total; i++) {
    console.log(i);
  }
}

addEventListener(
  (type = "message"),
  (listener = (event = MessageEvent) => {
    const total = event.data;
    showLog(total);
    postMessage((message = "Done"));
  })
);

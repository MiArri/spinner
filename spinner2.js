const spinner = function(arr) {
  let duration = 0;
  for (let i = 0; i < arr.length; i++) {
    duration += 200;
    setTimeout(() => {
      process.stdout.write(arr[i]);
    }, duration);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, duration);
};

spinner(['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ']);

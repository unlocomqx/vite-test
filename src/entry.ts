setTimeout(async () => {
  // works
  await import("./module1");
  // does not work
  await import(/* 123 */ "./module2");
}, 500);

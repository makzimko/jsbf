export type Input = () => Promise<string>;

const standardInput: Input = () => {
  return new Promise((resolve) => {
    process.stdin.setRawMode(true);
    process.stdin.setEncoding("utf8");
    process.stdin.resume();

    process.stdin.once("data", (key) => {
      if (key.toString() === '\u0003') {
        process.exit();
      }
      process.stdin.pause();
      resolve(key.toString());
    })
  });
};

export default standardInput;

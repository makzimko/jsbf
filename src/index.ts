import standardInput, { Input } from "./input";
type InputSource = Input | string;

type Output = (char: string) => void;

const fixedInput = (input: string) => {
  let i = 0;
  return () => Promise.resolve(input[i++]);
};

class Brainfuck {
  private readonly memorySize = 256;
  private readonly instructions: string;
  private readonly memory = new Array(this.memorySize).fill(0);
  private instructionPointer = 0;
  private memoryPointer = 0;
  private cycles: number[] = [];
  private input: Input = standardInput;
  private output: Output = (char) => process.stdout.write(char);

  constructor(instructions: string) {
    this.instructions = instructions;
  }

  setInput(source: InputSource) {
    if (typeof source === "string") {
      this.input = fixedInput(source);
    } else {
      this.input = source;
    }
    return this;
  }

  setOutput(output: Output) {
    this.output = output;
  }

  async run() {
    let condition = this.instructionPointer < this.instructions.length;
    while (condition) {
      await this.process(this.instructions[this.instructionPointer++]);
      condition = this.instructionPointer < this.instructions.length;
    }

    return this.output;
  }

  private async process(command: string) {
    switch (command) {
      case "+":
        this.memory[this.memoryPointer]++;
        break;
      case "-":
        this.memory[this.memoryPointer]--;
        break;
      case ".":
        this.output(String.fromCharCode(this.memory[this.memoryPointer]));
        break;
      case ",":
        this.memory[this.memoryPointer] = (await this.input()).charCodeAt(0)
        break;
      case ">":
        this.memoryPointer =
          this.memoryPointer === this.memoryPointer - 1
            ? 0
            : this.memoryPointer + 1;
        break;
      case "<":
        this.memoryPointer =
          this.memoryPointer === 0
            ? this.memorySize - 1
            : this.memoryPointer - 1;
        break;
      case "[":
        this.cycles.push(this.instructionPointer);
        break;
      case "]":
        if (this.memory[this.memoryPointer] === 0) {
          this.cycles.pop();
        } else {
          this.instructionPointer = this.cycles[this.cycles.length - 1];
        }
    }
  }
}

export default Brainfuck;

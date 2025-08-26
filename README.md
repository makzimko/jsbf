# jsbf

JavaScript interpreter for BrainFuck

## Using from CLI
Install `jsbf` globally and create instructions file like `hello-world.brainfuck` with content of commands:
```brainfuck
++++++++++[>+++++++>++++++++++>+++><<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.
```

Run `jsbf hello-world.brainfuck` in terminal. Enjoy result!

## Using in code
```javascript
import Brainfuck from 'jsbf';

const program = new Brainfuck("++++++++++[>+++++++>++++++++++>+++><<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.");
program.run()
```

## Examples

- `hello-world.brainfuck` - ["Hello world" program](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)
- `ceasar-cipher.brainfuck` - [Ceasar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)


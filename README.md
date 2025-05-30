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

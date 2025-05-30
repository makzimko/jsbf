#!/usr/bin/env node
import Brainfuck from "./index";
import { readFile } from "fs";

const fileName = process.argv[2];

if (!fileName) {
  throw new Error("No instruction file provided");
}

readFile(fileName, (err, data) => {
  if (err) {
    throw err;
  }
  new Brainfuck(data.toString()).run();
});

#!/usr/bin/env node
import minimist from "minimist";
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

var num_sides = 6;
if (args.sides) {
    num_sides = args.sides;
}

var num_dice = 2;
if (args.dice) {
    num_dice = args.dice;
}

var num_rolls = 1;
if (args.rolls) {
    num_rolls = args.rolls;
}

let output = roll(num_sides, num_dice, num_rolls);

console.log(JSON.stringify(output));

// console.log(num_sides, num_dice, num_rolls);
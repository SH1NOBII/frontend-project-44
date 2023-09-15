#!/usr/bin/env node
import userName from '../src/cli.js';
import userAnswer from '../bin/brain-even.js';

console.log('Welcome to the Brain Games!');
const name = userName();
console.log(`Hi, ${name}!`);
const answer = userAnswer(name);
console.log(answer);

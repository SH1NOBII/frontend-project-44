#!/usr/bin/env node
import userName from '../src/cli.js'


// const  startGame = () => {
    console.log('Welcome to the Brain Games!')
    const name = userName();
    console.log('Hi, ' + name + '!');
// }

// startGame();

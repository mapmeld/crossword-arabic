#! /usr/bin/env node

const fs = require('fs');
const program = require('commander');

const Canvas = require('canvas');
const Crossword = require('./crossword-common.js');

// get user config
program
  .version('1.0.3')
  .arguments('<wordList> <saveImage>')
  .option('-w --width <number>', 'columns of crossword', /(\d+)/, 20)
  .option('-h --height <number>', 'rows of crossword', /(\d+)/, 15)
  .parse(process.argv);

if (!program.args.length) {
  throw 'Did not specify a word list or output image file';
}

var sourceFile = program.args[0];
var outputImg = program.args[1] || 'crossword.png';

fs.readFile(sourceFile, { encoding: 'utf-8' }, function (err, srcText) {
  var lines = srcText.trim().split(/[\r|\n]+/);
  lines = lines.map(function(line) {
    line = line.trim();
    var answer = line.split(/\s/)[0];
    var clue = line.substring(answer.length).trim();
    if (!clue.length) {
      clue = answer;
    }
    return { clue: clue, answer: answer };
  });
  lines.sort(function(a, b) {
    return b.answer.length - a.answer.length;
  });

  // generate crossword
  var canv = new Canvas(program.width * 40, program.height * 40);
  var game = new Crossword(canv, program.width, program.height);
  game.clearCanvas(true);

  // Arabic numbers?

  function addClue(i) {
    if (i >= lines.length) {
      // output png
      var output = fs.createWriteStream(outputImg);
      var stream = canv.pngStream()
        .on('data', function(chunk){
          output.write(chunk);
        })
        .on('end', function(){
          console.log('completed output to ' + outputImg);
        });
      return;
    }
    game.addWord(lines[i].answer, function (err, anchor, direction) {
      if (err) {
        console.log(err);
      } else {
        console.log(anchor + ' ' + direction + ': ' + lines[i].clue);
      }
      addClue(i + 1);
    });
  }
  addClue(0);
});

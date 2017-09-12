# Crossword-Arabic

[![Greenkeeper badge](https://badges.greenkeeper.io/mapmeld/crossword-arabic.svg)](https://greenkeeper.io/)

Make crossword puzzles in Arabic script (can be Arabic, Persian, Urdu, or other languages using Arabic script)

## Partly Deprecated: you can create old-style rtl crosswords with the Unicode crossword module https://github.com/mapmeld/crossword-unicode

### Problems with regular crosswords

<img src="http://a3.mzstatic.com/us/r30/Purple/v4/7b/62/32/7b6232a9-244b-ac8f-6751-2fa317041cee/screen320x480.jpeg" style="float: left;"/>

Most Arabic crossword puzzles (like this one) separate out the letters so that they can be read in horizontal (right-to-left) and vertical (top-to-bottom) directions. If instead
the words were connected horizontally, it would still be awkward to write a vertical word over it and attempt to connect the letter at an angle.

### A new way to intersect

I started thinking that words should intersect on the blank space or cut in certain Arabic words. As an example, the word 'Al-Arabiya' is like this: العَرَبِيَّة‎‎ There are two gaps, one between the A and L, and then the between the R[a] and B. These
gaps are common enough that words can intersect often, and it gives the puzzle-solver
some hints about what letters should be in the words.

These cuts are marked with a light grey square, regardless of whether another word intersects over it or not.

<img src="http://i.imgur.com/y10HRt7.png"/>

## Usage

### Client-side javascript

```javascript
var game = new Crossword(HTML5canvas, columns, rows);
game.clearCanvas(true);

var clue = 'Arabic in Arabic';
var answer = 'العَرَبِيَّة‎‎';

game.addWord(answer, function(error, clueAnchor, direction) {
  // error is null or an error (answer is too small, too big, cannot be placed etc)
  // clueAnchor is the number used by the system (for example "2" for "2 across")
  // direction is "across" or "down"
});

// advanced language options
game.setNumberTransform(function (n) {
  // use another numeral
  return persianNumbers(n);
});
```

### Node module

Using the crossword module in NodeJS requires <a href="https://github.com/Automattic/node-canvas/">node-canvas</a>.

Installation pre-requisites:

- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---Amazon-Linux-AMI-(EC2)">Amazon Linux EC2</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---Fedora">Fedora</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---OSX">OSX</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---Solaris,-Illumos,-SmartOS">Solaris / Illumos / SmartOS</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---Ubuntu-and-other-Debian-based-systems">Ubuntu / Debian</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation---Windows">Windows</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation-on-Heroku">Heroku</a>
- <a href="https://github.com/Automattic/node-canvas/wiki/Installation%E2%80%94centos-7">Centos</a>

```bash
npm install canvas crossword --save
```

```javascript
var Canvas = require('canvas');
var Crossword = require('crossword');

var width = 20;
var height = 15;
var canv = new Canvas(40 * width, 40 * height);

var game = new Crossword(canv, width, height);
game.clearCanvas(true);

game.addWord(answer, function(err, clueAnchor, direction) {
  //
});
```

### Command Line

Make crosswords from a word list using command line.

Prerequisites: NodeJS and fonts which support your language (preferably Noto Sans Kufi Arabic)

```bash
npm install crossword -g
crosswordar wordlist.txt output.png

# more custom setup
# 20 columns wide, 15 rows high
crosswordar wordlist.txt output.png -w 20 -h 15
```

## License

Open source, MIT license

# Crossword

Make crossword puzzles in Arabic script (can be Arabic, Persian, Urdu, or other languages using Arabic script)

<img src="http://a3.mzstatic.com/us/r30/Purple/v4/7b/62/32/7b6232a9-244b-ac8f-6751-2fa317041cee/screen320x480.jpeg" style="float: left;"/>

Most Arabic crossword puzzles (like this one) separate out the letters so that they can be read in horizontal and vertical directions. Instead, I got to thinking that the words
should intersect on the blank space, or the cut in certain Arabic words.

As an example, the word 'Al-Arabiya' is like this: العَرَبِيَّة‎‎ There are
two gaps, one between the A and L, and then the between the R[a] and B

## Usage

### Client-side javascript

```javascript
var game = new Crossword(HTML5canvas, columns, rows);
game.clearCanvas(true);

var clue = 'What does a duck say?';
var answer = 'quack';

game.addWord(answer, function(error, clueAnchor, direction) {
  // error is null or an error (answer is too small, too big, cannot be placed etc)
  // clueAnchor is the number used by the system (for example "2" for "2 across")
  // direction is "across" or "down"
});

// advanced language options
game.setNumberTransform(function (n) {
  // convert integer marker to local language
  return tamilNumbers(n);
});
```

### Node module

Using the crossword module requires <a href="https://github.com/Automattic/node-canvas/">node-canvas</a>.

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

Prerequisites: NodeJS and fonts which support your language (preferably Noto Sans Arabic)

```bash
npm install crossword -g
crosswordar wordlist.txt output.png

# more custom setup
# 20 columns wide, 15 rows high
crosswordar wordlist.txt output.png -w 20 -h 15
```

## License

Open source, MIT license

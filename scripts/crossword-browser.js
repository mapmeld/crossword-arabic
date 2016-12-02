
var width = 20;
var height = 15;
$("canvas").attr("width", 40 * width).attr("height", 40 * height);

var canvas = $("canvas")[0];
var ctx = canvas.getContext("2d");
ctx.font = "18px Noto Sans Kufi Arabic";
var game = new Crossword(canvas, width, height);
game.clearCanvas(true);

$("#add-clue button").click(function() {
  var clue = $("#question").val();
  var word = $("#word").val().split(/\s/)[0];
  if (typeof languageTransform !== 'undefined') {
    clue = languageTransform(clue);
    word = languageTransform(word);
  }
  game.addWord(word, function(error, clueAnchor, direction) {
    if (error) {
      throw error;
    }
    var clueRef = $("<li>");
    clueRef.append($("<strong>").text(clueAnchor));
    clueRef.append(clue || word);
    clueRef.append($("<small>").text(word));
    $("#" + direction + " .list").append(clueRef);
  });

  $("#add-clue input").val("");
});

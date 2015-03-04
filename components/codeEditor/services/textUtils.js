angular.module('demo').factory("TextUtils", function(){
  return {
    // Strip leading whitespace from initial value, this is similar to
    // rails' strip_heredoc function, it uses the first line with content
    // as the leading whitespace baseline
    normalizeWhitespace: function(str) {
      // Strip an initial blank whitespace caused from having text nested inside an html tag
      var string = str.replace(/^\n/, '');

      // Find the first text with an indent and get the length of the indent
      var firstIndentLength = new RegExp("(?:^|\n)([ \t\r]+)").exec(string)[1].length

      // Use the first indent length as a baseline and normalize all other lines
      return string.replace(new RegExp("(^|\n)[ \t\r]{"+firstIndentLength+"}", 'g'), "$1")
    }
  };
});
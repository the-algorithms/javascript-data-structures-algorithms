//You can get a codepoint* from any index in a string using String.prototype.charCodeAt. If your string is a single character, you’ll want index 0, and the code for a is 97 (easily obtained from JavaScript as 'a'.charCodeAt(0)), so you can just do:
var s = 'c';
s.charCodeAt(0) - 97
//And in case you wanted to go the other way around, String.fromCharCode takes Unicode codepoints* and returns a string.

String.fromCharCode(97 + n)

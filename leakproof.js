/**
 * A proof-of-concept for a system to help determine who leaked confidential information from a group.
 */

TypeEnum = {
    ALPHANUMERIC : 0,
    SPACE : 1,
    NEWLINE : 2,
    PUNCTUATION : 3
}

 // Storage for the text input features
 var TextFeature = function(ptext, ptype, pindex)
 {
   this.text = ptext;
   this.type = ptype;
   this.index = pindex;
 }

 // Storage for the text input features
 var TextModel = function()
 {
   this.features = new Array();
 }

/** Parses input text for the features.
 *
 * @param input An input text string.
 * @returns none
 */
TextModel.prototype.parse = function(input)
{
  var self = this;

  var spacePattern = /\s/;
  var punctuationPattern = /[\.,-\/#!$%\^&\*;:{}=\-_`~()]/;
  var alphanumericPattern = /[a-zA-Z0-9]/;

  var buffer = "";
  for(var i=0; i<input.length; i++) {
    var currentChar = input.charAt(i);

    if(alphanumericPattern.test(currentChar)) // is a space
    {
      if(!alphanumericPattern.test(buffer))
      {
        self.features.push(new TextFeature(buffer,TypeEnum.ALPHANUMERIC,i));
        buffer = "";
      }

      buffer += currentChar;
    }
    else if(punctuationPattern.test(currentChar)) // is a space
    {
      self.features.push(new TextFeature(buffer,TypeEnum.PUNCTUATION,i));
      buffer = "";
      buffer += currentChar;

      // if we're at the end
      if(i == input.length-1)
      {
        self.features.push(new TextFeature(buffer,TypeEnum.PUNCTUATION,i));
      }
    }
    else if(spacePattern.test(currentChar)) // is a space
    {
      if(!spacePattern.test(buffer))
      {
        self.features.push(new TextFeature(buffer,TypeEnum.SPACE,i));
        buffer = "";
      }

      buffer += currentChar;
    }
  }
}

/** Outputs all text features as a string.
*
* @param input An input text string.
* @returns none
*/
TextModel.prototype.toString = function()
{
  var self = this;

  var buffer = "";
  for(var i=0; i< self.features.length; i++)
  {
    buffer += self.features[i].text;
  }

  return buffer;
}

module.exports = TextModel;

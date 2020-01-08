const cryptoRandomString = require('crypto-random-string');

const KEYWORD_REGEX = new RegExp('{([^{}]+)}');
const KEYWORD_HANDLERS = {
  randCharset: function randCharset(keywordOpt) {
    const characterLength = keywordOpt.length
      ? keywordOpt.length
      : randomInt(keywordOpt.minLength, keywordOpt.maxLength);

    return cryptoRandomString({
      length: characterLength,
      characters: keywordOpt.charset
    });
  },
  incrNumber: function incrNumber(keywordOpt) {
    const result =
      keywordOpt.startNumber +
      keywordOpt.currentIndex +
      keywordOpt.valueIncrease;

    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  },
  incrSingleCharset: function incrSingleCharset(keywordOpt) {
    const charsetLength = keywordOpt.charset.length;

    let currentIndex = keywordOpt.currentIndex;
    let length = keywordOpt.length;
    let result = '';

    while (length--) {
      const indexCharset = currentIndex % charsetLength;

      result += keywordOpt.charset[indexCharset];

      currentIndex = (currentIndex - indexCharset) / charsetLength;

      continue;
    }

    result = reverse(result);
    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  },
  incrMultiCharsets: function incrMultiCharsets(keywordOpt) {
    let result = '';
    let index = keywordOpt.currentIndex;

    let parseCharset = [...keywordOpt.charsets].reverse();

    for (let i = 0; i < parseCharset.length; i++) {
      const subCharset = parseCharset[i];
      const subCharsetLength = subCharset.length;

      const indexCharset = index % subCharsetLength;

      result += subCharset[indexCharset];

      index = (index - indexCharset) / subCharsetLength;

      continue;
    }

    result = reverse(result);
    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  }
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reverse(string) {
  for (var i = string.length - 1, o = ''; i >= 0; o += string[i--]) {}
  return o;
}

function processKeyword(keywordOpt) {
  if (KEYWORD_HANDLERS[keywordOpt.type]) {
    const result = KEYWORD_HANDLERS[keywordOpt.type](keywordOpt);

    return result;
  }
}

class ISCI {
  constructor(opts) {
    this.pattern = opts.pattern;
    this.keywords = opts.keywords;
  }

  static next(opt) {
    let result = opt.pattern;
    let matchedKeyword;

    while ((matchedKeyword = KEYWORD_REGEX.exec(result))) {
      const keyword = matchedKeyword[1];
      const keywordOpts = opt.keywords[keyword];

      if (keywordOpts) {
        const val = processKeyword(keywordOpts);

        result =
          result.substring(0, matchedKeyword.index) +
          val +
          result.substring(matchedKeyword.index + matchedKeyword[0].length);
      }
    }

    return result;
  }

  next() {
    return ISCI.next({
      pattern: this.pattern,
      keywords: this.keywords
    });
  }
}

module.exports = {
  ISCI
};

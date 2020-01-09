const dateFormat = require('date-format');
const mathRandom = require('math-random');
const extend = require('extend');

const KEYWORD_REGEX = new RegExp('\\[([^\\[\\]]+)\\]');
const PARAM_REGEX = new RegExp('<([^<>]+)>');
const KEYWORD_HANDLERS = {
  randCharset: keywordOpt => {
    return randomString(
      keywordOpt.charset,
      keywordOpt.length
        ? keywordOpt.length
        : randomInt(keywordOpt.minLength, keywordOpt.maxLength)
    );
  },
  incrNumber: keywordOpt => {
    const result =
      keywordOpt.startNumber +
      keywordOpt.currentIndex +
      keywordOpt.valueIncrease;

    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  },
  incrSingleCharset: keywordOpt => {
    const charsetLength = keywordOpt.charset.length;

    let currentIndex = keywordOpt.currentIndex;
    let length = keywordOpt.length;
    let result = '';

    while (length--) {
      const indexCharset = currentIndex % charsetLength;

      result += keywordOpt.charset[indexCharset];

      currentIndex = (currentIndex - indexCharset) / charsetLength;
    }

    result = reverse(result);
    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  },
  incrMultiCharsets: keywordOpt => {
    let result = '';
    let index = keywordOpt.currentIndex;

    let i = keywordOpt.charsets.length;
    while (i--) {
      const subCharset = keywordOpt.charsets[i];
      const subCharsetLength = subCharset.length;

      const indexCharset = index % subCharsetLength;

      result += subCharset[indexCharset];

      index = (index - indexCharset) / subCharsetLength;
    }

    result = reverse(result);
    keywordOpt.currentIndex += keywordOpt.valueIncrease;

    return result;
  },
  currentDate: keywordOpt => {
    return dateFormat.asString(keywordOpt.format, new Date());
  },
  currentUnixTimestamp: () => {
    return Date.now();
  }
};

function randomString(charset, length) {
  let result = '';

  while (length--) {
    result += charset.charAt(parseInt(mathRandom() * charset.length, 10));
  }

  return result;
}

function randomInt(min, max) {
  return Math.floor(mathRandom() * (max - min + 1)) + min;
}

function reverse(string) {
  let stringLength = string.length;
  let reversed = '';
  while (stringLength--) {
    reversed += string[stringLength];
  }

  return reversed;
}

function processKeyword(keywordOpt) {
  if (KEYWORD_HANDLERS[keywordOpt.type]) {
    const result = KEYWORD_HANDLERS[keywordOpt.type](keywordOpt);

    return result;
  }
}

/**
 * Get next ID from ISCI Schema
 * @returns {string}
 * @param {object} isci ISCI Schema
 * @param {string} isci.pattern ISCI Pattern
 * @param {object} isci.keywords ISCI Keywords
 * @param {object} params Your parameter to be passed
 */
function next(isci, params = {}) {
  let result = isci.pattern;
  let matchedParam;
  let matchedKeyword;

  while ((matchedParam = PARAM_REGEX.exec(result))) {
    result = result.replace(
      new RegExp(matchedParam[0], 'g'),
      Object.prototype.hasOwnProperty.call(params, matchedParam[1])
        ? params[matchedParam[1]]
        : ''
    );
  }

  while ((matchedKeyword = KEYWORD_REGEX.exec(result))) {
    result = result.replace(
      new RegExp(matchedKeyword[0].replace(/\[([^\[\]]+)\]/, '\\[$1\\]'), 'g'),
      isci.keywords[matchedKeyword[1]]
        ? processKeyword(isci.keywords[matchedKeyword[1]])
        : ''
    );
  }

  return result;
}

/**
 * Get next ID from ISCI Schema without manipulate original ISCI Schema
 * @returns {string}
 * @param {object} isci ISCI Schema
 * @param {string} isci.pattern ISCI Pattern
 * @param {object} isci.keywords ISCI Keywords
 * @param {object} params Your parameter to be passed
 */
function safeNext(isci, params) {
  const clonedIsci = {};
  extend(true, clonedIsci, isci);

  return {
    result: next(clonedIsci, params),
    updatedIsci: clonedIsci
  };
}

module.exports = {
  next,
  safeNext
};

if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
  window.isci = module.exports;
}

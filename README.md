[![Build Status](https://api.travis-ci.com/laodemalfatih/js-isci.svg?branch=master)](https://travis-ci.org/laodemalfatih/js-isci)
[![codecov](https://codecov.io/gh/laodemalfatih/js-isci/branch/master/graph/badge.svg)](https://codecov.io/gh/laodemalfatih/js-isci)
[![](https://data.jsdelivr.com/v1/package/npm/js-isci/badge)](https://www.jsdelivr.com/package/npm/js-isci)
[![GitHub license](https://img.shields.io/github/license/laodemalfatih/js-isci?color=informational&style=flat-square)](https://github.com/laodemalfatih/js-isci/blob/master/LICENSE)

# ISCI Library for Javascript

# What is Identification SCheme Information (ISCI) ?

_Identification Information Schema_ (**ISCI**) is a scheme that contains information from identification labels. **ISCI** can be used instead of _UUID_, _Increment_, _Timestamp_, or _Hash_ in the _ID_ component. **ISCI** can be used across platforms. Depends on the availability of libraries from each language. **ISCI** uses _JSON_ as a format in defining schemas. In cases in the field, **ISCI** can be stored in _databases_ such as **MongoDB**, **MYSQL** or **REDIS** (as _JSON_ string).

# Usage

## Instalation

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/js-isci@latest/build/index.min.js" />
```

Module:

```bash
# You can use npm or yarn
npm install isci
```

## Usage In Browser

```html
<script src="https://cdn.jsdelivr.net/npm/js-isci@latest/build/index.min.js" />

<script>
  isci.next(yourIsci);
</script>
```

## Example

<details>
<summary><b>Code</b></summary>

```js
const isci = require('./index');

const sampleIsci = {
  pattern: '<index>-[keyword_1]-[keyword_2]-[keyword_3]',
  keywords: {
    keyword_1: {
      type: 'randCharset',
      length: 5,
      charset: 'abcdefg'
    },
    keyword_2: {
      type: 'incrSingleCharset',
      currentIndex: 0,
      valueIncrease: 1,
      length: 6,
      charset: 'hijkl'
    },
    keyword_3: {
      type: 'incrMultiCharsets',
      currentIndex: 0,
      valueIncrease: 1,
      charsets: ['mnopq', 'rstuv', 'wxyz', '01234', '56789']
    }
  }
};

let i = 0;
while (i++ < 5) {
  console.log(
    isci.next(sampleIsci, {
      index: i
    })
  );
}
```

</details>

Output:

```bash
1-ceada-hhhhhh-mrw05
2-beddf-hhhhhi-mrw06
3-aefgb-hhhhhj-mrw07
4-dbfea-hhhhhk-mrw08
5-bacgd-hhhhhl-mrw09
```

**\* You can use the result above as an _ID_ for your data like _`documentId`_, _`secretId`_, _`userId`_, etc.**

## Pattern Format

### Keyword: `[keywordName]`

### Param: `<paramName>`

Example:

```js
const pattern1 = '<index>_[departementSection]_[randomCharacter]';
const pattern2 = '[randomName]-[timestamp]';
```

## Supported Keyword Types

- [randCharset](#randcharset)
- [incrNumber](#incrNumber)
- [incrSingleCharset](#incrSingleCharset)
- [incrMultiCharsets](#incrMultiCharsets)
- [currentDate](#currentDate)
- [currentUnixTimestamp](#currentUnixTimestamp)

### randCharset

Generate random strings from available charset.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| length          | `number` |
| minLength       | `number` |
| maxLength       | `number` |
| charset         | `string` |

> You have to choose one, use `length` or use `minLength` and `maxLength`. The second choice causes the system to generate random length between `minLength` (inclusive) and `maxLength` (inclusive)

#### Example:

Options:

```js
{
  length: 6,
  charset: '1234abcd', // You can replace this with any character
}
```

Output: (Run 4x)

```bash
bdaa13
114a3b
b441c4
4dca4c
```

### incrNumber

Increment number with specific value.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| currentIndex    | `number` |
| valueIncrease   | `number` |
| startNumber     | `number` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 3,
  startNumber: 1
}
```

Output: (Run 5x)

```bash
4
7
10
13
16
```

### incrSingleCharset

Increment character based on its index position in charset.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| currentIndex    | `number` |
| valueIncrease   | `number` |
| length          | `number` |
| charset         | `string` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 1,
  length: 5,
  charset: 'abcdefg'
}
```

Output: (Run 6x)

```bash
aaaaa
aaaab
aaaac
aaaad
aaaae
aaaaf
```

### incrMultiCharsets

Same as [`incrSingleCharset`](#incrSingleCharset), the difference is it uses many charsets at once and the length of result follow the length of the `charsets`.

#### Keyword Properties:

| Properties Name | Type       |
| --------------- | ---------- |
| currentIndex    | `number`   |
| valueIncrease   | `number`   |
| charsets        | `[string]` |

#### Example:

Options:

```js
{
  currentIndex: 0,
  valueIncrease: 1,
  charsets: ['abc', '123', 'def', 'ghi']
}
```

Output: (Run 4x)

```bash
a1dg
a1dh
a1di
a1eg
```

### currentDate

Only date. nothing is different. it looks like no description is needed.

#### Keyword Properties:

| Properties Name | Type     |
| --------------- | -------- |
| format          | `string` |

> `format` string can be anything, but the following letters will be replaced (and leading zeroes added if necessary) ... See: [date-format](https://github.com/nomiddlename/date-format#formatting-dates-as-strings) for more information.

#### Example:

Options:

```js
{
  format: 'yyyy-MM-dd/hh-mm-ss.SSS';
}
```

Output: (Run 1x)

```bash
2020-01-09/15-00-00.000
```

### currentUnixTimestamp

Everything has been explained in [unixtimestamp.com](https://www.unixtimestamp.com/)

#### Keyword Properties:

_No property needed_

#### Example:

Output: (Run 3x)

```bash
1578560571114
1578560571116
1578560571117
```

#### See [`examples.js`](https://github.com/laodemalfatih/js-isci/blob/master/examples.js) file for more example usage.

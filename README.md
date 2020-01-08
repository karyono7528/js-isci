# What is Identification SCheme Information (ISCI) ?

Identification Information Schema (**ISCI**) is a scheme that contains information from identification labels. **ISCI** can be used instead of _UUID_, _Increment_, _Timestamp_, or _Hash_ in the ID component. **ISCI** can be used across platforms. Depends on the availability of libraries from each language. **ISCI** uses _JSON_ as a format in defining schemas. In cases in the field, **ISCI** can be stored in databases such as _MongoDB_, _MYSQL_ or _REDIS_ (in the form of strings).

# Usage

## Instalation

CDN:

```html
<script src="https://unpkg.com/isci@latest" />
```

Module:

```bash
# You can use npm or yarn
npm install isci
```

## Example

```javascript
const { ISCI } = require('isci');

const customerIsci = new ISCI({
  pattern: '{firstId}-{youCanChangeThisName}',
  keywords: {
    firstId: {
      // See Supported Keyword Types section for more type
      type: 'randCharsetset',
      length: 5,
      // In this example we use alphabetic. You can change it!
      charset: 'abcdefghijklmnopqrstuvwxyz'
    },
    youCanChangeThisName: {
      type: 'incrSingleCharset',
      length: 3,
      currentIndex: 0,
      valueIncrease: 1,
      charset: 'abcdefghijklmnopqrstuvwxyz'
    }
  }
});

console.log(customerIsci.next());
console.log(customerIsci.next());
console.log(customerIsci.next());
console.log(customerIsci.next());

// Or you can use without create new class instance

const opt = {...} // Fill with your option

console.log(ISCI.next(opt));
console.log(ISCI.next(opt));
console.log(ISCI.next(opt));
```

Output:

```bash
hpsiz-aaa
wrwcq-aab
bulhr-aac
ucbzg-aad
```

## Pattern Format

### `{keywordName}`

Example:

```
{test1} another character can insert in here {test2}
```

## Supported Keyword Types

- randCharset
- incrNumber
- incrSingleCharset
- incrMultipleCharset
- TODO: shuffleCharset
- TODO: timestamp
- TODO: customValue

### randCharset

Generate random strings from available charset.

#### Keyword Properties:

| Properties Name | Type     | Ex Value                      |
| --------------- | -------- | ----------------------------- |
| charset         | `string` | `"abcdefghiklmnopqrstuvwxyz"` |
| length          | `number` | `5`                           |
| minLength       | `number` | `0`                           |
| maxLength       | `number` | `5`                           |

> You have to choose one, use `length` or use `minLength` and `maxLength`. The second choice causes the system to generate random length between `minLength` (inclusive) and `maxLength` (inclusive)

#### Example:

Options:

```javascript
{
	length: 6,
  charset: '1234abcd'
}
```

Output: (4x)

```bash
bdaa13
114a3b
b441c4
4dca4c
```

### incrNumber

Increment number with specific value.

#### Keyword Properties:

| Properties Name | Type     | Ex Value |
| --------------- | -------- | -------- |
| currentIndex    | `number` | `0`      |
| valueIncrease   | `number` | `1`      |
| startNumber     | `number` | `0`      |

#### Example:

Options:

```javascript
{
  currentIndex: 0,
  valueIncrease: 3,
  startNumber: 1
}
```

Output: (5x)

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

| Properties Name | Type     | Ex Value                       |
| --------------- | -------- | ------------------------------ |
| currentIndex    | `number` | `0`                            |
| valueIncrease   | `number` | `1`                            |
| length          | `number` | `3`                            |
| charset         | `string` | `"abcdefghijklmnopqrstuvwxyz"` |

#### Example:

Options:

```javascript
{
  currentIndex: 0,
  valueIncrease: 1,
  length: 5,
  charset: 'abcdefg'
}
```

Output: (6x)

```bash
aaaaa
aaaab
aaaac
aaaad
aaaae
aaaaf
```

### incrMultiCharsets

Same as `incrSingleCharset`, the difference is it uses many charsets at once.

#### Keyword Properties:

| Properties Name | Type       | Ex Value                |
| --------------- | ---------- | ----------------------- |
| currentIndex    | `number`   | `0`                     |
| valueIncrease   | `number`   | `1`                     |
| charsets        | `[string]` | `["abc", "def", "ghi"]` |

#### Example:

Options:

```javascript
{
  currentIndex: 0,
  valueIncrease: 1,
  charsets: ['abc', '123', 'def', 'ghi']
}
```

Output: (4x)

```bash
a1dg
a1dh
a1di
a1eg
```

#### See `examples.js` file for more example usage.

## TODO

- [ ] Keyword Type: `shuffleCharset`
- [ ] Keyword Type: `timestamp`
- [ ] Keyword Type: `customValue`

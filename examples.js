const { ISCI } = require('./index');

const customerIsci = new ISCI({
  pattern: '{test1}-{test2}-{test3}-{test4}-{test5}',
  keywords: {
    test1: {
      type: 'randCharset',
      length: 4,
      charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
    },
    test2: {
      type: 'incrNumber',
      startNumber: 0,
      currentIndex: 0,
      valueIncrease: 1
    },
    test3: {
      type: 'incrSingleCharset',
      currentIndex: 0,
      valueIncrease: 1,
      length: 5,
      charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
    },
    test4: {
      type: 'incrMultiCharsets',
      currentIndex: 0,
      valueIncrease: 1,
      charsets: [
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      ]
    },
    test5: {
      type: 'randCharset',
      minLength: 5,
      maxLength: 15,
      charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
    }
  }
});

// Print 100 Unique Customer ID
let count = 100;
while (count--) {
  console.log(customerIsci.next());
}

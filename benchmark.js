const Benchmark = require('benchmark');
const isci = require('./src/index');

const simpleIsci = {
  pattern: '[uniqueString]',
  keywords: {
    uniqueString: {
      type: 'incrSingleCharset',
      currentIndex: 0,
      valueIncrease: 1,
      length: 10,
      charset: 'abcdefghijklmnopqrstuvwxyz0123456789'
    }
  }
};

const isciBench = new Benchmark.Suite('isci');

isciBench
  .add('1-keyword_isci_1', isci.next.bind(null, simpleIsci))
  .add('1-keyword_isci_2', isci.next.bind(null, simpleIsci))
  .add('1-keyword_isci_3', isci.next.bind(null, simpleIsci))
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run();

NodeLog
=======
Minimalist log node message to add colors for console.log for specific type of log.

## Installation
```shell
npm install nodelog --save
```
## Usage
```js
var nodelog = require('nodelog');
// nodelog.configure(null, 'white', 'green', 'red');

nodelog.log('just log!');
nodelog.warn('this is a warning!');
nodelog.error('this is an error!');
```

### Test
```shell
npm test
```

## Release history
* 1.0.0 Initial release
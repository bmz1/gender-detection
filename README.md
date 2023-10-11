# Gender Detection


## INFO
This is repo is a fork of the original project: https://github.com/davidemiceli/gender-detection
Improved dataset: https://www.ssa.gov/oact/babynames/limits.html


## Description
A node.js module to determine a person's gender based on his/her first name.  

It works also for many languages other than english, supporting international names, using an own datasource of 40.000 records that can be extended.
This module is able to clean the text, detecting gender from dirty or unclear names.

## Installation

    $ npm install gender-detection-ts

## Example
```javascript
// Require gender detection module
import gender from 'gender-detection-ts';

let g;

// Use it to detect the gender:
g = gender.detect('Tim Johnson');
// "male"

g = gender.detect('Holly');
// "female"

g = gender.detect('GhJGhgj')
// "unknown"

// It works also with unclean or dirty names:
g = gender.detect('BiLL$...');
// "male"

g = gender.detect('::Jenni♥fer::');
// "female"

// Extract the first name
const first_name = gender.getFirstName('Mario Bros');
// "mario"
```

### Unit tests
```shell
npm test
```
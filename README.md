# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Returns first element of an `array`.
* `tail(...)`: Returns a new `array` of all elements except for the first element.
* `middle(...)`: Returns a new `array` with the middle element(s) of an array. If no middle, then and empty array is returned.
* `countOnly(...)`: Returns a new object with the sum of each element found true from `itemsToCount` in `allitems`.
* `countLetter(...)`: Returns a new object with the sum of each letter from a `string`.
* `without(...)`: Returns a new array with only the elements from `source` that are not present in the `itemsToRemove` array.
* `findKey(...)`: Returns the first key that matches `callback` for an `input` object. If no matches found, `undefined` is returned.
* `findKeyByValue(...)`: Returns key of an `object` by searching for a matching `value`. If no matches found, `undefined` is returned.
* `letterPosition(...)`: Returns an object with the sum of each letter from a `string`.
* `map(...)`: Returns a new `array` with the elements that return a truthy value from the `callback`.
* `takeUntil(...)`: Returns a new array with elements taken from the beginning until the `callback` returns a `truthy` value
* `assertEqual(...)`: Returns a pass or fail console.log if assertion equals true or false when comparing the values of two primitives using `actual` and `expected`.
* `eqArrays(...)`: Returns a true or false value when comparing if the values of two arrays are equal.
* `assertArraysEqual(...)`: Returns a pass or fail console.log if assertion equals true or false when comparing the values of two arrays.
* `eqObjects(...)`: Returns a true or false value when comparing if the values of two objects are equal.
* `assertObjectsEqual(...)`: Returns a pass or fail console.log if assertion equals true or false when comparing the values of two objects.

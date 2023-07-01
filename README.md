<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isPrime

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a prime number.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
isPrime = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var isPrime = require( 'path/to/vendor/umd/assert-is-prime/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.isPrime;
})();
</script>
```

#### isPrime( value )

Tests if a `value` is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( null );
// returns false
```

#### isPrime.isPrimitive( value )

Tests if a `value` is a primitive prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPrime.isPrimitive( 5.0 );
// returns true

bool = isPrime.isPrimitive( new Number( 5.0 ) );
// returns false
```

#### isPrime.isObject( value )

Tests if a `value` is a `Number` object having a value which is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
var Number = require( '@stdlib/number-ctor' );

var bool = isPrime.isObject( 5.0 );
// returns false

bool = isPrime.isObject( new Number( 5.0 ) );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var bool = isPrime( 5.0 );
// returns true

bool = isPrime( new Number( 5.0 ) );
// returns true

bool = isPrime( 11.0 );
// returns true

bool = isPrime( 2.0 );
// returns true

bool = isPrime( 3.14 );
// returns false

bool = isPrime( -5.0 );
// returns false

bool = isPrime( NaN );
// returns false

bool = isPrime( '0.5' );
// returns false

bool = isPrime( null );
// returns false

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-composite`][@stdlib/assert/is-composite]</span><span class="delimiter">: </span><span class="description">test if a value is a composite number.</span>
-   <span class="package-name">[`@stdlib/assert-is-integer`][@stdlib/assert/is-integer]</span><span class="delimiter">: </span><span class="description">test if a value is a number having an integer value.</span>
-   <span class="package-name">[`@stdlib/assert-is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-prime.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-prime

[test-image]: https://github.com/stdlib-js/assert-is-prime/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-prime/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-prime/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-prime?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-prime.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-prime/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-prime/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-prime/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-prime/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-prime/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-prime/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-composite]: https://github.com/stdlib-js/assert-is-composite/tree/umd

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer/tree/umd

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->

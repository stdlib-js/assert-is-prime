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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isPrime

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a prime number.

<section class="intro">

A **prime number** is defined as an integer value greater than `1` which is only divisible by `1` and itself.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import isPrime from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@v0.1.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { isObject, isPrimitive } from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@v0.1.1-deno/mod.js';
```

#### isPrime( value )

Tests if a `value` is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

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
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isPrime.isPrimitive( 5.0 );
// returns true

bool = isPrime.isPrimitive( new Number( 5.0 ) );
// returns false
```

#### isPrime.isObject( value )

Tests if a `value` is a `Number` object having a value which is a prime number.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

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

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';
import isPrime from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-prime@v0.1.1-deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[test-image]: https://github.com/stdlib-js/assert-is-prime/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/assert-is-prime/actions/workflows/test.yml?query=branch:v0.1.1

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

[@stdlib/assert/is-composite]: https://github.com/stdlib-js/assert-is-composite/tree/deno

[@stdlib/assert/is-integer]: https://github.com/stdlib-js/assert-is-integer/tree/deno

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->

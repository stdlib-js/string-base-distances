<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Distances

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Implementations of various string similarity metrics.



<section class="usage">

## Usage

```javascript
import distances from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { levenshteinDistance } from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances@esm/index.mjs';
```

#### distances

Namespace containing "distances", i.e, implementations of various string similarity metrics.

```javascript
var ns = distances;
// returns {...}
```

The namespace contains the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`levenshteinDistance( s1, s2 )`][@stdlib/string/base/distances/levenshtein]</span><span class="delimiter">: </span><span class="description">calculates the Levenshtein (edit) distance between two strings.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<!-- Package notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-distances@esm/index.mjs';

// Calculate the edit distance between two input strings...
var dist = ns.levenshteinDistance( 'algorithm', 'altruistic' );
// returns 6

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-distances.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-distances

[test-image]: https://github.com/stdlib-js/string-base-distances/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-base-distances/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-distances/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-distances?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-distances.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-distances/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-distances/tree/deno
[umd-url]: https://github.com/stdlib-js/string-base-distances/tree/umd
[esm-url]: https://github.com/stdlib-js/string-base-distances/tree/esm
[branches-url]: https://github.com/stdlib-js/string-base-distances/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-distances/main/LICENSE

<!-- <toc-links> -->

[@stdlib/string/base/distances/levenshtein]: https://github.com/stdlib-js/string-base-distances-levenshtein/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->

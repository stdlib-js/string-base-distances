/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import levenshteinDistance = require( '@stdlib/string-base-distances-levenshtein' );

/**
* Interface describing the `distances` namespace.
*/
interface Namespace {
	/**
	* Calculates the Levenshtein (edit) distance between two strings.
	*
	* @param str1 - first string value
	* @param str2 - second string value
	* @returns Levenshtein distance
	*
	* @example
	* var dist = ns.levenshteinDistance( 'fly', 'ant' );
	* // returns 3
	*
	* @example
	* var dist = ns.levenshteinDistance( 'algorithm', 'altruistic' );
	* // returns 6
	*
	* @example
	* var dist = ns.levenshteinDistance( 'hippo', 'elephant' );
	* // returns 7
	*/
	levenshteinDistance: typeof levenshteinDistance;
}

/**
* Implementations of various string similarity metrics.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

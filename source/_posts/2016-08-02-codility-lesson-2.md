---
layout:     post
title:      "Codility Lesson 02"
subtitle:   "Series: Second problems batch"
date:       2016-08-02 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-07.jpg"
---

# Introduction
This lesson is, in theory, all about Arrays. Personally I would choose other examples in order to teach/show arrays.

# Lesson 02-a: CyclicRotation

Problem URL: [https://codility.com/programmers/task/cyclic_rotation/](https://codility.com/programmers/task/cyclic_rotation/)
Exercise URL: [https://codility.com/demo/take-sample-test/cyclic_rotation/](https://codility.com/demo/take-sample-test/cyclic_rotation/)

## Solution

Words like "cyclic" and "rotation" makes you think in some kind of loop in where you apply a shift over the input array.
One millesecond later we realize that is probably not the best solution, specially because if the input K is greater than the length of the input array you will end it up calculating unnecessary shifts. For example if your array's length is 2 and K is 4. 
This leads us to think that we should put the focus on the require final output rather than process of how to calculated, which should be always the way to attack any problem!.   

First thing is to do is calculate how many shifts we really need to apply, in other words, the modulus of K and the A.length.
Finally with the updated K input, we can take the last K values from the A and added at the begging of A.

If you care, you can condier the edge case where K is 0 or A's length is 0, cases where you dont need to do anything at all.

## Code

```js
function solution(A, K) {

    //Avoid unnecessary computation
	if (K === 0 || A.length === 0)
	{
		return A;
	}

	if (K > A.length) {
	    //I really don't know I just did not use the modulus operator
		K = K - (parseInt(K / A.length, 10) * A.length);
	}

	var rest = A.splice(A.length - K, K);
	return rest.concat(A);
}

```


# Lesson 02-b: OddOccurrencesInArray

Problem URL: [https://codility.com/programmers/task/odd_occurrences_in_array/](https://codility.com/programmers/task/odd_occurrences_in_array/)
Exercise URL: [https://codility.com/demo/take-sample-test/odd_occurrences_in_array/](https://codility.com/demo/take-sample-test/odd_occurrences_in_array/)

## Solution

After reading the problem my first thought was: "if all numbers are pairs and substracting pairs is 0, the reaming value is the odd one".
The key point here is to realize that you dont need to do nothing special, just return that number that does not have a pair.   
Notice that the time complexity sometimes is a limitations for our creativity, but in some cases guide us by informing us the existence of a better solution.   

So, my very simple idea was to sum all numbers and if I have already sum one particular value then remove (sum it opposite value).

## Code

```js
function solution (A) {

	if (A.length == 1){
		return A[0];
	}

	var multipliers = {};
	return A.reduce(function (acc, value) {

		if (multipliers[value.toString()])
		{
			multipliers[value.toString()]  *= -1;
		}
		else
		{
			multipliers[value.toString()] = 1;
		}
		var mult = multipliers[value.toString()];

		return acc + (value * mult);
	}, 0);
}

```

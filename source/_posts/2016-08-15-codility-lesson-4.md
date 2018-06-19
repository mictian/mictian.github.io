---
layout:     post
title:      "Codility Lesson 04"
subtitle:   "Series: Fourth problems batch"
date:       2016-08-15 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-09.jpg"
---

# Introduction
Counting elements!
It is interesting to observe how something that seems to be harmless can be really intriguing as counting elements.

# Lesson 04-a: PermCheck

Problem URL: [https://codility.com/programmers/task/perm_check/](https://codility.com/programmers/task/perm_check/)
Exercise URL: [https://codility.com/demo/take-sample-test/perm_check/](https://codility.com/demo/take-sample-test/perm_check/)

## Solution

One "relaxing" aspect of the linear restriction, not just in this particular problem but in general to time complexity, is that no one care if the final solution is O(N) or O(2N) or O(9999N) whereas it is a linear function. This does mean that you shouldn't care about the performance, but to take note (specially if you are developing code) is that O(N) does not mean one single loop.   
Although the problem does not say it specific we should take into account the following points; duplicated values in the input array, missing values (like #1), empty arrays and edge cases of arrays like [9999].  
My final consideration for this problem is take present the use of auxiliary data structures. No one force us to calculate the final result without store intermediate results, particularly if you notice that the space complexity expected is O(N).
With all this my simple first idea was to use an auxiliary data structure to store the existence of each request value and each value is just a number we could use them as index of other array;

## Code

```js
function solution (A) {

	var control = new Array(A.length);

	for (var i = 0; i < A.length; i++)
	{
		if (A[i] > A.length) {
			return 0;
		}

		control[A[i]-1] = true;
	}

	for (var j = 0; j < control.length; j++) {
		if (!control[j])
			return 0;
	}

	return 1;
}

```

# Lesson 04-b: PermCheck

Problem URL: [https://codility.com/programmers/task/missing_integer/](https://codility.com/programmers/task/missing_integer/)
Exercise URL: [https://codility.com/demo/take-sample-test/missing_integer/](https://codility.com/demo/take-sample-test/missing_integer/)

## Solution
I don't think that the fact this problem comes after the previous one is a coincidence, and in fact we could use the same code structure but with a slightly different in the semantic of the auxiliary data structure (the control array). Instead of using the __control__ array to know the present values we will use it to known the first missing one.   
An extra consideration, in particular if we want to use the previous code, is that we will need to exclude negative values.

## Code

```js
function solution (A) {

	var control = new Array(A.length);

	A = A.filter(function (i) { return i >=0; });

	if (A.length === 1) {
		return A[0] === 1 ? 2 : 1;
	}

	for (var i = 0; i < A.length; i++)
	{
		control[A[i]-1] = true;
	}

	for (var j = 0; j < control.length; j++) {
		if (!control[j])
			return j+1;
	}

	return A.length+1;
}
```

# Lesson 04-c: FrogRiverOne

Problem URL: [https://codility.com/programmers/task/frog_river_one/](https://codility.com/programmers/task/frog_river_one/)
Exercise URL: [https://codility.com/demo/take-sample-test/frog_river_one/](https://codility.com/demo/take-sample-test/frog_river_one/)

## Solution
A really creative problem, where the real problem is understand what is required rather finding the solution.   
We can safely ignore the existence of a river and the measure in which leaves fall, what we need to understand how the frog move from one point to another. By jumping from one leave to the next leave (note that I did not mention the time factor). If we analyze this problem ignoring the time variable we could see that all leaves would be present when the frog needs them and in this case answering the question would be knowing the index of X in A. Besides as all leave are present the order of them does not make any sense.
In this case it is simple to realize that the frog will need to jump from position 1, to 2, to 3 until X, and the nice part is this is also true if the leaves are falling differed in time.   
With this I see that our problem translate to knowing when the values from 1 to X are all present in the array A. In my case I thought as the values are number I can know it based on the sum of them. (any other way to do so would be totally valid)


```js
function solution (X, A) {
	var sum = 0,
		saw_numbers = {};

    //please do not this! be smart and remember (n*(n+1))/2 
	for(var c = 0; c < X; c++, sum += c);

	for (var i = 0; i < A.length; i++){

		if (A[i] <= X && !saw_numbers[A[i].toString()]) {
			sum -= A[i];
			saw_numbers[A[i].toString()] = true;

			if (sum === 0){
				return i;
			}
		}
	}

	return -1;
}

```

I will answer the final problem of this lesson next time… I could say that it will be for the thrill...


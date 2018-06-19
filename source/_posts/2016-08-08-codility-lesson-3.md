---
layout:     post
title:      "Codility Lesson 03"
subtitle:   "Series: Third problems batch"
date:       2016-08-08 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-08.jpg"
---

# Introduction
It's time to talk about time complexity!
Before start analyzing the problems and assuming you're a new with this topic I recommend to see this [video](https://www.youtube.com/watch?v=-Yv2qljLrns), and you can save this [link](http://bigocheatsheet.com/) in your bookmarks (yeap, I know it is the second result on Google and you can found it very easy anyway is a good resource to point to).

# Lesson 03-a: TapeEquilibrium

Problem URL: [https://codility.com/programmers/task/tape_equilibrium/](https://codility.com/programmers/task/tape_equilibrium/)
Exercise URL: [https://codility.com/demo/take-sample-test/tape_equilibrium/](https://codility.com/demo/take-sample-test/tape_equilibrium/)

## Solution

If we analyze the provided example we could see that for each value of P there are two sums, the one up to the P minus one position and the one starting at P position. And what is returned is the difference between this two sums.
Clearly summing all values of A for each possible P will never result in a O(N) solution. Thankfully we don't need to do so as the sum of all the values of A is always the same and just with it we calculate the rest at the same time we calculate each sum given P.
In other words, we know Sum(A[P-1]), initially A[0], we know the Sum(A), so calculate the diff for P is just a matter of Sum(A) - (Sum(A[P-1]) + A[P]). But!, this difference is not being sum into Sum(A) so we need to remove it from Sum(A).

## Code

```js
function solution(A){
	var minDiff = Number.MAX_VALUE,
		current_diff,
		accum = A[0];

	var sum = A.reduce(function (a,b)
					   {
							return a+b;
					   },0);

	for (var i = 1; i < A.length; i++)
	{
		current_diff = Math.abs(accum - (sum - accum));

		if (current_diff < minDiff)
		{
			minDiff = current_diff;
		}

		accum += A[i];
	}

	return minDiff;
}

```

# Lesson 03-b: TapeEquilibrium

Problem URL: [https://codility.com/programmers/task/tape_equilibrium/](https://codility.com/programmers/task/tape_equilibrium/)
Exercise URL: [https://codility.com/demo/take-sample-test/tape_equilibrium/](https://codility.com/demo/take-sample-test/tape_equilibrium/)

## Solution

This is a very simple problem. As the description says you need to provide an order 1 time complexity solution which means you will end it up generating a function (in the mathematical sense) that calculate the result without any iteration at all.
I can make you read lot of words, but I think the best it just see the code in this case.

## Code

```js
function solution (X, Y, D)
{
    //ceil because the frog cannot make partial steps
    return Math.ceil((Y-X)/D);
}
```

# Lesson 03-c: PermMissingElem

Problem URL: [https://codility.com/programmers/task/perm_missing_elem/](https://codility.com/programmers/task/perm_missing_elem/)
Exercise URL: [https://codility.com/demo/take-sample-test/perm_missing_elem/](https://codility.com/demo/take-sample-test/perm_missing_elem/)

## Solution

I must admit that my fist and rushed solution wasn't the best. Assuming the best case scenario, sorting an array of numbers will be done in O(N log N), so I choose to first choose the array and then iterate over until I found a difference greater than 1.

```js
function solution(A)
{
	A = A.sort(function (a,b) {return a-b;});

	if (A[0]!= 1) {
		return 1;
	}

	for (var i = 1; i < A.length; i++)
	{
		if (Math.abs(A[i] - A[i-1]) > 1)
		{
			return A[i-1]+1;
		}
	}

	return A.length + 1;
}

```

Although the previous code gets a 100% record on Codility it shows that I didn't read the lesson's material nor the problem carefully.
Alternatively, we can assume that all values are present, get the sum of all of them and then calculate the diff with the sum of the real present values. For the where we assume all values are present we can use the technique described in the lesson's material and for the real sum is it just a matter of iterate over all values of A and sum them.

## Code

```js
function solution (A)
{
	var N = A.length + 1;
	var total = (N * (N+1)) / 2;
	
	var sum = 0;

	for (var i = 0; i < A.length; i++) {
		sum += A[i]
	}

	return total-sum;
}
```



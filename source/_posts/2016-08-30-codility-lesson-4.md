---
layout:     post
title:      "Codility Lesson 04 (missing exercise)"
subtitle:   "Series: Fourth problems batch"
date:       2016-08-30 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-10.jpg"
---

# Introduction
Let's finish the final problem of the section 4.


# Lesson 04-a: PermCheck

Problem URL: [https://codility.com/programmers/task/max_counters/](https://codility.com/programmers/task/max_counters/)
Exercise URL: [https://codility.com/demo/take-sample-test/max_counters/](https://codility.com/demo/take-sample-test/max_counters/)

## Solution
A developing pattern now!! What it would be? After reading the exercise letter the first pattern that came to my mind was [Command pattern](https://en.wikipedia.org/wiki/Command_pattern).
Clearly, there is not one-to-one relation with the pattern and the problem, but if we analize it we have a group of actions/command to execute given by the input array A and data structure over
which those command will take effect.   
If you think that make sense, the command are really simple, reset the data structure (the result array) with the max founded value, and the an item of the output array.

Honestly I do not know why this problem is in the "respectable" category.

## Code

```js
function solution (N, A)
{
	var counters = []
		default_value = 0,
		max = 0;

	for (var i = 0; i < A.length; i++)
	{
	    //identify 'set' command
		if (A[i] >= 1 && A[i] <= N)
		{
			if (!counters[A[i]-1])
			{
				counters[A[i]-1]= default_value + 1;
			}
			else
			{
				counters[A[i] - 1]++;
			}
			max = Math.max(max, counters[A[i]-1]);
		}
		//identify 'reset' command
		else if (A[i] === N+1)
		{
            // here we coult iterate over the counter array, bit I found it more performant do this iteration only once at the end.
			default_value = max;
			counters = [];
		}
	}

	for (var c = 0; c < N; c++) {
		if (!counters[c])
			counters[c] = default_value;
	}

	return counters;
}
```


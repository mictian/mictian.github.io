---
layout:     post
title:      "Codility lessons"
subtitle:   "Series: First problem"
date:       2016-07-22 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-06.jpg"
---

# Introduction
Sorry, I haven't made a post since... forever!. In order to start posting more often and as I have recently discover this amazing site called 
[Codility](https://codility.com/) (which is kind a [HackerRank](https://www.hackerrank.com) site) I will post/explain the solution for all the lessons I have solved.
The main idea will be to understand how to reach the solution rather than the final code itself. This means that when none particular execution order is requested performance won't be taken into account. I will write this series aiming for new developers.

## Highlights
Next some point that are worth to mention:   
   
* All the solutions presented, expect otherwise expressed, will be created by me, so please feel free to add any improvement, new ideas or just your thoughts.
* The solutions presented won't try to be sorter, fast nor the "best" possible one, just the first idea that came to my mind to solve the problem. This means that you should search for the "best" solution on other sites.
* I do not share their classification on the problems, so my recommendation is to not give it too much attention and just try to learn from the problem.
* Do not follow this series as it was a book, try first to solve the problem on your own and then compare with me and give me your feedback.

To stop this nonsense of wording let start with the first problem.

# Lesson 01-a: BinaryGap

Problem URL: [https://codility.com/programmers/task/binary_gap/](https://codility.com/programmers/task/binary_gap/)   
Exercise URL: [https://codility.com/demo/take-sample-test/binary_gap/](https://codility.com/demo/take-sample-test/binary_gap/)

## Solution
There are many ways to solve it, from start counting the 0s and follow a control over the largest sequence to convert the number into another data structure that allows querying some of its properties.   
In any case, as I see it, you will need to treat the number as a binary one, so it could be a good start to convert the input parameter into binary.

From the world of possible solutions the first one that came out to my mind was to treat the number as a string where I need to find a particular pattern.
In this case I can just split the string on 1s sequences obtaining an array of 0s, and then find the largest one.

It is easy to realize that are case "edge" cases that you need to control in order to make ir work. First, what happens when the input number is a bunch of 1s?, What happens if the input number has its largest sequence of 0s not ended by a 1 (example __1001000__)?   
As I couldn't imagine any other case, I just controlled those by removing the last group of 0s.

Finally, assuming there are groups of 0s remaining in the array, it would just a matter of finding the largest. Sort by size and pick the first one.


## Code

```js
function solution(N) {
  //Convert to binary
  var str_bnr = (N >>>0).toString(2);
  //Split by 1s (or converted into an array of groups of 0s)
  var raw_zero_parts = str_bnr.split(/1+/);

  if (
	//if the last digit is a 1+
	(raw_zero_parts.length && raw_zero_parts[raw_zero_parts.length - 1] === '') ||
 	//if the number ends in 0s
	(raw_zero_parts.length && /0+/.test(raw_zero_parts[raw_zero_parts.length -1]))
  )
  {
    raw_zero_parts.pop();
  }

  if (raw_zero_parts.length && raw_zero_parts[0] === '')
  {
    raw_zero_parts.shift();
  }

  if (raw_zero_parts.length)
  {
    raw_zero_parts = raw_zero_parts.sort(function (a, b) {return b.length - a.length;});
    return raw_zero_parts[0].length;
  }
  return 0;
}

```


## Update

I received a much better code alternative that I think it is worthly share:

``` js
function solution (N)
{
	return N.toString(2).split('1').slice(0,-1).sort(function(a,b){return b.length - a.length})[0].length;
}
```


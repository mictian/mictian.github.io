---
layout:     post
title:      "Why you should not use Backbone JS"
subtitle:   "and where the focus is..."
date:       2016-02-02 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-03.jpg"
---
# Introduction
I know, if you have read my previous posts you may think that this title does not make any sense .
But let me explain myself.

First of all, I am not in favor of any framework in particular but rather in all in general.
On the other hand I think you can do excellent software using Backbone, if and only if you have the right tooling around and you have a very advocate and aligned engineering team.  
The relation/tension between how much freedom do you have versus the simplicity of use, is a key point when choosing a framework.

# Problems
Let see some Backbone problems that can guide us to understand what points need of our attention when choosing a framework:  

* __Data vs logic__: In the same way everybody accepts and enforce a separation between UI and logic, data vs logic must also be separated.
* __Testability__: NO! By no mean test Backbone code is easy. If you cannot test your code you will learn how to refactored and do it over and over again.
* __jQuery and dependencies__: Nowadays when even M$ have open sourced they browser (or almost) does make sense use jQuery? 
* __Tracebility__: It seems that this concept wasn't created when Backbone was invented.

## Data vs Logic
Perhaps the core and fundamental reason why I dislike soo much Backbone Models is the same reason why I am not convinced about _classes_.
Must the logic that handle a certain data be coupled with that data?   
Is there any puristic and technical-only reason that justify having in a Model the data and the methods that alter it?  
How much reusable is a method that works in the context of the state of a Model?

## Testability
Assume that you have done an excellent job on disaggregating the naturally mixed HTML and Backbone.Views, how easy is to test a Backbone component?   
Have you ever try to unit test a Router? What about a Router of any other framework?   
If we continue analyzing the case of Models it is easy to see how you will be forced to emulate the entire state of a Model to properly test it. And by emulating the entire state I mean call all the required methods and set all the require properties in order to you to be able to make your unit test.

## jQuery & Dependencies
The fact that a library depends on many others makes it more fragile, like it or not.  
We all know that semver is the right way to version npm modules. But, the facts shows that people is applying semver in the correct way?   
Talking about jQuery in particular I must admin that I dont see the point of it. Leaving aside some edge cases and the fact that it is "easier" to call _attr_ rather than _setAttribute_ there is not need of it. Beside, it promote hard-coupled code with HTML. Using jQuery no one would ever create something like React Native (try to thing why Facebook could do it and how hard it could be using jQuery).  

## Tracebility
Nowadays this concept is gaining some attraction thanks to the creation of new tools like the [Redux Time Travel debugger](https://www.youtube.com/watch?v=xsSnOQynTHs), but regardless of the tooling you use this concept must be taked into account at an architecture and design level.
You will have bugs, for sure. I don’t know how many or how bad they will be, but you will have them. The easy it is to detected them and solve it, the happy your customer will be.   
Backbone provide just a few features which tend to be rather cool. However extend them or attach any kind of plugin that alter the default behavior was never a use for them. So, how can I modify the default flow of a Backbone.Router? Perhaps I am interested in producing tracing information on each navigation, perhaps I want to edit all my routes by adding a prefix...


# Solutions
To be honest I don't have "Solutions", just my perspective on how this points can be mitigated.   
Please consider that Backbone is just an excuse the discuss about design aspects.

## Testability
One decisition that I really encourage you to do is using Virtual DOM. It does not matter what framework you choose as long as you were forced to not manipulate the DOM directly. (Here is where you start seeing why I "hate" jQuery)   
By not accessing the DOM directly you wont depend on it to make your accerts, this means fast and easy unit tests.
Regarding Models I will have to disagree with Backbone authors, putting all your business logic in the same place where your data reside, feels to me like create an entire business app by just using glory old storage procedures.

## jQuery & Dependencies
Very simple solution, don't use jQuery, or if you do make sure that you can easily make unit tests, you are not coupling you business data with a particular UI HTML representation. Try to avoid plugins, etc. 

## Traceability
To be honest there is not reason why this must be a concern of the framework. If you are using React/Redux great, but if not you must take care of the traceability.
I mention this just to bring one of many points that you need to evaluate when choosing a framework or designing your app. But any other cross feature concern must be addresses too. 


# Conclusion
In a few words, there is not silver bullet, you need to evaluate each aspect you care about each time you choose a framework or you architect your next app.   
When you develop software I hope you do it with the idea that it last and were used. And as you don't know what will change in the next second, just try to make that each component does only sinlge think and does it right. (Any similarity to the Unix philosophy is pure coincidence)
Backbone is an awesome framework, however I think it can be improved.   

BTW: I'm tired of using Backbone as the guide of all my ideas so I wont mention it again at least not for some posts.

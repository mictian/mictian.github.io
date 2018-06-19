---
layout:     post
title:      "Why I still care about Backbone JS"
subtitle:   "and why simplicity matters"
date:       2016-01-23 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-01.jpg"
---

# State of the Art

I may start talking about those brand new super cool frameworks we all know and use.  
Let's face it, the current state of the art of the JavaScript world is really nuts, fashion and exciting all mixed together in a weird way.
You must create amazing-looking websites if you want to be trending. And you must do it fast and in a fancy way, whatever that means.

Why Angular became so popular when it was released in the market?, leaving aside the fact it has the Google support. Because it is easy to use! and in some cases it laverage concepts from other frameworks. Before I continue I must admit I have just made really simple demos on Angular.

I haven't read any blog post about how to apply [SOLID](https://en.wikipedia.org/wiki/SOLID_(object-oriented_design\) ) principles on Angular apps, how to use Vanilla JS without having to learn a new Google-invented [DSL](https://en.wikipedia.org/wiki/Domain-specific_language).  
If am forced to model/architecture my code using concepts, like "directives" that does not reflect any of my domain problems nor the underlying technology (JavaScript), I start doubting about if it is the best approach.

Perhaps at this point you are thinking that I am another newbie that couldn't understood the concept of a directive in Angular or I just prefer Ember or whatever.  
Let revise the near history:


* Google first announced Angular (Lots of people went crazy thinking that it was the framework to solve it all).
* Facebook released React showing an alternative way of [rendering](https://en.wikipedia.org/wiki/Web_browser_engine) HTML.
* Google had to start from scratch only to change they render engine (Welcome Angular 2)!

Correct me if I am wrong, but that does not sound like a good architecture...

# Separate the wheat from the chaff
I am not against Angular nor Ember nor any other popular framework.
What's more, I think that competition and the fact that big companies are investing on JavaScript frameworks is awesome and promotes innovation. Don't get me wrong.
But in all this buzz we developers need to take the best of each and in particular learn from the concepts rather than the concrete implementations.  
If you read my blog you will realize that I only care about the pursuit of the excellence in code, not if it is easy, fancy or a trending company is behing certain library.   
The fact that with 3 lines snippet code you can do a double binding is not enough to catch my attention.

# What makes Backbone a player nowadays?
In one word, simplicity. Backbone only provides those things that almost every app needs.  
For sure you will need to handle state, let's call it Model, you will need to interact with the user, let's put this responsability in Views, and finally as in any SPA you will need to handle URLs, Routers will handle this.   
This may sounds poor or does not cover all cases. Of course it does not!, each app is a different world, made by different people and solves different problems.  
Besides, this allows to create a common language with non-technical people. When a developer refers to a Deposit Model it will be easy for a salesman to understand what we are talking about.

Regarding rendering Backbone does not provide a rendering engine nor a recommendation of how to tackle this, only gives you a simpe empty render function.

Frameworks must provide generic solutions, not concrete recipes.  
I work in a big eCommerce SPA app based on Backbone. When I learnt about Virtual-DOM, thanks to the Facebook's guys (ReactJS), apply it to our app was just a matter of converting our templates from Handlebars to Virtual-DOM and update our View.render function. Without having to re-architect all our app we were able to take advantage of Virtual-DOM!   
BTW check this out [blueHTML](https://github.com/Mictian/blueHTML).

# Conclusion
Saying that Angular or any other library is good or bad is too simplistic. Simplify software engineering to "Backbone is better than..." is just nonsensical. We have more than 40 years of engineering, we have developed lot of patterns, principles, best practises, etc. Let's not re-invent the wheel.


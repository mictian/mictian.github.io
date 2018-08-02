---
title: Types or not types?... Is that the right question?
date: 2018-07-31 12:00:00
tags: type types
---
# Introduction
Recently I had a small conversation with a coworker about [node](https://nodejs.org/) vs [deno](https://github.com/ry/deno). This helped us as a trigger to talk about Typed languages vs not (loosely) typed languages.   \
In this post I will tell a small story about my transition throught different appreciations of this concept.

# A small story
## The beginning
I started learning and specially using developing languages with, what was back then, the most trendy and common languages. In other words, typed Object Oriented languages.  \
I spent a lot of time developing with Java while I was at the University and with C# in my first years as an employee.

When JavaScript was a "just for validating user input" language and no one spoke about SPAs, I had the chance to start working with this beautiful language in a project.   \
I still remember reading books and articles online and thinking "Oh! This is the way to implement classes on JavaScript".

Luckily for me, there was no ```class``` keyword back then (Technically that keyword was indeed a reserved word of the language, as ```default``` and other were, but nothing else). This ended up being super beneficial for me as it force me to understand how JavaScript works in order to implement what I wanted.

Some years later, I embraced JavaScript; loosely typed, no classes, simple but powerful syntax, prototype composition, etc. etc.

## TypeScript
Short after, the first beta of [TypeScript](https://www.typescriptlang.org) was being announced by Microsoft. My first reaction was "I don't need all the extra complexity of types! I can do all what I want without that unnecessary complexity"   \
_Note_: I am talking about TypeScript because is the super-set of JavaScript that I know more. This does not mean that TypeScript is better than XXX. Personally, I have never really used Flow, or any other.

Of course, the projects where I was working on were small ones. Developing teams no bigger than 5-10 members; zero to none community exposure, full control over all interaction and uses of our code, etc. You know the scenario I am talking about, small start-up projects.

However, at the same time the project I was working on started to grow, the need for proper documentation, processes to validate up-to-date documentation, agreements between teams, etc. started to rise.

Interesting enough, all the teams were developing tools and policies to handle these issues, while we all agree "that typescript was something that we do not need"

At the same time, and for now unrelated with the previous, I was analyzing the difference between JavaScript and the languages that I used to work with and why I felt so comfortable with JavaScript and no with the others.   \
That leads me to Functional Programming (actually still does, I am still learning it).

## Aha-moment
I don't think I will forget it any time soon. I had just started working on a new company and I was trying to catch-up with the whole company structure. One day when I was just arriving, a Business Analyst approached to me and told me, "the team XXX deployed a new version of their API and now the feature XXX does not work any more in production".
At that moment, I didn't know about the team, the feature, nor anything else what he was talking about.

Note: Hold on before you jump, I know. There are a million things totally unrelated with OOP neither types that must have catch this problem much earlier.
I totally agree, but for now I am using this situation because it was my Aha-moment.

As I was the only developer there, without hesitating I jumped into troubleshooting the problem.
I was quick to realize that the problem was on the structure of the payload we were posting to that API. The only problem was that I didn't know what we were sending.

Long story short, we had an API that made a couple of get queries, join all those results and created a new post request. So, in order to know what we were sending I needed to know what we were receiving back, which again force me to know what we were sending to the first API call.   \
Believe it or not, there were three levels of this nonsense, request join send.

**If only I had a type definition of what we were sending or expecting back**...

In one second it fell apart all my previous false believes.

### Documentation
Documentation's purpose is to explain a) **why** a piece does what it does and b) **what** it does (if you use small pieces of code and clear naming convention #b should not be too necessary).   \
But clearly, documentation purpose is not to explain what things are.

Would it make sense to you to define a ```Person``` class and in its documentation says "it is a human-being that has two legs..."? Probably no.  \
I do understand if you are thinking that this is not always true. But in my experience, 99.9% of those cases is due to the lack of domain knowledge, for which I strongly recommend follow [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design).

Besides, there is a root point that cannot be avoided, **documentation is not code**. Developers update code, features are made with code.
In other words, documentation and code are inherently different things, which cause an extra burden to maintain in sync.

In my case, there was almost no documentation, and the few things that were documented were out-dated.

### Extra complexity
Having a type definition add simplicity and expressiveness to your code base.   \
Without even mention that the cost of solving this issues would have taken just a matter of minutes reading a type definition and sending a couple of emails, rather than ours.

Actually, this is the most important point of this post. Types provides an excellent tool to model reality, to express semantic and easily represent concepts from reality in code.   \
However, take special attention to the fact that I am not taking about classes, objects or any other concept/formalism. Just types.

### Limit your expressivity
Another argument that I have hear and even I thought, is that type-systems like TypeScript, limit your options when modeling a solution.   \
In this case the presented examples refer to the ability to iterated over the properties of an object, apply logic based on property names, have a variable property value (if it an object then, or if it is a number then), etc.   \
In my experience, after you give a change to types in JavaScript, there are always ways to express and solve the same using types. Highly probably your final code wont be as esoteric as you would like, but less people would have problems understanding it.

# Use cases
Finally, I will present some basic cases to reinforce the message.

## Posting data to an endpoint
More often that not, when interacting with an endpoint we use terms like "payload", "query", "request", etc.
If your payload is of type ```User``` I would know that POST action is creating a User entity and also what data is being sent. However, if your request is an object, well, it is hard to tell what you are sending.
Besides, I think that we all agree that a good API defines what parameters accepts and what output generates (generally using JSON-Schema, with OpenAPI). And, isn't that a type definition?

## IManager & Manager
In this post I do not want to discus about OOP, or inheritance vs composition or any other related topics.   \
Those are ways to use types in the context of OOP. For example following the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle) or using [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection). But not needed to use Types.
These concepts need types, but types don't need OOP neither those concepts.

## Large source code
I have worked on companies that made frameworks for our customers and partners.   \
In this kind of scenario, where the consumer of your assets is not just a final user, having clear and disambiguate APIs is mandatory.   \
Your partner developers don't care about what the API documentation says, they will be interested in what the code accepts and returns.

# Conclusion
Types represent a tool to express and model concept from reality and business domain, and also is an excellent tool to make your code more expressive, understandable and maintenance-friendly.

Why now?
TypeScript, Flow and others are not something new.   \
But it came to my attention that there are still plenty of people rejecting type system by the wrong reasons.   \
I am not saying that you should use TypeScript or any other type system, I just want to show through my experience that sometimes we have the wrong conception due to the fact that we associate different concepts together.   \
Types not necessary mean OOP, types make sense in its own, regardless the way you code in JS.   \
For the sake of giving an example, we could use JSON-schema to model types without using anything form TypeScript. Clearly the developing experience wouldn't be the same.

On the other hand, JavaScript allows us to take a more functional-oriented approach, and languages like Haskell are strongly-typed.

So, if you have TypeScript or Flow, try one of them for a few weeks and let me know.  \
Hope that you enjoyed reading this. if you have any comments please share them :D.

---
layout:     post
title:      "A Pluginable architecture"
subtitle:   "... or not?"
date:       2016-02-20 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-04.jpg"
---

# Introduction
Some days ago a friend of mine asked me to make a plugin architecture proposal for one of his projects, and after some thinking this posts came up.  
I must clear out that I came from the dark (or at least gray) side... C#, so a plugin architecture was a big thing in that context.
Basically you build your app in one way and plugins in another, remember that you app is already compiled.
But in JavaScript you don't have the barrier of compiled coded.  

Before we continue I must admit that after reading my own [architecture proposal]({{site.url}}/2016/01/27/possible-architecture-with-backbone/) I realize that the only think I am doing is "applying" Flux idea to a BackboneJS application. Of course that through my own eyes but at the end the main concept is _one single data flow_.

Continuing, in brief my reasoning was, we have an application developed with certain architecture in which each agent present a clear responsibility and interface, so the only thing I need to do is create new pieces of code that interact against the already defined interfaces that our app has.
It was after this silly conclusion that I realize the importance of components, why the industry is so interested in them and the importance to develop apps.   
Again, I came from the dark side, so when I thought about component I use to think about Infragistics, Telerik and so on, compiled .dlls that you include in your app that provides you extra features.
Clearly this definition of component is NOT the same used in the web ecosystem. In web apps components (at least how I see it now) are _the_ __unit of composition__.   
Which mean that your entire app could be a component created by the composition of other components.
In other words, component or plugin are two interchangeable words in this posts.
There are obvious benefits with this approach, which I will describe bellow.

The rest of the post describe all the constrains and ideas I think about when my friend ask me to create a pluginable architecture.

# Aim
Extend our application, not reinvent wheel with a new mechanism for other developers to create plugins.

# Plugins Goals
In one sentence; when an external developer creates a plugin for your app he/she should be able to do it in the same way you creates your app but knowing the problems you have solved are already solved.

* Developer Friendly: Any one should be able to create a plugin for your app, the only requirements is having node and a text editor.

* Standard & Simple: In this case no because the technologies used are known, or the architecture proposed is easy to understand, but because it MUST be the same mechanism that enables the original team to create your app to add new features and extend it.   
Otherwise the cost of maintenance and develop would be prohibitive.   
Please notice that this point imply that external developers will run, test, create and deploy code in the exactly same way you do when creating your app.

# Stages/Development process:
In general any external developer should be able to work in the same way you do.

## Creation
At this points I can see two important points to emphasize;   

1. External developers should not worry about the problems you have already solved. This means that if your app handle bank accounts, plugins must be able to access an account details without worry internal details on how this information is being requested, with just the account number should be enough. I expect that you were able to spot what are the consequences of this point.

2. When developing your app you must create it taking into account extensibility. Most of the time we develop with the hat of problem solvers or feature implementers, which if perfectly fine, but if you care about extensibility you must consider how your code will be edited by other developers.
To accomplish this the following mechanisms are some suggestions;   
   * __events__, throw events on each significant moment, let say when your user was created, when an address is removed, etc.
   * __plugin classes__, please don't hate me on this as I am using the same 'plugin' word to describe the general architecture and a concrete class.   
For all the cases when you will allow external developers to change the default flow of the problems you solve, you should instantiate a plugin class and call it. A plugin class could be something as simple as a list of object with a fn property containing a function that receive a variable amount of parameter and returns something.   
For instance, if you are about to apply a filter over a list of records it could be a good idea to allow external developer to change the final query, for this you create an instance of the plugin class and call it with the query you have already created and you end it running the one returned by the plugin execution.
   * __follow good development practices__, yes I will mention this. Follow the patterns the industry have develop years ago!, Single Responsibility, Open to extension and Close to edition, etc etc.   
In this category I will recommend small methods, document the code but do it for real using a serious tools like jsDoc or something similar, one responsibility per class, object, function or whatever you use. I encourage convention over configuration to make it easy to new developer know how to start but you also should allow change this standard convention with configuration or something else.

## Running
Ok, you have created your piece of code now you want to run it and see how it looks like.
This is a particular consideration you do have when creating your original original application, not all your code will reside in the same place. Why? Because it does make sense that an external developer needs your entire application to create a plugin for it.   
I assume in this point that the developer that wants to create a plugin for your app have access to a running instance of your app, at least one demo/develop instance. Take into account that this is very particular for cases like: Magento, Dynamics CRM, QuickBooks or any other extendable "big" solution.
To solve this I propose:   

+ _Have a development index_, I mean a html index file that loads all the already deployed code from the demo instance and from localhost all extra code, which will the code developed by the external developers. Of course, this solve the client side of the development, all server-side must be uploaded.
+ _Use an SDK_. Let be clear in this point I am just talking about a group of gulp/grunt tasks that handle certain functions, like deploy your code, minify your JS, and so on. These tasks must be developed taking into account extensibility, in the same way your code was, but in this case you must allow generate minified or just concatenated JS files without having all dependencies, I mean the code your developed and the external developer want to extend.   
This SDK could be really relevant if you think about CSS compilation in the case you use SASS, LESS, or anything similar. It is easy to "compile" javascript with broken dependencies but the same with SASS files that reference global variables that are not present is not so easy.   

To sum up, the tools and mechanism you use in your every day work must be think not just from a feature creator perspective but also from the extensibility point of view. This will allows you to enlarge your development team in the same time you create a community around your solution.

## Integration
Finally, when you have developed and tested your plugin you will want to combine it with the rest of the solution. I mean, publish it, deploy it or the words you use to release your plugin.
I consider relevant two aspects for this topic:

### Distribution
This part is a bit out of topic, but you will need a store, market or just a centralized place to publish your apps and plugins.   
Again, treat plugins as first class applications so you wont need extra consideration for plugins or extensions. Take for instance apt, the Linux command to install software. By using apt you can install programs, daemons, npm libraries, etc.
Perhaps the only thing you will care about is a way to specify that a plugin is an extension of certain app in a given version, you will do this as a way of handling dependencies among application, consideration that any serious store should handle our of the box.

### Assets Management
One aspect that people usually pay to much attention to, is packaging. When I will minify my javascript files? how I will upload them? should I join all my files in a zip?...   
And the answer for all this very complex: It just does not matter!. Handle it in the same way your original app was created.   
With that being said I like to remember that concatenation and minification are only needed for HTTP 1.x, so if you upload your assets minified and concatenated you wont be able to take advantage of HTTP 2. Besides, if at the store level you want to apply cross-application modification like inject code to track usage, of provide tools to better debugging of application that have been already released, it could be easy if you have the asserts used to create the application rather than a minified version.
Anew, this points are also valid for the original application you have developed and now is being extended, so please just provide one clear way to package the code.


## Usage
Once an external developer have published a plugin my expectation is that I can install it by just clicking a button and it just work, and in the same way clicking one button would remove the plugin in a safe way (this means that both operations are clean and revertible).

# Benefits
If you read the introduction it is easy to see that the benefits are the same of components in general.
But as you can image the previous sentence is bit poor in the context of this article. I can perceive the following points:   

*  One consistent way of develop application and plugins, and so combine them to create new ones.
*  Code re-usage.
*  Easy debugging, each error is located only in one component or another.
*  If you can develop one app you can develop any part of the system,


# Final notes
All your code must be done with the extensibility hat if you want allow plugins.
The general goal is unification and standardization, this is the driving reason why we end with terms LIKE "apps" for applications, plugins, add-ons, components, extensions and so on.
I did not mention any web technology in particular to develop plugings as that election is up to you.
My only concrete elections are based on the architecture proposed in this [article]({{site.url}}/2016/01/27/possible-architecture-with-backbone/)
I neither talk about server side nor client side as I don't care about those implementation details, those are aspect that concern the creation of any application not particularities of plugins. 

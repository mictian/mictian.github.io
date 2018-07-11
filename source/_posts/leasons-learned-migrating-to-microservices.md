---
title: leasons-learned-migrating-to-microservices
date: 2018-06-25 12:00:00
tags:
---

# Leasons learned migrating to Microservices

## Introduction
This post is a small recap of things that I have observed after working in many projects that moved monolithic applications into microservices architectures, and my grain of salt trying to help.

Before start talking about what have been my experience so far, let first recap the things that we must "suffer" or the things that we must understand in order to move to micro-services.

### Why microservices
(1) My first learned lesson was that **the entire company must have a common understanding of why we are moving to a different architectural pattern.**

The first question that you must ask to yourself is **why we want to move to a microservices architecture?**.   
If in your answer you are not describing a business problem, then your are destined to failure (perhaps not so dramatically). It seems that in IT companies engineers tends to forget the reason why companies exists: To solve a customer problem using software as a means to an end.

Althoug this is obvious and at first nonessential, the main idea is to keep business needs and engineering as one aligned team in wich all members are trying to solve the same problem.
        
To emphasize the difference between technical needs and business needs, let just list some common examples:

* *Scale*: In this case the needs should be something like "Based on our plans of expansion, or our growth rate, we see a need to scale our current infrastructure", if on the other hand you describe your need as "our server's CPU is at 80% in average, so we need to find a solution" you probably are not listening to the right bell.


* *Move fast*: "We need to rebuild our current monolithic so we will be able to generate better tracing of our app".
Again, not backed by any direct business value. Do you know for sure that adding better tracing or being prepare to troubleshoot an error on production is valuable from the business point of view? Without a doubt from the technical point of view this statement is trying to improve the infrastructure, but without business alignment you dont know if the company is not planning to sell that part of the business.


* *Maintenance cost*: Believe it or not, ethical or not, there are companies that depends on high maintenance cost to subsist, so improving the code base can actually be harmful (let leave the ethical discussion for another occation - there are plenty of reasons why I am not a director/manager).

Please, do not take this as a way to express or describe a problem, but rather as a recommendation to see if your journey into microservices has the right reasons to start. Otherwise, in my experience, you will face uncountable discussions between managment and engineering.
I as an engineer, totally understand the value of having a better code; from less maintenance cost to greater speed to develeop new features. But make sure business guys in your organization see the value aswell.

## How to reach it
In the introduction section I used the word "suffer", and the reason of that is because it is common that teams in charge of starting this transition do this as an engineering exercise.
(2) My second leasson was that **whoever is responsible to start the microservices transition should try their best to no over-engineering the problem at hand.**

In a few words I would answer this section question just saying: Developing an MVP as in any other product. The fact that we are describing an architectural pattern does not mean that we need to build the world to be able to have some value back.

One common mistake that I observed more than once, is trying to solve all problem at once.
For example, while creating the first services also develop a "framework" so future services will be easy to develop. Create a generic deployment infrastructure so other teams can make the transition more easily to the "new" source code.   
I could continue writing sentences on how teams try to justify their overwork and over-engineering efforts, but based on my experience teams ended up chasing ghosts; solving no one problems, refactoring the code over and over again without really adding value.
So my recommendation here is, without forgetting what you will need to do next, keep the focus. Develop the framework later, once that you understand what are the pieces of it.
At the beginning it will be enough to just have a shared list of ideas, tentative components that could be extracted as generic, lessons learned in the process so far, or whatever thing you consider valueble to write down.

This will start to sound repetitive, but the key is alignment. What is the problem that we are solving? What are we proving? Ok, implement or probe that.

A final observation in this lesson is to not forget how to develop software. Although it sounds stupid, but it is quite interesting to see companies that start planing microservices infrastructure going layer by layer.
First defining the database schema, then the business logic, and once that is all in place plan how and when do the UI.

(3) Related with the next point, culture, I have learned, specially in companies with friction towards changes, that **changes needs to be done in small steps.**
When start planning for a first MVP, join only the minimun amount of people needed for the job. Start simple, one team and one clear goal. Later on the rest of the company will follow.
Otherwise you will ended up distracting other parts of the organization, generating noise in sectors that should be working business as usual.

Assume that the process will take time and pushing it wont help.

## Culture
This tends to be one of the most misunderstood points, and sometimes rooted in the fragmented vision of the different roles inside a company.
Given one company and one product, we should see one team with one vision. (clearly by one team I do not mean one scrum team, but rather a unified big group of people working towards the same solution)

(4) My fourth leasson is that **not all campanies are mature enough, in terms of agile processes, to move to a microservices architecture.**

In the same way that in a call center it's not possible to use waterfall (how you will predict how many calls you will receive the first day?) A company that moves to microservices needs to adhere to agile principles (It does not need clarification that this is my vision).

You will be entering in a new project with millions of unknowns, your organization does not have experience with this, the technical offering in the market is constantly changing and on top of that it will be expensive... Waterfall?
In fact all of those are secondary points, the main reason to follow agile principles is because they align with the organization structure that you need to have; independent and autonomous teams.

If in your company you're a control freak, micro-managing people and your organization chart is more hight that wide... Well, my experience determines that you will face serious issues.

A subtle and sometimes unspoken point about how microservices scales, is that they scale by scaling the teams behind them. And by this I mean horizontally, making the hierarchical pyramid of your company higher, believe me, wont scale.

Another important phenomenon that occur from time to time, is that stakeholders start to get existed and push the dev team. Remember that it mmust be a PO and he/she must have a clear role in this process.

(5) Another point that I have observed is to **trust your team and let them grow (technically) in the same way that the company is growing (driver reason why you are going to microservices).**

It is common, specially in medium size companies, to hire "experienced" people to guide and lead the migration process.
Clearly, at first, this sounds as a good idea; someone with more experience must know what are the common problems and best practices, so in this way the company will save time and money.

If you understand, believe and practice agile principles, sooner than later you will see how this tends to be a bad idea.

Leaders are not impose by managers/directors,  specially technical ones. Leader are choosen by the teams.
Generally a team member is recognized as a such. Someone that the team truth and know.

If you want extra help to avoid solving the same problems the industry have already solved, create a committee with external technical advisors/consultants. Understanding that their role will be to serve the teams not the other way around.
Leaders must arise from the teams, otherwise they will face big communication and willingness challenges.

Trusth in your team, after all they were developing the software you are using so far.

(6) **Be genuine when you set your goals and use agile methodologies.**
Believing and fighting for agile principles shouldn't be one man task.
If in your team you have members more concerned in showing off their impressive technical skills rather than empowering the team, instead of counting with a good developer you have a liability.
Or, if your PO, Scrum Master or whoever involved is more interested in using the migration project as an insignia of his/her good skills, again you are loosing the focus of what you should be doing.


## How to start (technical perspective)
In this section I wont present any technical pattern neither any revolutionary new technic, but just a few basic remarks that I have observed while helping other companies in this transition.

We all have seen the following diagram:
(Show stack)

It the most basic diagram and application organization that a baby can think about. And highly probably, if you depart from a monolithic, it is also at a high level your current application structure.
That means that you have three different places to start making the split. So far I haven't seen a company starting by spliting their UI, so for this simple reason I will exclude it.

Important Note: The following sections assume that you are choosing one of the following strategies in the context of a business story that adds values to the final product.

### Data first
Examples of requirements that are good drivers to take this approach are: "by using a more secure storage we will able to comply with regulation XXX", or "by using the DB engine XX it will allows us to execute more transactions per second and in this way serve the customers that we are expecting to have in the next quarter".

Just a simple note in case that you reader are not a technical guy, it wont be possible to use a different DB engine without applying at least some minor changes to the Business Logic Layer, the fact the we discuss about data first is just a matter on where we are putting the focus.

(7) **Unless that you are working on a rather new company, dont think that your DB schema is well organized.**
It is just a matter of being honest, we know that most of the DBs out there are not 100% in 6th normal form, so dont underestimate the amount of evil joins, SQL queries, and store procedures that you have.

Try to not build a data synchronization framework. I dont know why, lot of engineers ended up need one. Please evaluate if it is really needed, and if that is the case (in many cases is not) try to not build a fancy one from scratch.

Finally, based on your data usage, it could be beneficial to write double and have one data souce to be read-only, allowing in this way that subsequent increments on the MVP implement read logic from this new data store.

### Logic first
In my experience developers generally have better understanding on the code base structure than the DB schema, which could make it easy to start from splitting the logic first.

Examples of requirements that are good drivers to star from the logic are: "as we are planning to integrate with the service XXX we could use a new set of endpoints that expose the data needed, in a new service", or "based on the new regulation of data protection we will need to implement the feature XXX which is the perfect candidate to be a new service".

(8) **Work with a PO that is an expert on the domain that you are working on".**
The main risk when extracting pieces of logic is that you break one strange, undocumented and forgotten use case. So for this try to go step by step, using all your testing arsenal and validate every single use case migrated with your PO.
For the case that you are not splitting but instead just adding new functionality as services, please read the following sections.

### Value
I called this section value not because the previous two didn't added value but because we use to think (and that is great) that by taking a slice of the entire stack we will "generate more value".
In this case the aim would be to split logic and data at the same time.
Although in the vast majority of the cases this is the selected strategy, it is not necessarily the easier to implement.

(9) **The way of working while doing maintenance generally is not the same as when developing new software.**
We all agree that the focus is add business value, but in incremental steps that are achivables. I would strongly recommend to double check if this is the best approach.
Sometimes this strategy is selected not because it is the one that align best with the business needs, but rather because it is the most challenging one from the technical point of view, or because it is the one more close to the final "solution".

If you conclude this is the right approach, make sure that you know your infrastructure. To split the data, perhaps using different schemas would be enough (with SQL Server), or different credentials to connect to the DB with different access rights. To split the logic using a clone instance of the current one maybe is a valid solution.
Im proposing these silly solutions because in this case engineers tend to go wild, creating reusable components, using cloud providers, move to dockers, etc. etc. Those not necessarily are bad solutions, if the organization is aligned and aiming to go in that direction.

## Migration vs Extension
The famous question, should we refactor our current monolithic or only create new services for new functionalities?

Clearly I cannot answer that question for you, however we must agree on the following:
* Whateverr is your answer, you will need to touch the code base of your monolithic. Your current application wont start interacting with a new service/s automagically. (Yes, this assumption happens and generates lot of discussions between directors and developers).

* If you are analyzing going to microservices chances are that you are facing some problems with your current code base. So, is extension-only a realistic solution?


# Summary
To finanlize this post I would like to list some points that I think are important.

* Although not metioned before I encourage you to give it a look at Domain Driven Design. I can be very beneficial as a tool to split your monolithic application.
* Handle team and stakeholders expectations. When new projects start everybody around gets super excited.
* Try, at the being, to forget about timelines. One sprint at a time.
* Do your best to deliver small increments.
* The fact that one approach worked for one problem does not mean it will work for all your use cases.

I hope that you enjoyed reading it as much as I did writing it.
Feel free to leave your comments below.


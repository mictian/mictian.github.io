---
layout:     post
title:      "How to create a simple github blog"
subtitle:   "Some raw guidelines"
date:       2016-02-24 12:00:00
author:     "Mictian"
comments:   true
header-img: "img/post-bg-05.jpg"
---

# Introduction
Hi, today I want to tell you how I have created this simple bog. Not because there aren't good tutorials out there, but just because.   
Important disclaier, actually I dont know anything about jekyll nor github pages, this post is just my experience creating this blog.

# Prequisites

1. I assume that you already know what it is github pages and you already have an account on [GitHub](www.github.com).


# Steps

## Github repository
Yeap, without losing time let go and choose a theme that you like. The idea is really simple, just select a github respository that you like and fork it.
To do this I recommend the following sites:

* [Jekyll Themes](http://jekyllthemes.org/)
* [Sites using jekyll](https://jekyllrb.com/docs/sites/)

where you can chose any of them.
I think that is a good idea to look for a theme that provide as many feature as you want, this will save you time. 
Some of the nice-to-have features can be: Task runner to generate statis assets like CSS and JS if any, use LESS or SASS, provide a Search, contact us, a good help, etc.   
If you decide to start from scratch, you are reading the wrong tutorial.   
After fokring the choosen repo please very the following points:

* Remove all generic or personal information depending on where you fork from.
* Verify the branch name (it should be called master for personal sites)

## Test Locally
As a good idea to start validating the posting workflow fetch your repo and make it work locally.

1. Install [gem deps](https://help.github.com/articles/setting-up-your-pages-site-locally-with-jekyll/)
2. Install npm deps \(if any\)
3. Edit _.config.yml file
4. Remove (just at this point) if present the CNAME file
5. Run it

To do all this I strongly recommend using [Cloud9 IDE](https://c9.io/), which by the way is the IDE I am using to write this blog.

If you use Cloud9 use the following command.
```shell
jekyll serve --host $IP --port $PORT --drafts
```   

If you are testing this on you local pc
```shell
jekyll serve --drafts
```   

As you can imagine  --drafts also generate post for each file in the _draft folder.
Note: if you have updated to Jekyll 3, or just if you are unable to see some of the post/file that you have created, check the date (in the file name) to verify it is not in the future, if it is the case add the parameter: --future

Finnaly remember to add a License file, first to respect the repo you have forked and secondly to known what is possible to do with the content of your blog.

# Create a post

All files in the _posts folder are posts, the only thing you need to follow is the name convention (YYYY-MM-DD)-\<file-name\>.md. This is optional for the _draft folder.
In the each post follow the header format (front matter), meta-data used for the site generation.

When you are ready just push your changes to github.


# Extra features
I will update this section as I continue adding new features into this blog.

## Concat us

This simple feature is not trivial in static websites, but as usual there is a solution. In my case I have chose the free solution provided by [formspree](http://formspree.io/).   
If you need an example of how to use it just the the HTML of my site.


## Custom Domain

Firstly, buy a domain. [Namecheap](http://www.namecheap.com/) is a very good options, it is not just cheap but also the support is really good. (I dont want to sell it to you, but as far as I could see it was the best).
Once you have your domain folow these [steps](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages). 

## Comments

In order to add comment in your site you only need an account on [Disqus](https://disqus.com/home/explore/), I can image that there are tons of different providers for this, I just dont care.
I recommend the following posts to accomplish this:

* [Perfectly Random](http://www.perfectlyrandom.org/2014/06/29/adding-disqus-to-your-jekyll-powered-github-pages/)
* [Oficial Instruction](https://help.disqus.com/customer/portal/articles/472138-jekyll-installation-instructions)


# Obvious and good resources
Finally some other links that are good to know if you are interested in createing a blog.

[https://jekyllrb.com/](https://jekyllrb.com/)
[https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
[https://help.github.com/articles/using-a-custom-domain-with-github-pages/](https://help.github.com/articles/using-a-custom-domain-with-github-pages/)
    

As it obvious, this post is just a brief overview that does not intent to be comprenhensive.

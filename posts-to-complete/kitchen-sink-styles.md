---
title: 'Kitchen Sink CSS Styles'
date: '2022-08-06'
id: kitchen-sink-styles
---

# Kitchen Sink CSS Styles

## Update:
This was a disaster. 😂 It was completely overwhelming trying to work this way.  It's been way more efficient for me to style as I go versus have everything preformatted.  Maybe approaching styles in a 'kitchen sink' style would be reasonable if it was a client site that I wasn't so hands on with, but for now it's MUCH faster to just style as I go!

I DID learn a lot about syntax differences between HTML and JSX.

---

## The Goal:

Today I'm going to spend a little bit of time setting up my CSS styles, hopefully covering everything I would use in a typical blog post so that I don't have to worry about styling when I'm working on other coding challenges and topics. 

## The Plan:

I've copied over HTML5 Kitchen Sink from [this Github Repo](https://github.com/dbox/html5-kitchen-sink) (thanks @dbox!), I'll copy it into this file, and will add my own css via React CSS Modules!

## What Happened:
First Attempt (No Blog Styles Added):
![First Attempt](https://res.cloudinary.com/marion/image/upload/bo_0px_solid_rgb:000/v1659806521/Dirty%20Carrots/Screen_Shot_2022-08-06_at_12.14.15_PM_wlctfc.png)

### Problem #1

WHOOPS! Well, I certainly didn't think this through.  I can't just copy raw HTML into a markdown file (I mean, I *did* and it obviously didn't work).  SO, I'll need to make a kitchen sink PAGE I can refer to while styling, and then hopefully all those styles will apply nicely when I write my markdown posts.  At least now I can see what didn't work, and have a better idea what main styles I'll need to update for the blog posts. 

### Problem #2

Another easy road bump!  I can't seamlessly copy the HTML into a page since JSX has some syntax differences!  I spent some time closing img and br tags, and updating some attributes to camel case, and excluding one little section I'll revisit later, I now have a decent kitchen page I can start styling: [http://localhost:3000/kitchen-sink](http://localhost:3000/kitchen-sink)

![Second Attempt](https://res.cloudinary.com/marion/image/upload/bo_0px_solid_rgb:000/v1659893008/Dirty%20Carrots/kitchen-sink_scuadp.jpg)

## Next Up
I added some styles to the blog posts main elements so I don't go crazy while I'm working, so now I'll just burn through the kitchen sink page!  Then my next posts can be more related to javascript, react, nextjs, sanity, and QROQ. 
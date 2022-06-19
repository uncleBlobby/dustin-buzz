---
title: "jesterJS"
date: '2022-06-19'
---

One of my most recent projects, and one of my most interesting (so far) is jesterJS.  jesterJS is an automated joke collecting bot, built with python3, sqlite3,
expressJS, and front-end reactJS (using ViteJS).

#### The beginning.
---
[jesterJS](https://github.com/uncleBlobby/jesterJS/) began life as a simple exercise in python3, using a module called [PRAW](https://praw.readthedocs.io/en/stable/), to create my first reddit bot.  I have used reddit for ages, now, mostly as a lurker and I have noticed time and time again a variety of 'reddit bots' doing various things.  

For the most part I have found them fascinating--if, to some extent, some are annoying; those ones usually end up blocked by the community, for good reason.  

Others are often simple, entertaining, and relatively unobtrusive: for example, the ['nice leaderboard bot'](https://www.reddit.com/user/nice-scores/) simply trawls through the vast number of comments posted in chains across (seems like any) subreddit and checks for posters who have commented 'Nice'.  

If the bot find one such post, it responds with what it calls the 'nice leaderboards' and lists the top 5 'Nice' posters it has counted, their 'score', and also the most recent poster (to whom it responded) with their 'ranking' attached as well.  

![nice-leaderboards](/images/nice-leaderboards.png)

To the surprise of absolutely no one, the 'lead' position on the nice leaderboard currently belongs to a user with the handle [/u/RepliesNice](https://www.reddit.com/user/RepliesNice) who is quite possibly, actually, another bot.

Nice.  Right?

Not all bots are obvious though, and not all of them have any discernable publice presence whatsoever.  A bot can do almost anything a user can do, including just
'lurking' a subreddit, reading posts, reading comments, upvoting and downvoting--you name it.  

A bot could be engineered to follow a particular user and record their every comment over days, weeks, months, and longer, to do natural language processing and (maybe with the help of machine learning) learn to mimic their 
own particular type of commentary.  

Or, you know, just perform some [sentiment analysis](https://monkeylearn.com/sentiment-analysis/) and monitor their mood.

#### The beginning, part 2.
---
So I got to wrangling with this PRAW module, scrolling through the documentation and a couple old tutorials.  I am still relatively new to python, but the PRAW API (and python in general) is friendly enough.  In relatively short order I was able to have a working bot scanning new and hot posts and printing their contents to my terminal--at lightning speed.

Nice.. the turnaround to having something that *actually worked* was relatively quick.  I find this to be one of the strengths of python in general, and in broad
to be one of the more satisfying moments in learning software development of any kind.  You and I both know there are often times where a new idea, project, whatever, is not so quick to offer a return on the time invested.

Anyway, once I had that rolling--I didn't really know what to do with it.  I had read, somewhere, that python's plotting modules were great for manipulating data
into graphs and other kinds of views, so I whipped up a word cloud generator based on the most common words used in comments on various subreddits.  

It wasn't great, in part because my list of ['STOP WORDS'](https://towardsdatascience.com/text-pre-processing-stop-words-removal-using-different-libraries-f20bac19929a) was not entirely robust, but it was quick to spin up and produced results relatively quickly.  For example, a word cloud generated from the comment activity on the [/r/learnprogramming](https://www.reddit.com/r/learnprogramming/) subreddit.

![/r/learnprogramming-word-cloud](/images/learnprogramming.png)

Nice.  I had something productive--but it didn't really change my life at all.  I have very little desire to automate a collection of D-Tier word clouds, but 
the learning exercise got me thinking.  One of the things I regularly *do* enjoy on reddit are the various joke and joke-related subs.  I usually spend a bit of
time every day looking for a great new joke I can tell at work, to lighten the mood or just to make someone smile.  Yeah, I'm *that* guy.

Fairly quickly I was able to convert the comment reading, word collecting, word cloud bot into a more useful automaton that scraped all my favorite joke subreddits for content and, well, printed it out to the terminal.  It was then I realized I could take this output and, instead of streaming it to the 
command line, insert it into a database to retain.  So I spun up an instance of sqlite3, read some more documentation, and did exactly that.  Pretty soon I had
a collection of all the most recent hot jokes posted across four different subreddits I regularly frequent.

#### Act 2: Enter joker-bot
---
At this point I had a couple of problems.  One, I had no really easy or user-friendly way of viewing the jokes in the table(s).  Secondly, for some odd reason
I had engineered the database in such a way that I wound up with 4 separate tables (one for each subreddit that was being scraped), instead of one singular master_jokes table that held all the jokes (with an extra column to indicate which of the particular subreddits they came from).  And third, perhaps most annoying, the bot didn't yet realize when it was collecting a joke it had already collected.  The bot had no way to recognize a 're-post', either, for similar reasons.

So I broke down and started to rewrite the codebase (a job still in progress, but I digress...).  I created a new master table that held all the new jokes being
collected, I integrated some database infrastructure in python in order to strip repeat entries from the table, and I was pretty satisfied.  All this took just a couple sessions.

Nice.

But I still had no easy way to look at the jokes, which, ultimately, seemed necessary.  It was a real hassle to open up my computer's filesystem, navigate to the project directory, open up the files in my editor and use a plugin to view the joke database.  Even then, I couldn't see the entire lines nor the complete columns on the screen, it required impractical scrolling left and right, up and down, to even read a single joke.  The user experience was certainly lacking at this point.  Sometimes, I can't even see the whole joke -- and I can't even find the horizontal scroll-bar, either.

![terrible-joke-view](/images/terrible-joke-view.png)


#### Act 2, part 2: joker-bot is evolving
---
So I began to build a simple react front-end for the project.  I built a rudimentary webserver with node and express to query the database and respond to http
GET requests from the browser with a JSON payload containing all the jokes in the database.  It worked, once I figured out CORS (again).

I spun up a quick react component to display a joke, and looped through them in JSX to display them all to the page.  What resulted, I must admit, is a site to behold.

![jester-js-view](/images/jester-js-view.png)

However it's now becoming apparent that scrolling through a list approaching 1000 jokes is a tad cumbersome.  It's definitely an upgrade from the simple sqlite3 interface I had previously -- at least now an entire joke, and in fact several jokes, will fit on a single screen.  A user can read them relatively easily, and scroll down to find more.

In a perfect world, a user might be able to search for particular words or phrases to find a particular joke.  This feature is coming soon.

If you made it this far, thanks for reading.  Stay tuned for Act 3!

---
by the way, did you hear the one about the blind cyclops brothers?...

no?

oh, well... *neither have I*
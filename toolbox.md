# Engineering Project Toolbox

## Here, you'll find help with the following scenarios

* [We have this ticket, but don't know where to start on it.](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#we-have-this-ticket-but-we-dont-know-where-to-start-on-it)
* [We've finished our ticket, now we don't know what to do next](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#weve-finished-our-ticket-now-we-dont-know-what-to-do-next)
* [We're finding pairing difficult in our team](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#were-finding-pairing-difficult-in-our-team)
* [We're not sure we're learning much without a tutorial](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#were-not-sure-were-learning-much-without-a-tutorial)
* [What should we test in a Rails app?](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#what-should-we-test-in-a-rails-app)
* [I've spent two days working on a problem, and I'm still blocked!](https://github.com/makersacademy/course/blob/master/engineering_projects/toolbox.md#ive-spent-two-days-working-on-a-problem-and-im-still-blocked)




#### We have this ticket, but we don't know where to start on it
https://github.com/makersacademy/acebook-rails-template/blob/master/CONTRIBUTING.md

- Spend some time investigating how to approach it.
- List out the things that need to be done, try to list them out in as small a piece as possible
- Prioritise them:
  - do some things have to be completed before others can be worked on?
  - can some things be not-done/are unnecessary?
- Create individual tickets for all of them, and put them in the right list.
- Choose the smallest and easiest ticket first

#### We've finished our ticket, now we don't know what to do next
https://github.com/makersacademy/acebook-rails-template/blob/master/CONTRIBUTING.md

0. In the Unestimated list, split a big ticket into smaller tickets if needed.
1. Estimate how long the tickets will take
2. Move them to To Do list once estimated
3. Choose a ticket to work on from To Do and move to In Progress
4. Complete Ticket
5. Move it to Review
6. Check with team for review (what is your review process?)
7. Merge to master if needed
8. Move to Done
9. Repeat from 3. Or from 1 if none are left

#### We're finding pairing difficult in our team

- honest communication is a skill everyone can improve on
- normalise giving feedback
  - when you pair share feedback often, at least twice a day
    - morning and afternoon, or after every feature
  - facilitate a feedback session in every retrospective
    - first theme can be about pairing expectations
- set timers for role switching, and timers for pairing sessions.
  - 1hr pairing in 15 min sessions before switching roles.

#### We're not sure we're learning much without a tutorial

- Focus on giving yourself a clear objective and a way to test that you've achieved it, eg:
  - Objective: I can follow the flow of data in a req/res cycle
    - Test: diagram the flow of data using boxes and arrows for a process like going to the homepage/submitting a form
  - Objective: I can do some rails by myself
    - Test: build a small rails app without a tutorial
  - Objective: I understand how http requests map to Rails routes
    - Test: Explain to someone how config/routes.rb relates to controllers

- take notes on your understanding
- explain your learning to someone else
- Keep doing and playing as much as you can without a tutorial

#### What should we test in a Rails app?

- Test the code that you write, not the code already written for you.
- Rails is opinionated. One of its opinions is about the kinds of tests you need to write.
  - Comprehensive unit and feature tests are an accepted way to test a rails web application https://medium.com/table-xi/whats-up-with-rails-controller-tests-f0ece1fdd9f0

  - Because feature tests are slow to run, depending on the size of the application, and the number of edge cases for a user's journey you can have a look at testing in more detail: https://robots.thoughtbot.com/how-we-test-rails-applications
  - https://hackernoon.com/your-guide-to-testing-in-ruby-on-rails-5-c8bd122e38ad


#### I've spent two days working on a problem, and I'm still blocked!

1. Break your problem down into steps. For each step:
    - do you need more information?
    - do you need a specific kind of information?
    - from who or where can you get that information?
2. Improve your problem solving process
    - keep escalating the problem until you find the right un-blocker: use the coaches to help you!


![Tracking pixel](https://githubanalytics.herokuapp.com/course/engineering_projects/toolbox.md)

# My Developer Dashboard

Q: What is the point of this project?
A: To make my day to day life as a developer more productive.

Q: What specific challenge is this trying to solve?
A: Every day, I spend time finding work when I finish or get blocked on another task.
    To find work, I look in these places, roughly in this order:
      - cries for help in email or instant messenger
      - errors/failures in the dev cluster
      - build failures
      - pull requests (reviewing others and adjusting my own)
      - current sprint tasks 
        (trying to pull started work to completion if I can, then looking for
          the next highest priority work that is not yet started - TLDR: kanban)
      - TODOs documented in source code and in my own TODO list.
    Looking for work results in my jumping around to many different systems. A unified
      view of the systems I check would result in less time looking for work, and less
      chances that I will goe down a rabbit hole on something that isn't top-priority
      after getting distracted while looking for work.

What systems do I need to integrate with?
  - instant messenger (slack, citadel, etc) - HARD
  - Outlook 365 - HARD
  - Logs in dev cluster - MEDIUM
  - Resource manager in dev cluster - MEDIUM
  - Bamboo API - EASY
    - get my recent builds
    - get failing builds owned by my team
  - Bitbucket API - EASY
    - open pull requests for my team
    - scan source code owned by my team for TODOs
  - JIRA - EASY
    - current sprint tasks
      - state
      - title
      - description
      - owner
      - relative priority
  - My own TODO list database - EASY-MEDIUM

Technologies I want to use/learn here:
  - react
  - redux
  - react hot reload
  - react dev tools (chrome extension)
  - react unit testing

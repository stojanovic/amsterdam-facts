# AmsterdamJS demo - Amsterdam facts

Simple serverless API, built with Claudia.js, that shows 20 facts about Amsterdam. It also allows you to get a random fact and to get a fact by it's ID.

## Source of the facts

I took facts from here, not sure how accurate are they, but they were fun: https://whatsupwithamsterdam.com/fun-facts-amsterdam/.

## How to run the demo

### Prerequisites

- AWS account
- Claudia.js installed globally (not required because it's a part of dev dependencies)
- AWS credentials

Guide for Claudia and credentials: https://claudiajs.com/tutorials/installing.html

### Create an API

- Clone the repository
- Run `npm run create`
- That's it, go to your URL

### Update an API

- Run `npm run update`
- That's it, go to your URL again

## Live demo

Minified API URL: bit.ly/amsterdam-facts

Full API URL: https://oocgxwew1l.execute-api.eu-central-1.amazonaws.com/latest

Fact by ID: https://oocgxwew1l.execute-api.eu-central-1.amazonaws.com/latest/14

Random fact: https://oocgxwew1l.execute-api.eu-central-1.amazonaws.com/latest/random

## Contribution

This is just a simple demo project, but feel free to send pull requests.

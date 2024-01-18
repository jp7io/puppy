# Puppy

Simple website screenshot using AWS Lambda, Chromium, and Puppeteer.

## Requirements

- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html)
- [Docker](https://docs.docker.com/get-docker/)

## Run locally

```bash
npm install
sam local start-api
```

## Screenshot using local environment

```bash
curl -s "http://localhost:3000/screenshot?url=https://www.example.com" -o image.png
```

## First deploy

```bash
sam deploy --guided --capabilities CAPABILITY_IAM
```

```bash
Configuring SAM deploy
======================

  Looking for config file [samconfig.toml]:  Found
  Reading default arguments:  Success

  Setting default arguments for 'sam deploy'
  =========================================
  Stack Name [puppy]: puppy
  AWS Region [us-east-1]:
  Confirm changes before deploy [y/N]: y
  Allow SAM CLI IAM role creation [Y/n]: y
  Disable rollback [y/N]: y
  PuppyLambda has no authentication. Is this okay? [y/N]: y
  Save arguments to configuration file [Y/n]: y
  SAM configuration file [samconfig.toml]:
  SAM configuration environment [default]:
```

## Screenshot using AWS

```bash
curl -s "https://YOUR_API_ID.execute-api.us-east-1.amazonaws.com/Prod/screenshot?url=https://www.example.com" -o screenshot.png
```

## TODO

- [ ] Add lambda layers

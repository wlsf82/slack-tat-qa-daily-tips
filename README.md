# slack-tat-qa-daily-tips

[![QA Daily Tips Bot](https://github.com/wlsf82/slack-tat-qa-daily-tips/actions/workflows/cron.yml/badge.svg)](https://github.com/wlsf82/slack-tat-qa-daily-tips/actions/workflows/cron.yml)

A small Node.js bot that sends a random daily QA tip to a Slack channel using an incoming webhook. It loads the webhook URL from environment variables, picks one tip from a built-in list, and posts it as a formatted Slack message.

## Requirements

- Node.js 20 or newer
- npm
- A Slack incoming webhook URL

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the project root with the following variable:

```env
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/your/webhook/url
```

## Run the bot

To send one QA tip manually:

```bash
node index.js
```

## Automation

The bot is also configured to run daily with GitHub Actions through the workflow in `.github/workflows/cron.yml`. For the scheduled run to work, add `SLACK_WEBHOOK_URL` as a repository secret in GitHub.

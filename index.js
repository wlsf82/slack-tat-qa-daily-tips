require('dotenv').config()

const webhookUrl = process.env.SLACK_WEBHOOK_URL

const qaTips = [
  "Test behavior, not implementation details.",
  "Automate critical paths first.",
  "Flaky tests are worse than no tests.",
  "Use data-driven tests to increase coverage.",
  "Keep tests independent and deterministic.",
  "Test edge cases, not just happy paths.",
  "Review test code like production code.",
  "Use API tests to speed up feedback loops.",
  "Mock external dependencies wisely.",
  "Measure what matters: coverage ≠ quality.",
  "Test error handling and failure scenarios.",
  "Document why tests exist, not just what they do.",
  "Prioritize bug prevention over bug detection.",
  "Use visual regression testing for UI changes.",
  "Test under realistic production conditions.",
  "Automate regression tests to save time.",
  "Write tests that fail for the right reasons.",
  "Test concurrency and race conditions.",
  "Use contract testing for service integrations.",
  "Keep test data minimal and meaningful.",
  "Test performance, not just functionality.",
  "Use mutation testing to validate test quality.",
  "Test security vulnerabilities proactively.",
  "Avoid overfitting tests to implementation.",
  "Use accessibility testing in your QA suite.",
  "Test database migrations thoroughly.",
  "Write tests before fixing bugs.",
  "Monitor test execution times regularly.",
  "Test cross-browser compatibility.",
  "Use feature flags to test in production safely.",
  "Test API rate limiting and throttling.",
  "Validate error messages are user-friendly.",
  "Test backward compatibility carefully.",
  "Use shadow testing for new features.",
  "Test localization and internationalization.",
  "Verify all logs are captured correctly.",
  "Test webhook and event handling.",
  "Use synthetic monitoring for critical paths.",
  "Test cache invalidation strategies.",
  "Automate exploratory testing insights.",
  "Test third-party integrations thoroughly.",
  "Validate all environment configurations.",
  "Test graceful degradation scenarios.",
  "Use chaos engineering for resilience testing.",
  "Test state transitions systematically.",
  "Verify platform-specific behaviors.",
  "Test offline functionality thoroughly.",
  "Mock only what's necessary, avoid over-mocking.",
  "Test resource cleanup and memory leaks.",
  "Validate compliance requirements in tests."
]

function getRandomTip() {
  const index = Math.floor(Math.random() * qaTips.length)
  return qaTips[index]
}

async function sendTip() {
  const tip = getRandomTip()

  const message = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "🧪 *Here's your QA daily tip.*"
        }
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `💡 ${tip}`
          }
        ]
      }
    ]
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`)
    }

    console.log("✅ Tip sent successfully!")
  } catch (error) {
    console.error("❌ Error sending tip:", error.message)
  }
}

sendTip()

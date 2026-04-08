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
  "Validate compliance requirements in tests.",
  "If you break the tests, understand why they're failing and fix them. This is your responsibility. If you need help, reach out to a QA.",
  "When debugging a test locally, use `it.only` to focus on the specific test case.",
  "Before fixing a bug, write a failing test for it. Then, fix the bug and run the new test. Only move forward when the new test passes.",
  "Use `data-testid` attributes on DOM elements instead of CSS classes or IDs. This makes your selectors resilient to UI styling changes and refactors.",
  "Always check the browser console and network logs for 4xx/5xx errors when a UI test fails unexpectedly.",
  "Keep your test data isolated. Avoid using 'User_123' for every test; use unique identifiers or timestamps to prevent collision.",
  "A 'flaky' test is a bug in the test suite. Don't just re-run it—investigate if it's a race condition or a hardcoded wait.",
  "Think like a user, not just a developer. Test the 'happy path,' but don't forget the 'unhappy path' (error handling).",
  "Automated tests are great, but don't skip a quick manual 'sanity check' on the UI after a major styling change.",
  "Documentation is part of QA. If a test is complex, add a comment explaining *why* the assertion exists, not just *what* it does.",
  "Before asking for a code review, make sure all PR checks are passing.",
  "Automate what matters most - prioritize critical user journeys over edge cases.",
  "Have a clear test pyramid - more unit and integration tests, fewer end-to-end tests",
  "Define clear test goals - each test should verify one meaningful behavior.",
  "Treat test code as production code - same quality standards, reviews, and refactoring.",
  "Keep tests small and focused - one assertion theme per test.",
  "Use descriptive test names - they should explain intent, not implementation.",
  "Follow the Arrange-Act-Assert (AAA) pattern - this improves readability and maintainability.",
  "Avoid conditional logic in tests - tests should fail, not adapt.",
  "Prefer behavior-based assertions over implementation details.",
  "Don't assert everything - assert what really proves the behavior.",
  "Use stable selectors (e.g., data-testid attributes) instead of CSS tied to layout.",
  "NEVER use XPath selectors - they are hard to read and maintain",
  "Do not rely on element order unless it's the behavior being tested.",
  "Interact like a real user - clicks, typing, and navigation instead of forcing state.",
  "Avoid hard waits - rely on built-in retries or state-based waiting.",
  "Make tests deterministic - the same input should always produce the same result.",
  "Control time, randomness, and external data when possible.",
  "Stub or mock unstable external dependencies (e.g., third-party services).",
  "Ensure clean up before each test - data isolation is critical.",
  "Avoid shared state between tests.",
  "Create test data programmatically instead of relying on pre-existing data",
  "User faker to randomize test data",
  "Use API calls or backend hooks to prepare state faster.",
  "Prefer minimal data - only what's required for the scenario.",
  "Name test data clearly to express intent.",
  "Optimize for fast feedback - slow tests reduce trust and usage.",
  "Run tests in parallel when possible - quick feedback is one of the most important attributes of a test suite.",
  "Tag or group tests to allow selective execution.",
  "Fail fast - detect critical issues early in the test flow.",
  "Refactor tests regularly - test debt is real.",
  "Abstract repeated logic, but don't over-engineer helpers - keep things simple.",
  "Avoid massive 'god tests' that validate too many things.",
  "Document testing conventions for the whole team.",
  "Run tests on every pull request.",
  "Make failures easy to debug with logs, screenshots, or videos - by the way, we save screenshots as artifacts in case of failures. Use them!",
  "Ensure test results are visible and actionable.",
  "Flaky tests are bugs - fix or delete them immediately.",
  "Track test stability over time, not just pass/fail.",
  "Automation supports quality - it doesn't replace thinking.",
  "If a test is failing, it might be signaling a real bug - instead of fixing the test, fix the bug.",
]

function getRandomTip() {
  const index = Math.floor(Math.random() * qaTips.length)
  return qaTips[index]
}

const sectionTexts = [
  "🧪 *Here's your QA daily tip.*",
  "💬 *Time for your daily dose of QA wisdom.*",
  "🚀 *Sharpen your QA skills with today's tip.*"
]

function getRandomSectionText() {
  const index = Math.floor(Math.random() * sectionTexts.length)
  return sectionTexts[index]
}

async function sendTip() {
  const tip = getRandomTip()

  const message = {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: getRandomSectionText()
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

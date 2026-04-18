import re

# Read the file
with open('backend/services/playwright.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the buggy code
old_code = """    let result;
    switch (trafficMode) {
      case 'storm':
        result = await automateStormTraffic(url, options, loopOnProgress);
        break;
      case 'search':
        result = await automateSearchEngineTraffic(url, options, loopOnProgress);
        break;
      case 'stealth':
      default:
        result = await automateStealthTraffic(url, options, loopOnProgress);
        break;
    }

    allSuccesses += result.summary.successes;
    allFailures += result.summary.failures;
    lastResult = result;"""

new_code = """    let result;
    try {
      switch (trafficMode) {
        case 'storm':
          result = await automateStormTraffic(url, options, loopOnProgress);
          break;
        case 'search':
          result = await automateSearchEngineTraffic(url, options, loopOnProgress);
          break;
        case 'stealth':
        default:
          result = await automateStealthTraffic(url, options, loopOnProgress);
          break;
      }

      // CRITICAL FIX: Check if result has summary before accessing it
      if (!result || !result.summary) {
        console.error('❌ Automation returned invalid result:', result);
        result = {
          success: false,
          error: result?.error || 'Automation failed to execute',
          summary: { successes: 0, failures: 1, total: 1 }
        };
      }

      allSuccesses += result.summary?.successes || 0;
      allFailures += result.summary?.failures || 0;
      lastResult = result;
    } catch (loopError) {
      console.error('❌ Loop execution error:', loopError.message);
      lastResult = {
        success: false,
        error: loopError.message,
        summary: { successes: allSuccesses, failures: allFailures + 1, total: allSuccesses + allFailures + 1 }
      };
      allFailures += 1;
    }"""

# Replace
if old_code in content:
    content = content.replace(old_code, new_code)
    print("✅ Fix applied successfully!")
    
    # Write back
    with open('backend/services/playwright.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ File saved!")
else:
    print("❌ Could not find the code to replace!")
    print("Searching for similar patterns...")
    
    # Try to find it with some flexibility
    if 'allSuccesses += result.summary.successes' in content:
        print("Found 'allSuccesses += result.summary.successes' in file")
    if 'let result;' in content:
        print("Found 'let result;' in file")

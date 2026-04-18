// CRITICAL BUG FIX - Line 815 in playwright.js
// This fixes: TypeError: Cannot read properties of undefined (reading 'successes')

// FIND THIS CODE (around line 801-817):
/*
    let result;
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

    allSuccesses += result.summary.successes;  // ← THIS LINE CRASHES!
    allFailures += result.summary.failures;
    lastResult = result;
*/

// REPLACE WITH THIS FIXED CODE:
/*
    let result;
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
    }
*/

// This fix ensures:
// 1. Never crashes when automation fails
// 2. Always has a summary property
// 3. Proper error handling with try-catch
// 4. Graceful degradation

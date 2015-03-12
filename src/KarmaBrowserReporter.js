'use strict';

// Should produce test output something like the following;
//
//  | browser | duration | tests
//
//  [PhantomJS] (12.6s) ........................................
//  [IE 8.0.0 (Windows 7)] (12.6s) ..........F............****..**.......
//      1)  Failure:
//          ERROR AND STACKTRACE HERE...
//
//  [Chrome 36] (12.6s) ............................
//
// Finished in 12.45 secs / 12.45 secs
//
// Summary:
// 1234 test completed
// 3    tests skipped
// 1    test failed
//
// Failures:
//  1) ERROR AND STACKTRACE HERE...

// const MAXIMUM_COLUMNS = 80;

class KarmaBrowserReporter {
  constructor(karmaBaseReporter, karmaConfig, formatError) {
    karmaBaseReporter(this);
    this.karmaConfig = karmaConfig;
    this.formatError = formatError;
  }

  // Called at the start of a test suite run.
  onRunStart(browsers) {
    this.reset();
    browsers.forEach(this.state.browsers.add, this);
  }

  // Called when the browser starts running tests.
  onBrowserStart(browser) {

  }

  // Called after every successful spec run.
  onSpecComplete(browser, result) {

  }

  // Called once the suite completes.
  onRunComplete(browsers, results) {

  }

  // Handle logs being written to STDOUT by a browser.
  onBrowserLog(browser, log, type) {

  }

  // Reset the reporter state.
  reset() {
    this.state = new Map([
      ['browsers', new Set()],
      ['results', new Map()],
      ['totalTime', 0]
    ]);
  }
}

export default KarmaBrowserReporter;

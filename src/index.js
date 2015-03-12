'use strict';

import KarmaBrowserReporter from './KarmaBrowserReporter';

KarmaBrowserReporter.$inject = ['baseReporterDecorator', 'config', 'formatError'];

export default {
  'reporter:sauce': ['type', KarmaBrowserReporter]
};

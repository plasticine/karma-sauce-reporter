'use strict';

export default function formatTimeInterval(ms) {
  let mins = Math.floor(ms / 60000);
  let secs = (ms - mins * 60000) / 1000;
  let str = secs + (secs === 1 ? ' sec' : ' secs');

  if (mins) {
    str = mins + (mins === 1 ? ' min ' : ' mins ') + str;
  }

  return str;
}

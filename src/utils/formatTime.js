function toTimeString(seconds) {
  return new Date(seconds * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
}

export const formatTime = (param) =>
  param && !isNaN(param) && param > 0 ? toTimeString(param) : null;

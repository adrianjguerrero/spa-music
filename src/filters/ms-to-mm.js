const msToMm = {};

function converMsToMm (ms) {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000 / 1000).toFixed(0));

  return `${min}:${sec}`;

}

msToMm.install = function (Vue) {
  Vue.filters('ms-to-mm', (val) => {
    return converMsToMm(val);
  })
}

export default msToMm;

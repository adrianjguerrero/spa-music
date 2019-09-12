const msToMm = {};

const addZero = number =>
  number < 10 ? `0${number}` : number

function converMsToMm (ms) {
  let min = Math.floor(ms / 60000);
  let sec = ((ms % 60000 / 1000).toFixed(0));
  min = addZero(min);
  sec = addZero(sec);

  return `${min}:${sec}`;
}

msToMm.install = function (Vue) {
  Vue.filter('ms-to-mm', (val) => {
    return converMsToMm(val);
  })
}

export default msToMm;

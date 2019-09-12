const blur = {}

function setBlur (el, binding) {
  // las directivas reciben 4 parametros, pero aqui solo ocupareos 2

  el.style.filter = !binding.value ? 'blur(3px)' : 'none';
  el.style.cursor = !binding.value ? 'not-allowed' : 'inherit';

  el.querySelectorAll('button').forEach(btn => {
    if (!binding.value) {

      btn.setAttribute('disabled', true);
      btn.style.pointerEvents = 'none';
    } else {
      btn.removeAttribute('disabled');
      btn.style.pointerEvents = 'initial';
    }
  });
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding);
    }
  })
}

export default blur;

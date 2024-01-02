export default {
    beforeMount(el, binding) {
        const options = binding.value || {};
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add(options.class);
            } else {
              el.classList.remove(options.class)
            }
          });
        }, options.options || {});
        observer.observe(el);
      }
}
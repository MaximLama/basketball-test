import type { Directive } from "vue";

interface ClickOutsideDirectiveHTMLElement extends HTMLElement {
  __clickOutsideHandler__: EventListener;
}

const ClickOutsideDirective = <
  Directive<ClickOutsideDirectiveHTMLElement, Function>
>{
  mounted(el, binding) {
    el.__clickOutsideHandler__ = (event: Event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event);
      }
    };
    document.body.addEventListener("click", el.__clickOutsideHandler__);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.__clickOutsideHandler__);
  },
};

export default ClickOutsideDirective;
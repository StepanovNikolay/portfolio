import Vue from "vue";

const info = {
  template: "#slider-info"
};

const display = {
  template: "#slider-display"
};

const buttons = {
  template: "#slider-buttons"
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    display,
    buttons
  },
  template: "#slider"
});

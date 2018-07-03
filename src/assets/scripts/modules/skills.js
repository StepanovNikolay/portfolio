import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercents: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const parsents = (dashOffset / 100) * (100 - this.skillPercents);

      circle.style.strokeDashoffset = parsents;
      console.log(parsents);
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const skillsrow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};
new Vue({
  el: "#skills-container",
  components: {
    skillsrow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skill.json");
    this.skills = data;
    console.log(data);
  },
  template: "#skills-list"
});

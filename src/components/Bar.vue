<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ number }}
     <button @click="sibling">改变兄弟组件的值</button>
     <button @click="inc">vuex</button>
  </div>
</template>

<script>
import Bus from "../Bus.js";
export default {
  data() {
    return {
      msg: "I am bar component"
    };
  },
  props: ["number"],
  methods: {
    open() {
      this.$emit("showbox", "the msg"); //触发showbox方法，'the msg'为向父组件传递的数据
    },
    sibling() {
      console.log("sibling");
      Bus.$emit("blur", "从兄弟组件传递");
    },
    inc() {
      console.log(this.$store);
      this.$store.dispatch("foobar/inc","哈哈");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid #000;
}
</style>

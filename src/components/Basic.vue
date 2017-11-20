<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
     <button @click="inc">ADD</button>
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
      this.$store.dispatch("addToCart","哈哈");
    }
  },
  computed:{
      counter: function(){
          return this.$store.state.count
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

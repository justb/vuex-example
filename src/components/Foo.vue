<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ number }}
     <button @click="open">改变父组件的值</button>
     <p>从兄弟组件传来的值 {{ test }}</p>
     <p>{{getMsg}}</p>
  </div>
</template>

<script>
import Bus from "../Bus.js";

export default {
  data() {
    return {
      msg: "I am foo component",
      test: ""
    };
  },
  props: ["number"],
  created() {
    Bus.$on("blur", arg => {
      this.test = arg;
    });
  },
  computed: {
    getMsg() {
      return this.$store.state.foobar.msg;
    }
  },
  methods: {
    open() {
      this.$emit("showbox", "the msg"); //触发showbox方法，'the msg'为向父组件传递的数据
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

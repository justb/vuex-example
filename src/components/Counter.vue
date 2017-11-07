<template>
  <div>
    <!-- Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div> -->
    <div>{{fooCount}}</div>
    <button @click="inc()">Increment async</button>
    <div>{{msg}}</div>
    <foo number="我是从父组件传过来的" @showbox="toshow"></foo>
    <bar number="我是从父组件传过来的" ></bar>
  </div>
</template>

<script>

import foo from "./Foo";
import bar from "./Bar";
export default {
  data() {
    return {
      msg: ""
    };
  },
  destroyed() {
    // this.$store.unregisterModule("foo");
  },
  computed: {
    fooCount() {
      return this.$store.state.counter.count;
    }
  },
  beforeCreate(store) {
    console.log("beforeCreate");
  },
  components: {
    foo,
    bar
  },
  methods: {
    inc() {
      console.log(this.$store);
      this.$store.dispatch("counter/inc");
    },
    toshow(msg) {
        this.msg = msg;
    }
  }
};
</script>
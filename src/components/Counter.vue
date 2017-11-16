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
    <foo number="我是从父组件传过来的" @showbox="toshow"  v-bind:class="{ active: isActive, 'text-danger': hasError }"></foo>
    <bar number="我是从父组件传过来的" ></bar>
  </div>
</template>

<script>
import foo from "./Foo";
import bar from "./Bar";
export default {
  data() {
    return {
      msg: "",
      count: "123",
      isActive: true,
      hasError: false
    };
  },
  destroyed() {
    // this.$store.unregisterModule("foo");
  },
  computed: {
    fooCount: {
      get() {
        // return "123";
        return this.$store.state.counter.count;
      },
      set(v) {
        console.log(v);
      }
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
    },
    fooCount2() {
      return Date.now();
    }
  },
  watch: {
    msg(v) {
      return v;
    }
  }
};
</script>
<style>
.active{
  border: 2px solid red !important;
}
</style>

<template>
  <div>
    <h1>Parent</h1>
    {{ num }}
    <!-- sync传递prop -->
    <Child :num.sync="num" />
  </div>
</template>

<script>
import Child from "./Child";
export default {
  data() {
    return {
      num: 100,
    };
  },
  components: { Child },
};
</script>

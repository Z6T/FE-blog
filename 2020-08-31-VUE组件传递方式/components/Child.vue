<template>
  <div>
    {{ num }}
    <button @click="$emit('update:num', 366)">更改</button>
  </div>
</template>

<script>
export default {
  props: ["num"],
};
</script>

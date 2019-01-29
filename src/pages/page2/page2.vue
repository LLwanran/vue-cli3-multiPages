<template>
  <section>
    <h3>page2</h3>
    <md-button @click="handleClick">回到page1</md-button>
  </section>
</template>

<script>
import { Button } from 'mand-mobile';
export default {
  components: {
    [Button.name]: Button
  },
  methods: {
    handleClick() {
      location.href = 'page1.html';
    }
  }
};
</script>
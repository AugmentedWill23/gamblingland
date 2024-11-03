<template>
  <div style="margin: 8px; padding: 5px">
    <h3>Hello!</h3>
    <p>
      The hello page
    </p>
    <RouterLink to="/">Go to landing page</RouterLink>
  </div>
</template>

<script>
import {RouterLink} from 'vue-router';

export default {
  name: 'HelloPage',
  components: {RouterLink},
  setup() {

  }
};
</script>

<style>
</style>

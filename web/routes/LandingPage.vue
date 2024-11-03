<template>
  <div style="margin: 8px; padding: 5px">
    <h3>Gambling Land!</h3>
    <p v-if="state.showContent">
      MOAR CONTENT 2
    </p>
    <div>
      <button @click="state.toggleContent()">Toggle Content</button>
    </div>
    <div>
      <RouterLink to="/hello">Go to hello page</RouterLink>
    </div>
    <div>
      <RouterLink to="/games">Go to games page</RouterLink>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
import {RouterLink} from 'vue-router';

export default {
  name: 'LandingPage',
  components: {RouterLink},
  setup() {
    const state = reactive({
      showContent: true,
      toggleContent() {
        console.log('clicked toggle content');
        state.showContent = !state.showContent;
      }
    });

    return {state};
  }
};
</script>

<style>
</style>

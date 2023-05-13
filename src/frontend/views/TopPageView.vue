<template>
  <div class="home"> 
    <!-- <TopPage msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <TopPage/>
  </div> 
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopPage from '@/components/TopPage.vue';

export default defineComponent({
  name: 'TopPageView',
  components: {
    TopPage,
  },
});
</script>

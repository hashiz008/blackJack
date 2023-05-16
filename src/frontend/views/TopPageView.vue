<template>
  <div class="home"> 
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
  }
});
</script>

<script setup lang="ts">
import TopPage from "../frontend/views/TopPageView.vue";
</script>
<template>
    <nav>
        <!-- <router-link to="/">TopPage</router-link> -->
        <!-- <router-link to="/balckJack">blackJackPage</router-link>  -->
    </nav>
    <router-view />
    <div>
        <TopPage></TopPage>
    </div>
</template>

<style></style>
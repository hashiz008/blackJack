<script setup lang="ts">
import TopPage from "../frontend/views/TopPageView.vue";
// import BlackJack from "../frontend/views/BlackJackView.vue";
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
    <div></div>
    <div></div>
</template>

<style></style>
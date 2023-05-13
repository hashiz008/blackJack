<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
    <div>
        <p>{{ name }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, type Ref } from "vue";
export default defineComponent({
    name: "BlackJack",
    props: ['name','title'],
    setup() {
        return {};
    },
});
</script>

<style scoped></style>
<template>
    <div>
        <BlackJack  />
    </div>
</template>

<script lang="ts">
import BlackJack from "../components/BlackJack.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "BlackJackView",
    components: {
        BlackJack,
    },
    setup() {
        return {};
    },
});
</script>

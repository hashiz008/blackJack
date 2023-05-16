<template>
    <div>
        <BettingChips />
    </div>
</template>

<script lang="ts">
import BettingChips from "../components/BettingChips.vue";
import { defineComponent} from "vue";

export default defineComponent({
    name: "BettingChipsView",
    components: {
        BettingChips,
    },
    setup() {
        return {};
    },
});
</script>
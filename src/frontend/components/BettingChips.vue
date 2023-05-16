<template>
    <div>
        <p>You Bet: $0</p>
    </div>
    <div>
        <p>Your Chips: $400</p>
    </div>
    <div>
        <button>5</button>
        <button>20</button>
        <button>50</button>
        <button>100</button>
    </div>
    <div>
        <button @click="dealBtn">Deal</button>
    </div>
    <div>
        <button>Reset</button>
    </div>
    <div>
        <button>All In</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
    name: "BettingChips",
    setup() {
        const router = useRouter();
        const dealBtn = () => {
            router.push("/blackJack");
        };
        return { dealBtn };
    },
});
</script>

<style scoped></style>

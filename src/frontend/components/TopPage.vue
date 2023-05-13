<template>
    <div v-show="topPage">
        <div>
            <h2>Welcome to Card Game!</h2>
        </div>
        <div>
            <input type="text" id="name" size="5" v-model="inputName" />
        </div>
        <div>
            <select name="" id="" v-model="selectGame">
                <option value="blackJack">Black Jack</option>
            </select>
        </div>
        <div>
            <button @click="startBtn">Game Start</button>
        </div>
      </div>
      <BlackJack v-if="!topPage" :name="inputName"  title="blackJack" />
</template>zx

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import BlackJack from "../components/BlackJack.vue";
// import axios from "axios";
import { useRouter } from "vue-router";
export default defineComponent({
    name: "TopPage",
    components: { BlackJack },
    setup() {
        const inputName = ref("");
        const selectGame = ref("");
        const router = useRouter();
        const topPage = ref(true);
        const startBtn = () => {
            router.push("/blackJack");
            topPage.value = false;
        };
        return {
            inputName,
            selectGame,
            topPage,
            startBtn,
        }
    }
});
</script>

<style scoped></style>
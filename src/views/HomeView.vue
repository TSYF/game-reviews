<template>
    <div class="container-fluid d-flex">
        <GameCard
            class="m-3"
            v-for="game in games"
            :key="game.id"
            :game="game"
			@game-event="modalGame"
        />
    </div>
    <Module :otroGame="otroGame" />
</template>

<script>
import GameCard from "@/components/GameCard.vue";
import Module from "@/components/Module.vue";
export default {
    name: "HomeView",
	data() {
		return {
			otroGame: null
		}
	},
	methods: {
		modalGame(val) {
			this.otroGame = val;
		}
	},
    computed: {
        games() {
            return this.$store.state.games;
        },
    },
    components: { GameCard, Module },
};
</script>

<style>
    h1 {
        text-align: center;
    }
</style>

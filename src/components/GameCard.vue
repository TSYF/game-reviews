<template>
    <div class="card">
        <img :src="game.background_image" class="card-img-top" alt="#" />
        <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Rating: {{ game.rating }}</li>
            <li class="list-group-item">Lanzado: {{ game.released }}</li>
            <li class="list-group-item">Última actualización: {{ game.updated }}</li>
        </ul>
        <div class="card-body text-center">
            <button class="btn btn-primary mx-auto" @click="gameEvent(game)" data-bs-toggle="modal" data-bs-target="#opinion-modal">Opinar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "GameCard",
    methods: {
        gameEvent(val) {
            this.$emit("game-event", val);
        },
    },
    props: {
        game: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss">
.card {
    width: 18em;
}
</style>

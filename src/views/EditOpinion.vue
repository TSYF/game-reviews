<template>
    <h1>Editando Opinion:</h1>
    <form @submit.prevent="" class="p-4">
        <label for="nombre">Nombre:</label>
        <br />
        <input
            class="form-control"
            v-model="nombre"
            type="text"
            name="nombre"
            id="nombre"
        />
        <br />
        <label for="opinion">Opinion:</label>
        <br />
        <textarea
            class="form-control"
            v-model="opinion"
            name="opinion"
            id="opinion"
        />
        <button @click="previousPage" type="button" class="btn btn-primary">Regresar</button>
        <button type="submit" class="btn btn-info">Guardar</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            nombre: "",
            opinion: "",
        }
    },
    props: {
        opinion: {
            type: Object,
        },
        id: {
            type: Number,
        },
    },
    methods: {
        editOpinion() {
            this.$store.dispatch("editOpinion", {
                nombre: this.nombre,
                opinion: this.opinion,
                id: this.id - 1
        });
        },
        previousPage() {
            this.$router.push({ name: "admin" });
        },
    }
};
</script>

<style lang="scss" scoped></style>

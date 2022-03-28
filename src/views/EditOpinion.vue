<template>
    <h1>Editando Opinion:</h1>
    <form
        @submit.prevent="
            editOpinion({
                id,
                opinion,
                nombre,
            }),
                previousPage()
        "
        class="p-4"
    >
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
        <button
            @click="previousPage"
            type="button"
            class="mt-3 btn btn-primary"
        >
            Regresar
        </button>
        <button type="submit" class="mt-3 btn btn-info ms-2">Guardar</button>
    </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data() {
        return {
            nombre: "",
            opinion: "",
        };
    },
    props: {
        id: {
            type: Number,
        },
    },
    methods: {
        ...mapActions(["editOpinion"]),
        previousPage() {
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped></style>

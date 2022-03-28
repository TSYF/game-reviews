<template>
    <h1>Administrando la lista de opiniones:</h1>
    <div class="container">
        <table class="table">
            <thead>
                <th>#</th>
                <th>Persona</th>
                <th>Juego</th>
                <th>Opinion</th>
            </thead>
            <tbody>
                <tr v-for="(opinion, index) in opinions" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ opinion.nombre }}</td>
                    <td>{{ opinion.game }}</td>
                    <td>{{ opinion.opinion }}</td>
                    <td>
                        <button @click="editOpinion(index)" class="btn btn-primary">Edit</button>
                        <button @click="deleteOpinion(index)" class="btn btn-danger ms-2">Delete</button>
                    </td>
                </tr>
            </tbody>

        </table>
    </div>
</template>

<script>
    export default {
        computed: {
            opinions() {
                return this.$store.state.opinions;
            }
        },
        methods: {
            deleteOpinion(index) {
                this.$store.dispatch('deleteOpinion', index);
            },
            editOpinion(index) {
                this.$router.push({ name: 'editOpinion', params: { id: index } });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
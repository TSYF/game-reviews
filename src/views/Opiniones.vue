<template>
	<h1>Opiniones:</h1>
	<div class="container-fluid">
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
		
	}
};
</script>

<style lang="scss" scoped></style>

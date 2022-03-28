<template>
    <div class="modal" id="opinion-modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content" v-if="otroGame">
                <div class="modal-header">
                    <h5 class="modal-title"> {{ otroGame.name }} </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                        <label for="nombre">Nombre:</label>
                        <br>
                        <input class="form-control" v-model="nombre" type="text" name="nombre" id="nombre">
                        <br>
                        <label for="opinion">Opinion:</label>
                        <br>
                        <textarea class="form-control" v-model="opinion" name="opinion" id="opinion" />
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    <button @click="storeOpinion" class="btn btn-primary">
                        Enviar Opinion
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Module",
        data() {
            return {
                    nombre: "",
                    opinion: "",
            }
        },
        methods: {
            storeOpinion() {
                this.$store.dispatch("storeOpinion", {
                    nombre: this.nombre,
                    opinion: this.opinion,
                    game: this.otroGame.name,
                });
                this.nombre = "";
                this.opinion = "";
            }
        },
        props: {
            otroGame: {
                type: Object,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
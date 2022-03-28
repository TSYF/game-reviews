import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
		games: null,
		opinions: []
	},
    getters: {},
    mutations: {
		setGames(state, games) {
			state.games = games;
		},
		addOpinion(state, opinion) {
			state.opinions.push(opinion);
		},
		deleteOpinion(state, opinion) {
			state.opinions.splice(state.opinions.indexOf(opinion), 1);
		},
		editOpinion(state, opinion) {
			state.opinions[state.opinions.indexOf(opinion.id)].nombre = opinion.nombre;
			state.opinions[state.opinions.indexOf(opinion.id)].opinion = opinion.opinion;
		}
	},
    actions: {
        async fetchGames({ commit }) {
            try {
				const { data } = await axios.get("games.json");
                commit("setGames", data);
            } catch (error) {
                console.log(error);
            }
        },
		storeOpinion({ commit }, opinion) {
			commit("addOpinion", opinion);
		},
		deleteOpinion({ commit }, opinion) {
			commit("deleteOpinion", opinion);
		},
		editOpinion({ commit }, opinion) {
			commit("editOpinion", opinion);
		}
    },
});

store.dispatch("fetchGames")

export default store
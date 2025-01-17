const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			person: {},
			planets: [],
			planet: {},	
			ships: [],
			ship: {}	
		},
		actions: {
			// Cargar la lista de personajes
			loadCast: async () => {
				try {
					const resp = await fetch(getStore().url + '/people');
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ people: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			loadPerson: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/people/' + uid);
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ person: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			// ________________

			loadPlanets: async () => {
				try {
					const resp = await fetch(getStore().url + '/planets');
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ planets: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			loadPlanet: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/planets/' + uid);
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ planet: data.result });
				} catch (error) {
					console.error(error);
				}
			},

			// _____________

			loadShips: async () => {
				try {
					const resp = await fetch(getStore().url + '/starships/');
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ ships: data.results });
				} catch (error) {
					console.error(error);
				}
			},

			loadShip: async (uid) => {
				try {
					const resp = await fetch(getStore().url + '/starships/' + uid);
					if (!resp.ok) throw new Error('Error fetching data');
					const data = await resp.json();
					console.log(data);
					setStore({ ship: data.result });
				} catch (error) {
					console.error(error);
				}
			}

		}
	}
}
export default getState;

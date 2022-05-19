const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [

			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			addFavorite: (item) => {
				const store = getStore();
				store.favorites.push(item);
				setStore(store);
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;

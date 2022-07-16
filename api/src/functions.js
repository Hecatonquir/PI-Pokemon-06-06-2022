const axios = require('axios');
const { Pokemon, Type } = require('./db.js');

/* Gets all pokemons from the API */
const apiPokemons = async function (req, res) {
	try {
		const pokeApiUrl1 = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151');
		const pokeApi1B = pokeApiUrl1.data.results;
		const pokeApiUrl2 = pokeApi1B.map((e) => axios.get(e.url));
		// con pokeApi2 me traigo toda la info que me interesa y luego con pokeApiUrl2 le pido que me traiga en forma de array todas las url de todos los pokemons(estas son promesas pendientes).
		const pokeApiA2A = await axios.all(pokeApiUrl2);
		// en pokeApiA2A estoy pidiendo que espere a que se cumplan todas las promesas de pokeApiUrl2. Esto también me trae info que NO necesito en forma de objeto
		const pokeApiA2B = pokeApiA2A.map((e) => e.data);
		// ahora le pido que me traiga un arreglo compuesto de objetos con toda la info que necesito
		const pokemonsAPI = pokeApiA2B.map((e) => {
			return {
				id: e.id,
				name: e.name,
				hp: e.stats[0].base_stat,
				attack: e.stats[1].base_stat,
				defense: e.stats[2].base_stat,
				speed: e.stats[5].base_stat,
				height: e.height,
				weight: e.weight,
				image: e.sprites.other['official-artwork'].front_default,
				type: e.types.map((e) => e.type.name),
			};
		});
		return pokemonsAPI;
	} catch (error) {
		return error;
	}
};

const dbPokemons = async function (req, res) {
	const created_pokemons = await Pokemon.findAll({ include: Type });

	created_pokemons.map((e) => {
		e.dataValues['type'] = e.dataValues['types'].map((e) => e.type);
		delete e.dataValues['types'];
	});
	return created_pokemons;
};

const ALLPokemons = async function (req, res) {
	const api_pokemons = await apiPokemons();
	const db_pokemons = await dbPokemons();
	const ALLPokes = db_pokemons.concat(api_pokemons);
	res.send(ALLPokes);
};

const findpoke = async function (req, res) {
	const { name } = req.query;
	const api_pokemons = await apiPokemons();
	const db_pokemons = await dbPokemons();
	const ALLPokes = db_pokemons.concat(api_pokemons);
	const found = ALLPokes.filter((p) => p.name.includes(name));
	res.send(found);
};

const getTypes = async (rqe, res) => {
	try {
		const pokeTypes = await axios.get('https://pokeapi.co/api/v2/type');
		const pokeTypes2 = pokeTypes.data.results.map((e) => e.name);
		pokeTypes2.map((e) => {
			Type.findOrCreate({ where: { type: e } });
		});
		const allTypes = await Type.findAll();
		return allTypes;
	} catch (error) {
		const allTypes = await Type.findAll();
		return allTypes;
	}
};
const getTypes2 = async (req, res) => {
	const allTypes = await getTypes();
	res.send(allTypes);
};

const newPoke = async (req, res) => {
	º;
	const { name, hp, attack, defense, speed, height, weight, type, image } = req.body;

	try {
		let createPoke = await Pokemon.create({
			name,
			hp,
			attack,
			defense,
			speed,
			height,
			weight,
			image,
		});
		let checkType = await Type.findAll({
			where: { type: type.map((e) => e.toLowerCase()) },
		});
		createPoke.addType(checkType);
		res.send('Pokemon creado correctamente');
	} catch (error) {
		res.send('No pusiste todos los datos');
	}
};

module.exports = { ALLPokemons, newPoke, getTypes, getTypes2, findpoke };

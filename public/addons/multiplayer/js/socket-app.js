///////////////////////////////////////////////////////////
// SOCKET CUSTOM
////////////////////////////////////////////////////////////
function startSocketGame(){
	postSocketUpdate('init');
}

async function updateSocketGame(status, data, time) {
    const game = multiplayerSettings.game;
	try {
		const module = await import(`./addons/multiplayer/js/games/${game}.js`);
		if (typeof module.handleSocketUpdate === "function") {
			module.handleSocketUpdate(status, data, time);
		} else {
			console.warn(`${game}.js does not export handleSocketUpdate`);
		}
	} catch (err) {
		console.error(`Failed to load ${game}.js:`, err);
	}
}
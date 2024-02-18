export class WealthLevelShop {
	static ID = 'wealth-level-shop';

	static FLAGS = {
		WLSHOP: 'wlshop',
	};

	static TEMPLATES = {
		INVENTORY: `modules/${this.ID}/templates/inventory.hbs`,
	};

	static log(force, ...args) {
		const shouldLog =
			force ||
			game.modules.get('_dev-mode')?.api?.getPackageDebugValue(this.ID);

		if (shouldLog) {
			console.log(this.ID, '|', ...args);
		}
	}

	static listInventory(userId) {
		return WealthLevelShop.log(game.users.get(userId));
	}
}
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
	registerPackageDebugFlag(WealthLevelShop.ID);
});

Hooks.once('ready', () => {
	let userId = game.userId;
	console.log(userId);
	WealthLevelShop.log(true, userId);
});

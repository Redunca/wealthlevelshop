import { WealthLevelShop } from 'wealth-level-shop.js';

Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
	registerPackageDebugFlag(WealthLevelShop.ID);
});

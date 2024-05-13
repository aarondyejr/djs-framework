import { Client, ClientOptions, Collection } from 'discord.js';
import { Plugin } from './plugin';
import { IShensuoOptions } from '../types';

export class ShensuoClient extends Client {
	public plugins: Collection<string, Plugin> = new Collection();
	public shensuoOptions: IShensuoOptions;
	constructor(clientOptions: ClientOptions, shensuoOptions: IShensuoOptions) {
		super(clientOptions);

		this.shensuoOptions = shensuoOptions;
	}
	
	async registerPlugins() {
		for (const [index, plugin] of this.shensuoOptions.plugins.entries()) {
			if (!(plugin instanceof Plugin))
				throw Error(`At index ${index} it did not inherit class Plugin`);

			this.plugins.set(plugin.name, plugin);

			await plugin.handler(this);

			this.emit('pluginsLoaded');
		}
	}
}

declare module 'discord.js' {
	export interface ClientEvents {
		pluginsLoaded: [];
	}
}

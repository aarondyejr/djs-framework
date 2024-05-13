import EventEmitter from 'node:events';
import { IPluginOptions } from '../types';
import { Client } from 'discord.js';

export abstract class Plugin extends EventEmitter {
	public name: string
	constructor(options: IPluginOptions) {
		super();

		this.name = options.name;
	}

	abstract handler(client: Client): Promise<void>;
}

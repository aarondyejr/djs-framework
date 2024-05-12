import EventEmitter from 'node:events';
import { IPluginOptions } from '../types';
import { Client } from 'discord.js';

export abstract class Plugin extends EventEmitter {
	public id: number;
	constructor(options: IPluginOptions) {
		super();

		this.id = options.id;
	}

	abstract handler(client: Client): Promise<void>;
}

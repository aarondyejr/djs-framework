import { ClientOptions } from 'discord.js';
import { Plugin } from './extendables/plugin';

export interface IPluginOptions {
	id: number;
}

export interface IShensuoOptions {
	plugins: Plugin[];
}

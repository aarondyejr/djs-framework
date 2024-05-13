import { ClientOptions } from 'discord.js';
import { Plugin } from './extendables/plugin';

export interface IPluginOptions {
	name: string;
}

export interface IShensuoOptions {
	plugins: Plugin[];
}

import EventEmitter from 'node:events';
import { Client } from 'discord.js';

export interface IPluginOptions {
    name: string;
}

export abstract class Plugin extends EventEmitter {
    public name: string;
    constructor(options: IPluginOptions) {
        super();

        this.name = options.name;
    }

    abstract handler(client: Client): Promise<void>;
}

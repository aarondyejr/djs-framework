import { Client, ClientOptions, Collection } from 'discord.js';
import { Plugin } from './plugin';
import { PluginManager } from './pluginmanager';

export class ShensuoClient extends Client {
    public plugins: PluginManager;
    constructor(token: string, clientOptions: ClientOptions) {
        super(clientOptions);

        this.plugins = new PluginManager();

        this.token = token;
    }

    /**
     *
     * @param plugin Plugin you are wanting to load
     *
     * @returns {ShensuoClient}
     */
    addPlugin(plugin: Plugin): this {
        if (!(plugin instanceof Plugin))
            throw new Error('A plugin must inherit from the Plugin class.');

        if (!plugin.name) throw new Error('A plugin must have a name field.');

        this.plugins.add(plugin);

        return this;
    }

    /**
     * Log the bot into the gateway & load any plugins added with `ShensuoClient#addPlugin`.
     */

    async launch() {
        for (const [_, plugin] of this.plugins.collection) {
            await plugin.handler(this);
        }
        this.login(this.token!);
    }
}

declare module 'discord.js' {
    export interface ClientEvents {
        pluginsLoaded: [];
    }
}

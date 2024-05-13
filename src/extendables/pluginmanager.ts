import { Collection } from 'discord.js';
import { Plugin } from './plugin.js';

export class PluginManager {
    #plugins: Collection<string, Plugin>;

    constructor() {
        this.#plugins = new Collection();
    }

    get collection() {
        return this.#plugins;
    }

    get(plugin: string | Plugin): Plugin | null {
        return this.#plugins.get(typeof plugin === 'string' ? plugin : plugin.name) ?? null;
    }

    add(plugin: Plugin) {
        this.#plugins.set(plugin.name, plugin);
    }
    remove(plugin: string | Plugin) {
        this.#plugins.delete(typeof plugin === 'string' ? plugin : plugin.name);
    }
}

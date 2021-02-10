import { PluginOptions } from './types';
/**
 * Using class is easier for testing
 */
export declare class Plugin {
    jsonld: (elev: any) => Promise<string>;
}
export declare const plugin: {
    initArguments: {};
    configFunction: (eleventyConfig: any, options?: PluginOptions | undefined) => Promise<void>;
};

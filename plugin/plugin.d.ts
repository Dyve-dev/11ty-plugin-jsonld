import { PluginOptions } from './types';
import ejs from 'ejs';
/**
 * Using class is easier for testing
 */
export declare class Plugin {
    websiteTemplate: ejs.TemplateFunction | null;
    constructor();
}
export declare const plugin: {
    initArguments: {};
    configFunction: (eleventyConfig: any, options?: PluginOptions | undefined) => Promise<void>;
};

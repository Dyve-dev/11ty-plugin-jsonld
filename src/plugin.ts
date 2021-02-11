import fs from 'fs';
import Debug from 'debug';
import { PluginOptions } from './types';
import ejs from 'ejs';

const debug = Debug('@dyve:11typlugin:jsonld');

const defaults: PluginOptions = {};

/**
 * Using class is easier for testing
 */
export class Plugin {
  websiteTemplate: ejs.TemplateFunction | null = null;

  constructor() {
    fs.readFile('../templates/webiste.ldjson.ejs', { encoding: 'utf-8' }, async (err, data) => {
      if (err) {
        debug(err);
      }
      if (data) {
        this.websiteTemplate = await ejs.compile(data);
      }
    });
  }
}

export const plugin = {
  initArguments: {},
  configFunction: async (eleventyConfig: any, options?: PluginOptions) => {
    const _plugin = new Plugin();
    debug('init');
    eleventyConfig.addShortcode('jsonld', (data: any) => {
      if (_plugin.websiteTemplate) {
        return _plugin.websiteTemplate(data);
      }
      return '';
    });
  },
};

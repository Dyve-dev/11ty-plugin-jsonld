import Debug from 'debug';
import { PluginOptions } from './types';
import jsonld from 'jsonld';
import { ContextDefinition, JsonLdDocument } from 'jsonld';
const debug = Debug('@dyve:11typlugin:jsonld');

const defaults: PluginOptions = {};

/**
 * Using class is easier for testing
 */
export class Plugin {
  jsonld = async (elev: any) => {
    const _jsonld_open = `<script type="application/ld+json">`;
    const _jsonld_close = `</script>`;
    const context: ContextDefinition = {
      '@base': 'http://schema.org/',
    };
    const doc: JsonLdDocument = {
      '@type': 'Website',
      url: 'https://arbellay.ch',
    };
    //const compacted = await jsonld.compact(doc, context);
    const compacted = 'test';
    return _jsonld_open + compacted + _jsonld_close;
  };
}

export const plugin = {
  initArguments: {},
  configFunction: async (eleventyConfig: any, options?: PluginOptions) => {
    const _plugin = new Plugin();

    eleventyConfig.addShortcode('jsonld', (data: any) => {
      return _plugin.jsonld(this);
    });
  },
};

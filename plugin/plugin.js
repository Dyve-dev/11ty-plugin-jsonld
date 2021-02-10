"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.Plugin = void 0;
const debug_1 = __importDefault(require("debug"));
const debug = debug_1.default('@dyve:11typlugin:jsonld');
const defaults = {};
/**
 * Using class is easier for testing
 */
class Plugin {
    constructor() {
        this.jsonld = async (elev) => {
            const _jsonld_open = `<script type="application/ld+json">`;
            const _jsonld_close = `</script>`;
            const context = {
                '@base': 'http://schema.org/',
            };
            const doc = {
                '@type': 'Website',
                url: 'https://arbellay.ch',
            };
            //const compacted = await jsonld.compact(doc, context);
            const compacted = 'test';
            return _jsonld_open + compacted + _jsonld_close;
        };
    }
}
exports.Plugin = Plugin;
exports.plugin = {
    initArguments: {},
    configFunction: async (eleventyConfig, options) => {
        const _plugin = new Plugin();
        eleventyConfig.addShortcode('jsonld', (data) => {
            return _plugin.jsonld(this);
        });
    },
};

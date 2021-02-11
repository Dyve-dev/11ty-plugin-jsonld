"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = exports.Plugin = void 0;
const fs_1 = __importDefault(require("fs"));
const debug_1 = __importDefault(require("debug"));
const ejs_1 = __importDefault(require("ejs"));
const debug = debug_1.default('@dyve:11typlugin:jsonld');
const defaults = {};
/**
 * Using class is easier for testing
 */
class Plugin {
    constructor() {
        this.websiteTemplate = null;
        fs_1.default.readFile('../templates/webiste.ldjson.ejs', { encoding: 'utf-8' }, async (err, data) => {
            if (err) {
                debug(err);
            }
            if (data) {
                this.websiteTemplate = await ejs_1.default.compile(data);
            }
        });
    }
}
exports.Plugin = Plugin;
exports.plugin = {
    initArguments: {},
    configFunction: async (eleventyConfig, options) => {
        const _plugin = new Plugin();
        debug('init');
        eleventyConfig.addShortcode('jsonld', (data) => {
            if (_plugin.websiteTemplate) {
                return _plugin.websiteTemplate(data);
            }
            return '';
        });
    },
};

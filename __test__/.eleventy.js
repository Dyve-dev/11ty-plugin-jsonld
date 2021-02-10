const plugin = require('../plugin');

const defaultDirStructure = {
  input: '.',
  includes: '_includes',
  data: '_data',
  output: '_site',
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addFilter('await', (promise) => {
    if (!promise) return;
    promise.then((data) => data).catch((err) => err.message);
  });
  eleventyConfig.addPlugin(plugin, { copy: 'subfolder/quicklink.umd.js' });
  // TODO: find how to test both copy scenarios
  // eleventyConfig.addPlugin(quicklink, { copy: true });

  return {
    templateFormats: ['njk'],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: '/',

    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: defaultDirStructure,
  };
};

const inlineSvg = require('rollup-plugin-inline-svg');

module.exports = {
    rollup(config, options) {
        config.plugins.push(
            inlineSvg({
                // default: false
                removeTags: false,

                // warning: this won't work unless you specify removeTags: true
                // default: ['title', 'desc', 'defs', 'style']
                removingTags: ['title', 'desc', 'defs', 'style'],

                // warns about present tags, ex: ['desc', 'defs', 'style']
                // default: []
                warnTags: [],

                // Removes `width` and `height` attributes from <svg>.
                // default: true
                removeSVGTagAttrs: true,

                // Removes attributes from inside the <svg>.
                // default: []
                removingTagAttrs: [],

                // Warns to console about attributes from inside the <svg>.
                // default: []
                warnTagAttrs: [],
            }),
        );
        return config;
    },
};

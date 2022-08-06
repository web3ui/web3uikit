"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noFouc = void 0;
/**
 * This plugin is a workaround to inject some styles into the `<head>` of the iframe to
 * prevent the "no story" text from appearing breifly while the page loads in.
 *
 * It can be removed, and these styles placed back into the head,
 * when https://github.com/vitejs/vite/issues/6737 is closed.
 */
function noFouc() {
    return {
        name: 'no-fouc',
        enforce: 'post',
        async transformIndexHtml(html, ctx) {
            if (ctx.path !== '/iframe.html') {
                return;
            }
            return insertHeadStyles(html);
        },
    };
}
exports.noFouc = noFouc;
/**
 * Insert default styles to hide storybook elements as the page loads until JS can
 * add the official storybook default head styles and scripts.  These lines are mostly
 * taken from https://github.com/storybookjs/storybook/blob/next/lib/core-common/templates/base-preview-head.html#L6-L20
 */
function insertHeadStyles(html) {
    return html.replace('</head>', `
  <style>
    .sb-show-preparing-story:not(.sb-show-main) > :not(.sb-preparing-story) {
      display: none;
    }
    .sb-show-preparing-docs:not(.sb-show-main) > :not(.sb-preparing-docs) {
      display: none;
    }
    :not(.sb-show-preparing-story) > .sb-preparing-story,
    :not(.sb-show-preparing-docs) > .sb-preparing-docs,
    :not(.sb-show-nopreview) > .sb-nopreview,
    :not(.sb-show-errordisplay) > .sb-errordisplay {
      display: none;
    }
    #root[hidden],
    #docs-root[hidden] {
      display: none !important;
    }
  </style>
</head>
  `.trim());
}
//# sourceMappingURL=no-fouc.js.map
import type { Plugin as VitePlugin } from 'vite';
import type { Pluggable } from 'unified';
import mdx from '@mdx-js/mdx';
export declare type RemarkPlugin = Pluggable | false;
export declare type RehypePlugin = Pluggable | false;
export interface MdxOptions extends Omit<mdx.Options, 'remarkPlugins' | 'rehypePlugins'> {
    remarkPlugins?: Readonly<RemarkPlugin>[];
    rehypePlugins?: Readonly<RehypePlugin>[];
}
export interface MdxPlugin extends VitePlugin {
    mdxOptions: MdxOptions & {
        remarkPlugins: RemarkPlugin[];
        rehypePlugins: RehypePlugin[];
    };
}
//# sourceMappingURL=types.d.ts.map
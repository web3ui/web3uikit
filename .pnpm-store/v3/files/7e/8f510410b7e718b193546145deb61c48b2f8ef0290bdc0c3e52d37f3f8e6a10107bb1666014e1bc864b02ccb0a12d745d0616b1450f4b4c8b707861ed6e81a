import { ConfigFile } from '@storybook/csf-tools';
import { Fix } from '../types';
import { PackageJson } from '../../js-package-manager';
interface BuilderViteOptions {
    builder: any;
    main: ConfigFile;
    packageJson: PackageJson;
}
/**
 * Is the user using 'storybook-builder-vite' in their project?
 *
 * If so, prompt them to upgrade to '@storybook/builder-vite'.
 *
 * - Add '@storybook/builder-vite' as dev dependency
 * - Remove 'storybook-builder-vite' dependency
 * - Add core.builder = '@storybook/builder-vite' to main.js
 */
export declare const builderVite: Fix<BuilderViteOptions>;
export {};

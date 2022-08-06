import { ConfigFile } from '@storybook/csf-tools';
import { Fix } from '../types';
import { PackageJsonWithDepsAndDevDeps } from '../../js-package-manager';
interface Webpack5RunOptions {
    webpackVersion: string;
    storybookVersion: string;
    main: ConfigFile;
}
interface CheckBuilder {
    checkWebpack5Builder: (packageJson: PackageJsonWithDepsAndDevDeps) => Promise<{
        storybookVersion: string;
        main: ConfigFile;
    }>;
}
/**
 * Is the user using webpack5 in their project?
 *
 * If the user is using a version of SB >= 6.3,
 * prompt them to upgrade to webpack5.
 *
 * - Add manager-webpack5 builder-webpack5 as dev dependencies
 * - Add core.builder = 'webpack5' to main.js
 * - Add 'webpack5' as a project dependency
 */
export declare const webpack5: Fix<Webpack5RunOptions> & CheckBuilder;
export {};

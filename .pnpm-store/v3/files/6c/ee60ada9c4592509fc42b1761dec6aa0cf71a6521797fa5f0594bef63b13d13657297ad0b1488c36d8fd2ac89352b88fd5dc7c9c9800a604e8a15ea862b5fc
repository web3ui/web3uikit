import { PackageJson } from './js-package-manager';
export declare const storybookAddonScope = "@storybook/addon-";
export declare const getPackageName: (addonName: string, isOfficialAddon: boolean) => string;
export declare const getInstalledStorybookVersion: (packageJson: PackageJson) => string | false;
export declare const getPackageArg: (addonName: string, isOfficialAddon: boolean, packageJson: PackageJson) => string;
export declare const addStorybookAddonToFile: (addonName: string, addonsFile: string[], isOfficialAddon: boolean) => string[];
export declare function add(addonName: string, options: {
    useNpm: boolean;
    skipPostinstall: boolean;
}): Promise<void>;

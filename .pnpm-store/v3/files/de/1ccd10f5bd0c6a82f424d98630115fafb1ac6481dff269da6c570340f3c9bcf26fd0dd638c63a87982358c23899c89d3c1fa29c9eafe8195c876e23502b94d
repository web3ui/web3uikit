import { ProjectConfiguration, Tree } from '@nrwl/devkit';
import { Schema } from '../schema';
/**
 * This helper function ensures that we don't move libs or apps
 * outside of the folders they should be in.
 *
 * This will break if someone isn't using the default libs/apps
 * folders. In that case, they're on their own :/
 */
export declare function getDestination(host: Tree, schema: Schema, project: ProjectConfiguration): string;
/**
 * Replaces slashes with dashes
 *
 * @param path
 */
export declare function getNewProjectName(path: string): string;
/**
 * Normalizes slashes (removes duplicates)
 *
 * @param input
 */
export declare function normalizeSlashes(input: string): string;

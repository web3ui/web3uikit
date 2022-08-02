import * as path from 'path';
import { promise as glob } from 'glob-promise';
import { normalizeStories } from '@storybook/core-common';

import type { Options } from '@storybook/core-common';

export async function listStories(options: Options) {
  return (
    await Promise.all(
      normalizeStories(await options.presets.apply('stories', [], options), {
        configDir: options.configDir,
        workingDir: options.configDir,
      }).map(({ directory, files }) => {
        const pattern = path.join(directory, files);

        return glob(path.isAbsolute(pattern) ? pattern : path.join(options.configDir, pattern));
      })
    )
  ).reduce((carry, stories) => carry.concat(stories), []);
}

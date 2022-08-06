import path from 'path';
import { normalizePath } from 'vite';

// We need to convert from an absolute path, to a traditional node module import path,
// so that vite can correctly pre-bundle/optimize
export function transformAbsPath(absPath: string) {
  const splits = absPath.split(`node_modules${path.sep}`);
  // Return everything after the final "node_modules/"
  const module = normalizePath(splits[splits.length - 1]);
  return module;
}

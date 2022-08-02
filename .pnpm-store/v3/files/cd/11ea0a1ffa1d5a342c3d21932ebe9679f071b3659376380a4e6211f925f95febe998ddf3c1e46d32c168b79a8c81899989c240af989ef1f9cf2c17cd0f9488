import createHash from "create-hash";

import { IHashAlgorithmOptions, SRI } from "./interfaces";

const defaults = (options: IHashAlgorithmOptions) => ({
  algorithms: options.algorithms || ["sha256"],
  delimiter: options.delimiter || " ",
  full: options.full || false,
});

// Generate list of hashes
const hashes = (options: IHashAlgorithmOptions, data: string): Record<createHash.algorithm, string> => {
  const internalHashes: Record<string, string> = {};
  options.algorithms.forEach((algorithm) => {
    internalHashes[algorithm] = createHash(algorithm).update(data, "utf8").digest("base64");
  });
  return internalHashes;
};
// Build an integrity string
const integrity = (options: IHashAlgorithmOptions, sri: SRI): string => {
  let output = "";

  // Hash list
  output += Object.keys(sri.hashes)
    .map((algorithm: createHash.algorithm) => `${algorithm}-${sri.hashes[algorithm]}`)
    .join(options.delimiter);

  return output;
};

const main = (options: IHashAlgorithmOptions, data: string): SRI | string => {
  // Defaults
  const finalOptions = defaults(options);

  const sri = {
    hashes: hashes(finalOptions, data),
    integrity: undefined,
  };
  sri.integrity = integrity(finalOptions, sri);

  return finalOptions.full ? sri : sri.integrity;
};

export default main;

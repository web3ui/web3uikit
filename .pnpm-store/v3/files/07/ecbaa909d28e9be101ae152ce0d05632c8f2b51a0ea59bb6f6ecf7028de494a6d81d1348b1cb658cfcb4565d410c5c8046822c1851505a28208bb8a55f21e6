export function concatChunkToBuffer(
  chunk: string | Buffer,
  buffer: Buffer[]
): Buffer[] {
  if (!Buffer.isBuffer(chunk)) {
    chunk = Buffer.from(chunk)
  }

  return buffer.concat(chunk)
}

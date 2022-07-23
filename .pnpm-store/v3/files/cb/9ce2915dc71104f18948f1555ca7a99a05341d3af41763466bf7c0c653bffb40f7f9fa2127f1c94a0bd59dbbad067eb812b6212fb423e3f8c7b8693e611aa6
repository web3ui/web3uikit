/**
 * Convert a given string into a `Uint8Array`.
 * We don't use `TextEncoder` because it's unavailable in some environments.
 */
export function bufferFrom(init: string): Uint8Array {
  const encodedString = encodeURIComponent(init)
  const binaryString = encodedString.replace(/%([0-9A-F]{2})/g, (_, char) => {
    return String.fromCharCode(('0x' + char) as any)
  })
  const buffer = new Uint8Array(binaryString.length)
  Array.prototype.forEach.call(binaryString, (char, index) => {
    buffer[index] = char.charCodeAt(0)
  })

  return buffer
}

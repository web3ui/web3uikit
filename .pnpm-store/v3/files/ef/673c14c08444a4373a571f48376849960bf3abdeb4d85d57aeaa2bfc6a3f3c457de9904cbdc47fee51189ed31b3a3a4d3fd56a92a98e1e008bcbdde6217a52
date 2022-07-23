import * as fs from 'fs'

export interface FileAdapter {
  readdir(name: string): string[]
  readlink(name: string): string
  lstat(name: string): fs.Stats
  stat(name: string): fs.Stats
}

export const localFs: FileAdapter = {
  readdir: name => fs.readdirSync(name),
  readlink: name => fs.readlinkSync(name),
  lstat: name => fs.lstatSync(name),
  stat: name => fs.statSync(name),
}

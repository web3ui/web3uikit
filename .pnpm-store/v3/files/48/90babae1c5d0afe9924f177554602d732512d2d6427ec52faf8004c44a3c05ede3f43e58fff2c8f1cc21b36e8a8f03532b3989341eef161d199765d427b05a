import { BufferEncoding } from "@toruslabs/openlogin-utils";
import eos from "end-of-stream";
import once from "once";
import pump from "pump";
import { Duplex } from "readable-stream";
import type { Readable, Writable } from "stream";

import Substream from "./substream";

export const IGNORE_SUBSTREAM = Symbol("IGNORE_SUBSTREAM");

export type Stream = Readable | Writable;

interface Chunk {
  name: string;
  data: unknown;
}

export class ObjectMultiplex extends Duplex {
  public _substreams: Record<string, Substream | typeof IGNORE_SUBSTREAM>;

  getStream: (name: string) => Substream | symbol;

  constructor(opts: Record<string, unknown> = {}) {
    super({
      ...opts,
      objectMode: true,
    });
    this._substreams = {};
  }

  createStream(name: string): Substream {
    // validate name
    if (!name) {
      throw new Error("ObjectMultiplex - name must not be empty");
    }

    if (this._substreams[name]) {
      throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
    }

    // create substream
    const substream = new Substream({ parent: this, name });
    this._substreams[name] = substream;

    // listen for parent stream to end
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    anyStreamEnd(this, (_error?: Error | null) => substream.destroy(_error || undefined));

    return substream;
  }

  // ignore streams (dont display orphaned data warning)
  ignoreStream(name: string): void {
    // validate name
    if (!name) {
      throw new Error("ObjectMultiplex - name must not be empty");
    }
    if (this._substreams[name]) {
      throw new Error(`ObjectMultiplex - Substream for name "${name}" already exists`);
    }
    // set
    this._substreams[name] = IGNORE_SUBSTREAM;
  }

  _read(): void {
    return undefined;
  }

  _write(chunk: Chunk, _encoding: BufferEncoding, callback: (error?: Error | null) => void): void {
    const { name, data } = chunk;

    if (!name) {
      window.console.warn(`ObjectMultiplex - malformed chunk without name "${chunk}"`);
      return callback();
    }

    // get corresponding substream
    const substream = this._substreams[name];
    if (!substream) {
      window.console.warn(`ObjectMultiplex - orphaned data for stream "${name}"`);
      return callback();
    }

    // push data into substream
    if (substream !== IGNORE_SUBSTREAM) {
      substream.push(data);
    }

    return callback();
  }
}

// util
function anyStreamEnd(stream: ObjectMultiplex, _cb: (error?: Error | null) => void) {
  const cb = once(_cb);
  eos(stream as unknown as Stream, { readable: false }, cb);
  eos(stream as unknown as Stream, { writable: false }, cb);
}

export function setupMultiplex(stream: Duplex): ObjectMultiplex {
  const mux = new ObjectMultiplex();
  mux.getStream = function streamHelper(name: string) {
    if (this._substreams[name]) {
      return this._substreams[name];
    }
    return this.createStream(name);
  };

  pump(stream as unknown as Stream, mux as unknown as Stream, stream as unknown as Stream, (err) => {
    if (err) window.console.error(err);
  });
  return mux;
}

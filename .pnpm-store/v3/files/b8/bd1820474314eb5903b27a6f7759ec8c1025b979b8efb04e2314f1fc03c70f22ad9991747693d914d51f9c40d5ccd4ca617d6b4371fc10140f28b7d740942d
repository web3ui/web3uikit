import { HashParams } from "./hashParams";

export class URLWithHashParams extends URL {
  hashParams: HashParams = new URLSearchParams();

  toString(): string {
    this.hash = this.hashParams.toString();
    return super.toString.call(this);
  }
}

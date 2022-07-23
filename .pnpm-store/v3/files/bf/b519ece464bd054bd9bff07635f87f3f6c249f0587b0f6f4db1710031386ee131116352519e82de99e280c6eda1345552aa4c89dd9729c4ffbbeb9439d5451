import BasePostMessageStream from "./basePostMessageStream";

export default class PostMessageStream extends BasePostMessageStream {
  _postMessage(data: unknown): void {
    let originConstraint = this._targetOrigin;
    if (typeof data === "object") {
      const dataObj = data as Record<string, unknown>;
      if (typeof dataObj.data === "object") {
        const dataObjData = dataObj.data as Record<string, unknown>;
        if (Array.isArray(dataObjData.params) && dataObjData.params.length > 0) {
          const dataObjDataParam = dataObjData.params[0] as Record<string, unknown>;
          if (dataObjDataParam._origin) {
            originConstraint = dataObjDataParam._origin as string;
          }

          // add a constraint for the response
          dataObjDataParam._origin = window.location.origin;
        }
      }
    }

    this._targetWindow.postMessage(
      {
        target: this._target,
        data,
      },
      originConstraint
    );
  }
}

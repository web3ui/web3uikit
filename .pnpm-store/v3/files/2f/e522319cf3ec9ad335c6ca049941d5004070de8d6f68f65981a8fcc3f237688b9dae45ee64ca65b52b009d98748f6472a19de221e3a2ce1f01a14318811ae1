import { JRPCEngineEndCallback, JRPCEngineNextCallback, JRPCRequest, JRPCResponse, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";

import { COMMUNICATION_JRPC_METHODS } from "../enums";

class CommunicationWindowManager extends SafeEventEmitter {
  handleWindowRpc = (
    request: JRPCRequest<{ windowId: string }>,
    response: JRPCResponse<boolean>,
    next: JRPCEngineNextCallback,
    end: JRPCEngineEndCallback
  ): void => {
    const { method, params } = request;
    if (method === COMMUNICATION_JRPC_METHODS.OPENED_WINDOW) {
      const { windowId } = params;
      // I've been informed that a window has been opened
      this.emit(`${windowId}:opened`);
      response.result = true;
      end();
    } else if (method === COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW) {
      const { windowId } = params;
      // I've been informed that a window has been closed
      this.emit(`${windowId}:closed`);
      response.result = true;
      end();
    } else {
      next();
    }
  };
}

export default CommunicationWindowManager;

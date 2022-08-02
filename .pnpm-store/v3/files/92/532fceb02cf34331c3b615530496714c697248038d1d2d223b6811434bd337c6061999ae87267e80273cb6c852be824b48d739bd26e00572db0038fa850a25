import { HttpRequestEventMap, InteractiveIsomorphicRequest } from '../../glossary';
import { Interceptor } from '../../Interceptor';
import { AsyncEventEmitter } from '../../utils/AsyncEventEmitter';
export declare type XMLHttpRequestEventListener = (request: InteractiveIsomorphicRequest) => Promise<void> | void;
export declare type XMLHttpRequestEmitter = AsyncEventEmitter<HttpRequestEventMap>;
export declare class XMLHttpRequestInterceptor extends Interceptor<HttpRequestEventMap> {
    static symbol: symbol;
    constructor();
    protected checkEnvironment(): boolean;
    protected setup(): void;
}

/// <reference types="node" />
import type { Server } from 'net';
import type { WatcherSubscription } from './watcher';
export declare const SERVER_INACTIVITY_TIMEOUT_MS: 10800000;
interface HandleServerProcessTerminationParams {
    server: Server;
    reason: string;
    watcherSubscription: WatcherSubscription | undefined;
}
export declare function handleServerProcessTermination({ server, reason, watcherSubscription, }: HandleServerProcessTerminationParams): Promise<void>;
export declare function resetInactivityTimeout(cb: () => void): void;
export {};

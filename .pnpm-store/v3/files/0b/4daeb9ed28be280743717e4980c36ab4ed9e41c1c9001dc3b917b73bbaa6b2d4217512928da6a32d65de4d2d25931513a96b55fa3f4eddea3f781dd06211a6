/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { ProjectGraph } from '../../config/project-graph';
export declare function startInBackground(): Promise<ChildProcess['pid']>;
export declare function startInCurrentProcess(): void;
export declare function stop(): void;
/**
 * As noted in the comments above the createServer() call, in order to reliably (meaning it works
 * cross-platform) check whether the server is available to request a project graph from we
 * need to actually attempt connecting to it.
 *
 * Because of the behavior of named pipes on Windows, we cannot simply treat them as a file and
 * check for their existence on disk (unlike with Unix Sockets).
 */
export declare function isServerAvailable(): Promise<boolean>;
/**
 * Establishes a client connection to the daemon server for use in project graph
 * creation utilities.
 *
 * All logs are performed by the devkit logger because this logic does not
 * run "on the server" per se and therefore does not write to its log output.
 *
 * TODO: Gracefully handle a server shutdown (for whatever reason) while a client
 * is connecting and querying it.
 */
export declare function getProjectGraphFromServer(): Promise<ProjectGraph>;

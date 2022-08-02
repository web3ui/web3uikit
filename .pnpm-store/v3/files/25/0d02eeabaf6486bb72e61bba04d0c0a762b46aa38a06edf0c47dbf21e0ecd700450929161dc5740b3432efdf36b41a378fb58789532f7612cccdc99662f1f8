import { R as ResponseTransformer, s as status, a as set, d as delay, f as fetch, b as RequestHandler, S as SetupWorkerApi, D as DefaultContext, c as DefaultBodyType, M as MockedRequest, e as ResponseResolver, g as ResponseResolutionContext, h as SerializedResponse, i as RequestHandlerDefaultInfo, j as MockedResponse, k as ResponseLookupResult, l as SharedOptions, m as ServerLifecycleEventsMap } from './glossary-58eca5a8.js';
export { A as AsyncResponseResolverReturnType, c as DefaultBodyType, u as DefaultRequestMultipartBody, y as DelayMode, M as MockedRequest, j as MockedResponse, b as RequestHandler, v as ResponseComposition, w as ResponseCompositionOptions, x as ResponseFunction, e as ResponseResolver, t as ResponseResolverReturnType, R as ResponseTransformer, S as SetupWorkerApi, l as SharedOptions, q as StartOptions, o as createResponseComposition, p as defaultContext, n as defaultResponse, r as response } from './glossary-58eca5a8.js';
import * as cookieUtils from 'cookie';
import { GraphQLError, OperationTypeNode, DocumentNode } from 'graphql';
import { StrictEventEmitter } from 'strict-event-emitter';
import { IsomorphicRequest } from '@mswjs/interceptors';
import 'type-fest';
import 'headers-polyfill';

declare type Path = string | RegExp;
declare type PathParams<KeyType extends keyof any = string> = {
    [ParamName in KeyType]: string | ReadonlyArray<string>;
};
interface Match {
    matches: boolean;
    params?: PathParams;
}
/**
 * Returns the result of matching given request URL against a mask.
 */
declare function matchRequestUrl(url: URL, path: Path, baseUrl?: string): Match;

declare type Fn = (...arg: any[]) => any;
declare type RequiredDeep<Type, U extends Record<string, unknown> | Fn | undefined = undefined> = Type extends Fn ? Type : Type extends Record<string, any> ? {
    [Key in keyof Type]-?: NonNullable<Type[Key]> extends NonNullable<U> ? NonNullable<Type[Key]> : RequiredDeep<NonNullable<Type[Key]>, U>;
} : Type;
declare type GraphQLPayloadContext<QueryType extends Record<string, unknown>> = (payload: QueryType) => ResponseTransformer;

/**
 * Sets a given cookie on the mocked response.
 * @example res(ctx.cookie('name', 'value'))
 */
declare const cookie: (name: string, value: string, options?: cookieUtils.CookieSerializeOptions) => ResponseTransformer;

/**
 * Sets a raw response body. Does not append any `Content-Type` headers.
 * @example
 * res(ctx.body('Successful response'))
 * res(ctx.body(JSON.stringify({ key: 'value' })))
 * @see {@link https://mswjs.io/docs/api/context/body `ctx.body()`}
 */
declare const body: <BodyType extends string | Blob | BufferSource | FormData | ReadableStream<any>>(value: BodyType) => ResponseTransformer<BodyType, any>;

/**
 * Sets a given payload as a GraphQL response body.
 * @example
 * res(ctx.data({ user: { firstName: 'John' }}))
 * @see {@link https://mswjs.io/docs/api/context/data `ctx.data()`}
 */
declare const data: GraphQLPayloadContext<Record<string, unknown>>;

/**
 * Sets the GraphQL extensions on a given response.
 * @example
 * res(ctx.extensions({ tracing: { version: 1 }}))
 * @see {@link https://mswjs.io/docs/api/context/extensions `ctx.extensions()`}
 */
declare const extensions: GraphQLPayloadContext<Record<string, unknown>>;

/**
 * Sets a given list of GraphQL errors on the mocked response.
 * @example res(ctx.errors([{ message: 'Unauthorized' }]))
 * @see {@link https://mswjs.io/docs/api/context/errors}
 */
declare const errors: <ErrorsType extends readonly Partial<GraphQLError>[] | null | undefined>(errorsList: ErrorsType) => ResponseTransformer<string>;

/**
 * Sets the given value as the JSON body of the response.
 * Appends a `Content-Type: application/json` header on the
 * mocked response.
 * @example
 * res(ctx.json('Some string'))
 * res(ctx.json({ key: 'value' }))
 * res(ctx.json([1, '2', false, { ok: true }]))
 * @see {@link https://mswjs.io/docs/api/context/json `ctx.json()`}
 */
declare const json: <BodyTypeJSON>(body: BodyTypeJSON) => ResponseTransformer<BodyTypeJSON, any>;

/**
 * Sets a textual response body. Appends a `Content-Type: text/plain`
 * header on the mocked response.
 * @example res(ctx.text('Successful response'))
 * @see {@link https://mswjs.io/docs/api/context/text `ctx.text()`}
 */
declare const text: <BodyType extends string>(body: BodyType) => ResponseTransformer<BodyType, any>;

/**
 * Sets an XML response body. Appends a `Content-Type: text/xml` header
 * on the mocked response.
 * @example
 * res(ctx.xml('<node key="value">Content</node>'))
 * @see {@link https://mswjs.io/docs/api/context/xml `ctx.xml()`}
 */
declare const xml: <BodyType extends string>(body: BodyType) => ResponseTransformer<BodyType, any>;

declare const index_status: typeof status;
declare const index_set: typeof set;
declare const index_cookie: typeof cookie;
declare const index_body: typeof body;
declare const index_data: typeof data;
declare const index_extensions: typeof extensions;
declare const index_delay: typeof delay;
declare const index_errors: typeof errors;
declare const index_fetch: typeof fetch;
declare const index_json: typeof json;
declare const index_text: typeof text;
declare const index_xml: typeof xml;
declare namespace index {
  export {
    index_status as status,
    index_set as set,
    index_cookie as cookie,
    index_body as body,
    index_data as data,
    index_extensions as extensions,
    index_delay as delay,
    index_errors as errors,
    index_fetch as fetch,
    index_json as json,
    index_text as text,
    index_xml as xml,
  };
}

/**
 * Creates a new mock Service Worker registration
 * with the given request handlers.
 * @param {RequestHandler[]} requestHandlers List of request handlers
 * @see {@link https://mswjs.io/docs/api/setup-worker `setupWorker`}
 */
declare function setupWorker(...requestHandlers: RequestHandler[]): SetupWorkerApi;

declare type RestHandlerMethod = string | RegExp;
interface RestHandlerInfo extends RequestHandlerDefaultInfo {
    method: RestHandlerMethod;
    path: Path;
}
declare enum RESTMethods {
    HEAD = "HEAD",
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    DELETE = "DELETE"
}
declare type RestContext = DefaultContext & {
    cookie: typeof cookie;
    text: typeof text;
    body: typeof body;
    json: typeof json;
    xml: typeof xml;
};
declare const restContext: RestContext;
declare type RequestQuery = {
    [queryName: string]: string;
};
interface RestRequest<BodyType extends DefaultBodyType = DefaultBodyType, ParamsType extends PathParams = PathParams> extends MockedRequest<BodyType> {
    params: ParamsType;
}
declare type ParsedRestRequest = Match;
/**
 * Request handler for REST API requests.
 * Provides request matching based on method and URL.
 */
declare class RestHandler<RequestType extends MockedRequest<DefaultBodyType> = MockedRequest<DefaultBodyType>> extends RequestHandler<RestHandlerInfo, RequestType, ParsedRestRequest, RestRequest<RequestType extends MockedRequest<infer RequestBodyType> ? RequestBodyType : any, PathParams>> {
    constructor(method: RestHandlerMethod, path: Path, resolver: ResponseResolver<any, any>);
    private checkRedundantQueryParameters;
    parse(request: RequestType, resolutionContext?: ResponseResolutionContext): Match;
    protected getPublicRequest(request: RequestType, parsedResult: ParsedRestRequest): RestRequest<any, PathParams>;
    predicate(request: RequestType, parsedResult: ParsedRestRequest): boolean;
    log(request: RequestType, response: SerializedResponse): void;
}

declare const rest: {
    all: <RequestBodyType extends DefaultBodyType = DefaultBodyType, Params extends PathParams<keyof Params> = PathParams<string>, ResponseBody extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType, Params>, RestContext, ResponseBody>) => RestHandler<MockedRequest<DefaultBodyType>>;
    head: <RequestBodyType_1 extends DefaultBodyType = DefaultBodyType, Params_1 extends PathParams<keyof Params_1> = PathParams<string>, ResponseBody_1 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<never, Params_1>, RestContext, ResponseBody_1>) => RestHandler<MockedRequest<DefaultBodyType>>;
    get: <RequestBodyType_2 extends DefaultBodyType = DefaultBodyType, Params_2 extends PathParams<keyof Params_2> = PathParams<string>, ResponseBody_2 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<never, Params_2>, RestContext, ResponseBody_2>) => RestHandler<MockedRequest<DefaultBodyType>>;
    post: <RequestBodyType_3 extends DefaultBodyType = DefaultBodyType, Params_3 extends PathParams<keyof Params_3> = PathParams<string>, ResponseBody_3 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType_3, Params_3>, RestContext, ResponseBody_3>) => RestHandler<MockedRequest<DefaultBodyType>>;
    put: <RequestBodyType_4 extends DefaultBodyType = DefaultBodyType, Params_4 extends PathParams<keyof Params_4> = PathParams<string>, ResponseBody_4 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType_4, Params_4>, RestContext, ResponseBody_4>) => RestHandler<MockedRequest<DefaultBodyType>>;
    delete: <RequestBodyType_5 extends DefaultBodyType = DefaultBodyType, Params_5 extends PathParams<keyof Params_5> = PathParams<string>, ResponseBody_5 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType_5, Params_5>, RestContext, ResponseBody_5>) => RestHandler<MockedRequest<DefaultBodyType>>;
    patch: <RequestBodyType_6 extends DefaultBodyType = DefaultBodyType, Params_6 extends PathParams<keyof Params_6> = PathParams<string>, ResponseBody_6 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType_6, Params_6>, RestContext, ResponseBody_6>) => RestHandler<MockedRequest<DefaultBodyType>>;
    options: <RequestBodyType_7 extends DefaultBodyType = DefaultBodyType, Params_7 extends PathParams<keyof Params_7> = PathParams<string>, ResponseBody_7 extends DefaultBodyType = DefaultBodyType>(path: Path, resolver: ResponseResolver<RestRequest<RequestBodyType_7, Params_7>, RestContext, ResponseBody_7>) => RestHandler<MockedRequest<DefaultBodyType>>;
};

declare type ForbiddenFieldNames = '' | 'data' | 'errors' | 'extensions';
/**
 * Set a custom field on the GraphQL mocked response.
 * @example res(ctx.fields('customField', value))
 * @see {@link https://mswjs.io/docs/api/context/field}
 */
declare const field: <FieldNameType extends string, FieldValueType>(fieldName: FieldNameType extends ForbiddenFieldNames ? never : FieldNameType, fieldValue: FieldValueType) => ResponseTransformer<string>;

interface ParsedGraphQLQuery {
    operationType: OperationTypeNode;
    operationName?: string;
}
declare type ParsedGraphQLRequest<VariablesType extends GraphQLVariables = GraphQLVariables> = (ParsedGraphQLQuery & {
    variables?: VariablesType;
}) | undefined;
declare type GraphQLMultipartRequestBody = {
    operations: string;
    map?: string;
} & {
    [fileName: string]: File;
};

declare type ExpectedOperationTypeNode = OperationTypeNode | 'all';
declare type GraphQLHandlerNameSelector = DocumentNode | RegExp | string;
declare type GraphQLContext<QueryType extends Record<string, unknown>> = DefaultContext & {
    data: GraphQLPayloadContext<QueryType>;
    extensions: GraphQLPayloadContext<QueryType>;
    errors: typeof errors;
    cookie: typeof cookie;
    field: typeof field;
};
declare const graphqlContext: GraphQLContext<any>;
declare type GraphQLVariables = Record<string, any>;
interface GraphQLHandlerInfo extends RequestHandlerDefaultInfo {
    operationType: ExpectedOperationTypeNode;
    operationName: GraphQLHandlerNameSelector;
}
declare type GraphQLRequestBody<VariablesType extends GraphQLVariables> = GraphQLJsonRequestBody<VariablesType> | GraphQLMultipartRequestBody | Record<string, any> | undefined;
interface GraphQLJsonRequestBody<Variables extends GraphQLVariables> {
    query: string;
    variables?: Variables;
}
interface GraphQLRequest<Variables extends GraphQLVariables> extends MockedRequest<GraphQLRequestBody<Variables>> {
    variables: Variables;
}
declare class GraphQLHandler<Request extends GraphQLRequest<any> = GraphQLRequest<any>> extends RequestHandler<GraphQLHandlerInfo, Request, ParsedGraphQLRequest | null, GraphQLRequest<any>> {
    private endpoint;
    constructor(operationType: ExpectedOperationTypeNode, operationName: GraphQLHandlerNameSelector, endpoint: Path, resolver: ResponseResolver<any, any>);
    parse(request: MockedRequest): ParsedGraphQLRequest<GraphQLVariables>;
    protected getPublicRequest(request: Request, parsedResult: ParsedGraphQLRequest): GraphQLRequest<any>;
    predicate(request: MockedRequest, parsedResult: ParsedGraphQLRequest): boolean;
    log(request: Request, response: SerializedResponse, handler: this, parsedRequest: ParsedGraphQLRequest): void;
}

interface TypedDocumentNode<Result = {
    [key: string]: any;
}, Variables = {
    [key: string]: any;
}> extends DocumentNode {
    __apiType?: (variables: Variables) => Result;
    __resultType?: Result;
    __variablesType?: Variables;
}
declare const standardGraphQLHandlers: {
    /**
     * Captures any GraphQL operation, regardless of its name, under the current scope.
     * @example
     * graphql.operation((req, res, ctx) => {
     *   return res(ctx.data({ name: 'John' }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/operation `graphql.operation()`}
     */
    operation: <Query extends Record<string, any>, Variables extends GraphQLVariables = GraphQLVariables>(resolver: ResponseResolver<GraphQLRequest<Variables>, GraphQLContext<Query>, any>) => GraphQLHandler<GraphQLRequest<Variables>>;
    /**
     * Captures a GraphQL query by a given name.
     * @example
     * graphql.query('GetUser', (req, res, ctx) => {
     *   return res(ctx.data({ user: { name: 'John' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/query `graphql.query()`}
     */
    query: <Query_1 extends Record<string, any>, Variables_1 extends GraphQLVariables = GraphQLVariables>(operationName: GraphQLHandlerNameSelector | TypedDocumentNode<Query_1, Variables_1>, resolver: ResponseResolver<GraphQLRequest<Variables_1>, GraphQLContext<Query_1>, any>) => GraphQLHandler<GraphQLRequest<Variables_1>>;
    /**
     * Captures a GraphQL mutation by a given name.
     * @example
     * graphql.mutation('SavePost', (req, res, ctx) => {
     *   return res(ctx.data({ post: { id: 'abc-123' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/mutation `graphql.mutation()`}
     */
    mutation: <Query_1 extends Record<string, any>, Variables_1 extends GraphQLVariables = GraphQLVariables>(operationName: GraphQLHandlerNameSelector | TypedDocumentNode<Query_1, Variables_1>, resolver: ResponseResolver<GraphQLRequest<Variables_1>, GraphQLContext<Query_1>, any>) => GraphQLHandler<GraphQLRequest<Variables_1>>;
};
declare function createGraphQLLink(url: Path): typeof standardGraphQLHandlers;
declare const graphql: {
    link: typeof createGraphQLLink;
    /**
     * Captures any GraphQL operation, regardless of its name, under the current scope.
     * @example
     * graphql.operation((req, res, ctx) => {
     *   return res(ctx.data({ name: 'John' }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/operation `graphql.operation()`}
     */
    operation: <Query extends Record<string, any>, Variables extends GraphQLVariables = GraphQLVariables>(resolver: ResponseResolver<GraphQLRequest<Variables>, GraphQLContext<Query>, any>) => GraphQLHandler<GraphQLRequest<Variables>>;
    /**
     * Captures a GraphQL query by a given name.
     * @example
     * graphql.query('GetUser', (req, res, ctx) => {
     *   return res(ctx.data({ user: { name: 'John' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/query `graphql.query()`}
     */
    query: <Query_1 extends Record<string, any>, Variables_1 extends GraphQLVariables = GraphQLVariables>(operationName: GraphQLHandlerNameSelector | TypedDocumentNode<Query_1, Variables_1>, resolver: ResponseResolver<GraphQLRequest<Variables_1>, GraphQLContext<Query_1>, any>) => GraphQLHandler<GraphQLRequest<Variables_1>>;
    /**
     * Captures a GraphQL mutation by a given name.
     * @example
     * graphql.mutation('SavePost', (req, res, ctx) => {
     *   return res(ctx.data({ post: { id: 'abc-123' } }))
     * })
     * @see {@link https://mswjs.io/docs/api/graphql/mutation `graphql.mutation()`}
     */
    mutation: <Query_1 extends Record<string, any>, Variables_1 extends GraphQLVariables = GraphQLVariables>(operationName: GraphQLHandlerNameSelector | TypedDocumentNode<Query_1, Variables_1>, resolver: ResponseResolver<GraphQLRequest<Variables_1>, GraphQLContext<Query_1>, any>) => GraphQLHandler<GraphQLRequest<Variables_1>>;
};

declare type ArityOneFunction = (arg: any) => any;
declare type LengthOfTuple<Tuple extends any[]> = Tuple extends {
    length: infer L;
} ? L : never;
declare type DropFirstInTuple<Tuple extends any[]> = ((...args: Tuple) => any) extends (arg: any, ...rest: infer LastArg) => any ? LastArg : Tuple;
declare type LastInTuple<Tuple extends any[]> = Tuple[LengthOfTuple<DropFirstInTuple<Tuple>>];
declare type FirstFnParameterType<Functions extends ArityOneFunction[]> = Parameters<LastInTuple<Functions>>[any];
declare type LastFnParameterType<Functions extends ArityOneFunction[]> = ReturnType<Functions[0]>;
/**
 * Composes a given list of functions into a new function that
 * executes from right to left.
 */
declare function compose<Functions extends ArityOneFunction[], LeftReturnType extends FirstFnParameterType<Functions>, RightReturnType extends LastFnParameterType<Functions>>(...fns: Functions): (...args: [LeftReturnType] extends [never] ? never[] : [LeftReturnType]) => RightReturnType;

interface HandleRequestOptions<ResponseType> {
    /**
     * Options for the response resolution process.
     */
    resolutionContext?: {
        baseUrl?: string;
    };
    /**
     * Transforms a `MockedResponse` instance returned from a handler
     * to a response instance supported by the lower tooling (i.e. interceptors).
     */
    transformResponse?(response: MockedResponse<string>): ResponseType;
    /**
     * Invoked whenever a request is performed as-is.
     */
    onPassthroughResponse?(request: MockedRequest): void;
    /**
     * Invoked when the mocked response is ready to be sent.
     */
    onMockedResponse?(response: ResponseType, handler: RequiredDeep<ResponseLookupResult>): void;
    /**
     * Invoked when the mocked response is sent.
     * Respects the response delay duration.
     */
    onMockedResponseSent?(response: ResponseType, handler: RequiredDeep<ResponseLookupResult>): void;
}
declare function handleRequest<ResponseType extends Record<string, any> = MockedResponse<string>>(request: MockedRequest, handlers: RequestHandler[], options: RequiredDeep<SharedOptions>, emitter: StrictEventEmitter<ServerLifecycleEventsMap>, handleRequestOptions?: HandleRequestOptions<ResponseType>): Promise<ResponseType | undefined>;

/**
 * Converts a given isomorphic request to a `MockedRequest` instance.
 */
declare function parseIsomorphicRequest(request: IsomorphicRequest): MockedRequest;

/**
 * Removes query parameters and hashes from a given URL string.
 */
declare function cleanUrl(path: string): string;

export { GraphQLContext, GraphQLHandler, GraphQLJsonRequestBody, GraphQLRequest, GraphQLRequestBody, GraphQLVariables, HandleRequestOptions, Match, ParsedGraphQLRequest, ParsedRestRequest, Path, PathParams, RESTMethods, RequestQuery, RestContext, RestHandler, RestRequest, cleanUrl, compose, index as context, graphql, graphqlContext, handleRequest, matchRequestUrl, parseIsomorphicRequest, rest, restContext, setupWorker };

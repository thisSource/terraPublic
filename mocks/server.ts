import { rest } from "msw";
import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { expect } from "@jest/globals";
export const server = setupServer(...handlers);

type HttpMethods = keyof typeof rest;
type ToReturn = {
  body?: Record<any, any> | string;
  headers?: Record<string, any>;
  status?: number;
};
type WithPayload = {
  body?: Record<any, any> | string;
  headers?: Record<string, any>;
};

export const runTimeHandlers: any[] = [];
export const stubRequest = (method: HttpMethods, url: string | URL) => {
  let returnData: ToReturn;
  let mock = jest.fn();
  const path = typeof url === "string" ? url : url.toString();

  const defaultResponse = (_, res, ctx) => {
    mock();
    return res(ctx.json(null));
  };

  const handler = () => {
    let resolver = defaultResponse;
    if (returnData) {
      resolver = (_, res, ctx) => {
        mock();
        return res(
          ctx.status(returnData.status ?? 200),
          ctx.json(returnData.body ?? null)
        );
      };
    }
    return rest[method](path, resolver);
  };
  return {
    with(payload: WithPayload) {
      // todo: should we remove all events before adding a new one,
      // could also be done in server.beforeEach
      server.events.on("request:match", (request) => {
        if (payload.headers) {
          expect(request.headers.raw()).toMatchObject(payload.headers);
        }

        if (payload?.body) {
          expect(request.body).toContain(payload.body);
        }
      });
      return this;
    },
    toReturn(data: ToReturn) {
      returnData = data;
      return this;
    },
    use() {
      server.use(handler());
      return mock;
    },
  };
};

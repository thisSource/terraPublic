import "next"; // polyfills fetch via next
import config from "../../config";

type TinkInit = {
  baseUrl: string | URL;
};

interface RequestOptions extends Omit<RequestInit, "body"> {
  body: Record<any, any> | typeof URLSearchParams | ReadableStream;
}

interface Options extends Pick<RequestOptions, "headers"> {
  body: RequestOptions["body"] | Record<any, any>;
}

export class HttpError extends Error {
  code: number;
  constructor(code: number, statusText: string) {
    super(statusText);
    this.code = code;
  }
}
export class ServerError extends HttpError {}
export class ClientError extends HttpError {}

function transformRequestData(data: any) {
  if (data instanceof URLSearchParams) {
    return data;
  }
  return JSON.stringify(data);
}

export default class TinkClient {
  baseUrl?: TinkInit["baseUrl"];
  static client = TinkClient.instance();
  static instance(): TinkClient {
    if (TinkClient.client) {
      return TinkClient.client;
    } else {
      TinkClient.client = new TinkClient();
      return TinkClient.client;
    }
  }

  constructor(init?: TinkInit) {
    this.baseUrl = init?.baseUrl ?? config.tink.apiBaseUrl;
  }

  async get(path: string, options?: Pick<RequestOptions, "headers">) {
    const request = new Request(new URL(path, this.baseUrl).toString(), {
      method: "GET",
      ...options,
    });
    if (options?.headers) {
      for (const [header, value] of Object.entries(options.headers)) {
        request.headers.set(header, value);
      }
    }
    return await this.makeRequest(request);
  }

  async post(path: string, options?: Options) {
    const request = new Request(new URL(path, this.baseUrl).toString(), {
      method: "POST",
      body: transformRequestData(options?.body),
    });

    if (options?.headers) {
      for (const [header, value] of Object.entries(options.headers)) {
        request.headers.set(header, value);
      }
    }
    return await this.makeRequest(request);
  }

  private async makeRequest(request: Request) {
    const response = await fetch(request);

    if (!response.ok) {
      const status = response.status;
      switch (true) {
        case status >= 400 && status < 499: {
          throw new ClientError(status, response.statusText);
        }
        case status >= 500: {
          throw new ServerError(status, response.statusText);
        }
        default: {
          throw new HttpError(status, response.statusText);
        }
      }
    }
    return await response.json();
  }
}

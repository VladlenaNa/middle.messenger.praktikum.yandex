enum Methods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

type Options = {
    method?: Methods;
    data?: any;
    headers?: any;
    timeout: number;
};

type Request = Record<string, string | number>;

type HTTPMethodData = (url: string, options: Options) => Promise<any>

function queryStringify(data: Request) {
    if (!data) {
        return "";
    }
    return Object.entries(data).reduce(
        (acc, [key, value], index, arr) =>
            `${acc}${key}=${value}${index < arr.length - 1 ? "&" : ""}`,
        "?"
    );
}

export class HTTPTransport {
    get: HTTPMethodData = (url, options) => {
        return this.request(url, {...options, method: Methods.GET}, options.timeout);
    };

    put: HTTPMethodData = (url, options) => {
        return this.request(url, {...options, method: Methods.PUT}, options.timeout);
    };

    post: HTTPMethodData = (url, options: Options) => {
        return this.request(url, {...options, method: Methods.POST}, options.timeout);
    };

    delete: HTTPMethodData = (url, options) => {
        return this.request(url, {...options, method: Methods.DELETE}, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000) => {
        const {
            method = Methods.GET,
            headers = {},
            data
        } = options;

        if (method === Methods.GET ) {
            url += queryStringify(data);
        }


        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);

            Object.keys(headers).forEach((key: string) => xhr.setRequestHeader(key, headers[key]));

            xhr.onload = () => (xhr.status >= 300 ? reject(xhr) : resolve(xhr));

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;
        
            method === Methods.GET || !data ? xhr.send() : xhr.send(JSON.stringify(data));
        });
    };
}

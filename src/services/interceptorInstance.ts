export interface IFetchInterceptorInstance {
    path: string,
    query?: string | Record<string, string>;
    header?: Record<string, string>;
    options?: RequestInit
}

export const fetchInterceptorInstance = async ({ path, query, header, options }: IFetchInterceptorInstance): Promise<any> => {
    try {
        const _options = options || {};
        const url = new URL(path, process.env.NEXT_PUBLIC_API_URL);

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        if (header) {
            for (const [key, value] of Object.entries(header)) {
                headers.set(key, value);
            }
        }

        _options.headers = headers;

        if (typeof query === 'object') {
            url.search = new URLSearchParams(query).toString();
        }
        else if (typeof query === 'string') {
            url.search = query;
        }

        const response: any = await fetch(url, _options);

        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(response);
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export default fetchInterceptorInstance;
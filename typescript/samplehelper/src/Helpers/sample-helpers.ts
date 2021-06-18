export class SampleHelper {
    static hello() : string {
        return "Hello";
    }

    static world() : string {
        return "World";
    }

    static async postRequest<T>(Url: string, Data?: any): Promise<T> {
        const response = await fetch(Url, {
            method: "POST",
            mode: 'cors',
            cache: "no-cache",
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: (Data ? JSON.stringify(Data) : "")
        });
        return await response.json();
    }

    static async getRequest<T>(Url: string, Data?: Dictionary<string, string>): Promise<T> {
        // untested
        let UrlWithParams = Url;
        if(Data) {
            const Params = Array<string>();
              for(var key in Data)
                 Params.push(encodeURIComponent(key) + "=" + encodeURIComponent(Data[key]));
              UrlWithParams += "?"+ Params.join("&");
        }
        const response = await fetch(Url, {
            method: "GET",
            mode: 'cors',
            cache: "no-cache",
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: (Data ? JSON.stringify(Data) : "")
        });
        return await response.json();
    }
}

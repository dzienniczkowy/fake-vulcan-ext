import {decodeResponse, encodeResponse, endpoints} from "./utils";

function onRequest(request: { requestId: string, url: string }) {
    const filter = browser.webRequest.filterResponseData(request.requestId);
    let responseString = "";

    filter.ondata = (event) => {
        responseString += decodeResponse(event.data);
    };

    filter.onstop = async () => {
        let response = JSON.parse(responseString);

        const endpoint = endpoints.find(endpoint => request.url.endsWith(endpoint));

        if (endpoint) {
            const r = await fetch("https://uonetplus-uczen.fakelog.cf/Default/123456/" + endpoint);
            response = await r.json();
        }

        filter.write(encodeResponse(JSON.stringify(response)));
        filter.disconnect();
    };
}

browser.webRequest.onBeforeRequest.addListener(
    onRequest,
    {
        urls: [
            "*://uonetplus-uczen.vulcan.net.pl/*",
            "*://uonetplus-uczen.eszkola.opolskie.pl/*",
            "*://uonetplus-uczen.edu.gdansk.pl/*",
            "*://uonetplus-uczen.umt.tarnow.pl/*",
            "*://uonetplus-uczen.resman.pl/*"
        ]
    },
    ["blocking"],
);

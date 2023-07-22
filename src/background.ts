import {encodeResponse, endpoints} from "./utils";

function onRequest(request: { requestId: string, url: string }) {
    const endpoint = endpoints.find(endpoint => request.url.endsWith(endpoint));

    if (endpoint) {
        const filter = browser.webRequest.filterResponseData(request.requestId);

        filter.onstop = async () => {
            const r = await fetch("https://uonetplus-uczen.fakelog.cf/powiatwulkanowy/123456/" + endpoint);
            const j = await r.json();
            filter.write(encodeResponse(JSON.stringify(j)));
            filter.disconnect();
        };
    }

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

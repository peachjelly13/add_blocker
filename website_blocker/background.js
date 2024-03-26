chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true};
    },
    {urls: [
        "*://*.instagram.com/*",
        "*://*.facebook.com/*",
        "*://*.snapchat.com/*",
        "*://*.twitter.com/*"
    ]},
    ["blocking"]
);

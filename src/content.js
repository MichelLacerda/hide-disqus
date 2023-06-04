chrome.storage.sync.get(["disabled"], (storage) => {
    const disable = storage.disabled || false;

    if (disable) {
        const div = document.querySelector("#disqus_thread");
        const script = [...document.querySelectorAll("script")].find(e => e.src.includes("disqus"));

        div && div.remove();
        script && script.remove();
    }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === "sync") {
        const div = document.querySelector("#disqus_thread");
        const script = [...document.querySelectorAll("script")].find(e => e.src.includes("disqus"));
        div && div.remove();
        script && script.remove();
    }
});
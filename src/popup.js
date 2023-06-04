const checkbox = document.querySelector('[name=disable]');

chrome.storage.sync.get(["disabled"], (storage) => {
    checkbox.checked = storage.disabled || false;
});

checkbox.addEventListener("change", function(evt) {
    chrome.storage.sync.set({ disabled: evt.target.checked }, () => {});
});
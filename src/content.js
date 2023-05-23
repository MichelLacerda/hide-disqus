const div = document.querySelector("#disqus_thread");
div && div.remove();

const script = [...document.querySelectorAll("script")].find(e => e.src.includes("disqus"));
script && script.remove();
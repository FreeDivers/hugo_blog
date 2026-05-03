(function () {
    function mark(img, state) {
        var holder = img.closest(".lazy-image");
        img.classList.add(state);
        if (holder) {
            holder.classList.add(state);
        }
    }

    function watch(img) {
        if (img.complete) {
            mark(img, img.naturalWidth > 0 ? "is-loaded" : "is-error");
            return;
        }

        img.addEventListener("load", function () {
            mark(img, "is-loaded");
        }, { once: true });

        img.addEventListener("error", function () {
            mark(img, "is-error");
        }, { once: true });
    }

    var images = document.querySelectorAll(".lazy-image > img, .post-content img[loading='lazy']:not(.in-text)");
    for (var i = 0; i < images.length; i += 1) {
        watch(images[i]);
    }
})();

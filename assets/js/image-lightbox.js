(function () {
    var imageExt = /\.(avif|bmp|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i;
    var box, image, caption;

    function init() {
        if (box) {
            return;
        }

        box = document.createElement("dialog");
        box.className = "image-lightbox";
        box.innerHTML = '<button type="button" aria-label="Close image">&times;</button><img alt=""><p hidden></p>';
        document.body.appendChild(box);

        image = box.querySelector("img");
        caption = box.querySelector("p");

        box.querySelector("button").addEventListener("click", function () {
            box.close();
        });
        image.addEventListener("click", function () {
            box.close();
        });
        box.addEventListener("click", function (event) {
            if (event.target === box) {
                box.close();
            }
        });
        box.addEventListener("close", function () {
            image.removeAttribute("src");
        });
    }

    function cleanUrl(url) {
        if (!url) {
            return "";
        }

        try {
            var parsed = new URL(url, location.href);
            parsed.hash = "";
            return parsed.href;
        } catch (error) {
            return url.split("#")[0];
        }
    }

    function getTargetUrl(img) {
        var src = img.currentSrc || img.src || img.getAttribute("src") || "";
        var link = img.closest("a");

        if (!link || link.matches("[data-no-lightbox]")) {
            return src;
        }

        var href = link.getAttribute("href") || "";
        if (href && href.charAt(0) !== "#" && (imageExt.test(link.href) || cleanUrl(link.href) === cleanUrl(src))) {
            return link.href;
        }

        return "";
    }

    function getCaption(img) {
        return (img.closest("figure") && img.closest("figure").querySelector("figcaption")
            ? img.closest("figure").querySelector("figcaption").textContent
            : img.alt || img.title || "").trim();
    }

    document.addEventListener("click", function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            return;
        }

        var target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        var img = target.closest(".post-content img:not(.in-text):not([data-no-lightbox])");
        if (!img || img.matches(".in-text, [data-no-lightbox]") || img.closest("[data-no-lightbox]")) {
            return;
        }

        var imageUrl = getTargetUrl(img);
        if (!imageUrl) {
            return;
        }

        event.preventDefault();
        init();

        var captionText = getCaption(img);
        image.src = imageUrl;
        image.alt = captionText;
        caption.textContent = captionText;
        caption.hidden = !captionText;
        box.showModal();
    });
})();

/**
 * Diva Glow Salon — page scripts
 * Beginner-friendly: one section per feature
 */

(function () {
    "use strict";

    // ----- Footer year -----
    var yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ----- Gallery: beauty & salon themed photos (Unsplash) -----
    // Each entry: image URL + short description for alt text (accessibility)
    var salonGalleryPhotos = [
        {
            url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
            alt: "Hair styling and blow-dry at a beauty salon",
        },
        {
            url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
            alt: "Hairdresser cutting hair in a salon",
        },
        {
            url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
            alt: "Manicure and nail care at a nail studio",
        },
        {
            url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
            alt: "Makeup brushes and cosmetics for a professional look",
        },
        {
            url: "https://images.unsplash.com/photo-1585747860715-2ba37ea788ed?auto=format&fit=crop&w=900&q=80",
            alt: "Salon interior with styling chairs and mirrors",
        },
        {
            url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80",
            alt: "Beauty and skincare treatment in a calm spa setting",
        },
    ];

    function buildGallery() {
        var grid = document.getElementById("galleryGrid");
        if (!grid) {
            return;
        }

        // 1 col (xs) → 2 cols (sm+) → 3 cols (lg+)
        var colClass = "col-12 col-sm-6 col-lg-4";

        for (var i = 0; i < salonGalleryPhotos.length; i++) {
            var photo = salonGalleryPhotos[i];
            var col = document.createElement("div");
            col.className = colClass;

            var wrap = document.createElement("div");
            wrap.className = "gallery-item";

            var img = document.createElement("img");
            img.src = photo.url;
            img.alt = photo.alt;
            img.loading = "lazy";
            img.decoding = "async";

            wrap.appendChild(img);
            col.appendChild(wrap);
            grid.appendChild(col);
        }
    }

    // ----- Form: show alert + optional console log -----
    function handleBooking(event) {
        event.preventDefault();
        var name = document.getElementById("bookName").value.trim();
        var phone = document.getElementById("bookPhone").value.trim();
        var service = document.getElementById("bookService").value;

        var message =
            "Booking request received!\n\n" +
            "Name: " +
            name +
            "\n" +
            "Phone: " +
            phone +
            "\n" +
            "Service: " +
            service;

        window.alert(message);
    }

    function handleLogin(event) {
        event.preventDefault();
        var email = document.getElementById("loginEmail").value.trim();
        window.alert("Login submitted for:\n" + email + "\n\n(This is a demo — no real login is performed.)");
    }

    function handleSignup(event) {
        event.preventDefault();
        var email = document.getElementById("signupEmail").value.trim();
        window.alert("Sign up submitted for:\n" + email + "\n\n(This is a demo — no account is created.)");
    }

    function attachFormListeners() {
        var bookingForm = document.getElementById("bookingForm");
        var loginForm = document.getElementById("loginForm");
        var signupForm = document.getElementById("signupForm");

        if (bookingForm) {
            bookingForm.addEventListener("submit", handleBooking);
        }
        if (loginForm) {
            loginForm.addEventListener("submit", handleLogin);
        }
        if (signupForm) {
            signupForm.addEventListener("submit", handleSignup);
        }
    }

    // ----- Run when page is ready -----
    // ScrollSpy uses data-bs-spy on body (see index.html)
    function init() {
        buildGallery();
        attachFormListeners();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

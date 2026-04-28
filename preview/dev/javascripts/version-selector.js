document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname;

    var topic = document.querySelector(".md-header__topic");
    var match = path.match(/^(.*?)\/[0-9]\.[0-9]{2}\//);

    if (topic && match) {
        var deployPrefix = match[1];

        fetch(deployPrefix + "/versions.json")
            .then(function (r) { return r.json(); })
            .then(function (sections) { populate(sections, deployPrefix); })
            .then(adjustScrollMargin)
            .catch(adjustScrollMargin);
    } else {
        adjustScrollMargin();
    }

    function populate(sections, deployPrefix) {
        // Detect current version and section from URL
        var currentVersion = null;
        var currentSection = null;
        var restOfPath = null;

        var sectionNames = Object.keys(sections);

        for (var i = 0; i < sectionNames.length; i++) {
            var section = sectionNames[i];
            var versions = sections[section];

            for (var j = 0; j < versions.length; j++) {
                var prefix = deployPrefix + "/" + versions[j] + "/" + section + "/";

                if (path.startsWith(prefix)) {
                    currentVersion = versions[j];
                    currentSection = section;
                    restOfPath = path.slice(prefix.length);
                    break;
                }
            }
            if (currentVersion) {
                break;
            }
        }

        // Not on a versioned page
        if (!currentVersion) {
            return;
        }

        var availableVersions = sections[currentSection];

        // Build the version selector and inject it into the header
        var container = document.createElement("div");
        container.className = "md-version";
        container.setAttribute("role", "navigation");
        container.setAttribute("aria-label", "Select version");

        var btn = document.createElement("button");
        btn.className = "md-version__current";
        btn.setAttribute("aria-label", "Select version");
        btn.textContent = currentVersion;
        container.appendChild(btn);

        var list = document.createElement("ul");
        list.className = "md-version__list";

        for (var i = 0; i < availableVersions.length; i++) {
            var v = availableVersions[i];
            var li = document.createElement("li");
            li.className = "md-version__item";

            var a = document.createElement("a");
            a.className = "md-version__link";
            a.textContent = v;
            a.href = deployPrefix + "/" + v + "/" + currentSection + "/" + restOfPath;

            if (v === currentVersion) {
                a.setAttribute("aria-current", "page");
            }

            li.appendChild(a);
            list.appendChild(li);
        }

        container.appendChild(list);
        topic.appendChild(container);

        // Show outdated banner if not on the latest version
        var latestVersion = availableVersions[0];

        if (currentVersion !== latestVersion) {
            var banner = document.createElement("div");
            banner.setAttribute("data-md-color-scheme", "default");

            var aside = document.createElement("aside");
            aside.className = "md-banner md-banner--warning";

            var inner = document.createElement("div");
            inner.className = "md-banner__inner md-grid md-typeset";
            inner.innerHTML =
                "You're viewing an outdated version of this document. " +
                '<a href="' + deployPrefix + "/" + latestVersion + "/" + currentSection + "/" + restOfPath + '">' +
                "<strong>Click here to go to the latest version.</strong></a>";

            aside.appendChild(inner);
            banner.appendChild(aside);

            var header = document.querySelector(".md-header");
            header.parentNode.insertBefore(banner, header);
        }
    }

    // Bump --md-scroll-margin to account for any banners above the header
    function adjustScrollMargin() {
        var extra = 0;

        var devBanner = document.querySelector(".dev-site:not([hidden])");
        if (devBanner) {
            extra += devBanner.offsetHeight;
        }

        var versionBanner = document.querySelector(".md-banner--warning");
        if (versionBanner) {
            extra += versionBanner.offsetHeight;
        }

        if (extra > 0) {
          var current = getComputedStyle(document.documentElement)
            .getPropertyValue("--md-scroll-margin");

          var base = parseFloat(current) || 0;

          document.documentElement.style.setProperty(
              "--md-scroll-margin", (base + extra) + "px"
          );
        }
    }
});

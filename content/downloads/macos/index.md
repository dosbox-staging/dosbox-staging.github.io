+++
title = "macOS bundles"
template = "download.html"
+++

TODO **The latest stable version: [dosbox-staging 0.75.0-rc1](/)**

Compatible only with macOS 10.15 (Catalina); if you want to run it on an
older macOS, [build dosbox-staging yourself straight from the source][1]
(send us patches if you'll end up improving something!) :)

*macOS will prevent you from running dosbox-staging via Gatekeeper feature;
see [the section below](#apple-gatekeeper) to learn how to fix it.*

[1]:https://github.com/dosbox-staging/dosbox-staging.

### Development snapshot builds

You can always check what's cooking on the master branch :)

These builds might be slow or unstable, they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds)


### Older builds

There are no stable builds yet.


### <a name="apple-gatekeeper"></a> Apple Gatekeeper

Starting with macOS 10.12 (Sierra), Apple turned on "Gatekeeper" feature, which
disrupts user ability to run new (as in: newly developed) and independent
software.

Whitelisting app bundle requires paying Apple around hundred dollars
per year for Developer ID account to sign the bundle.

As a small, open source, Free software project, we don't have ability to pay
for whitelisting (we rely on GitHub CI to build and create a bundle, free of
charge), therefore for now, users need to bypass the check manually.
Use Method 1 or 2:


#### Method 1

Use Linux instead. [Ubuntu](https://ubuntu.com/download/desktop) is an excellent
choice for new users.


#### Method 2

TODO post screenshots

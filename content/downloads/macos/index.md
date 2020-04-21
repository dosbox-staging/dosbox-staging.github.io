+++
title = "macOS bundles"
template = "download.html"
+++

TODO: **RC1 build not released yet**
<!-- **[Download dosbox-staging 0.75.0-rc1](/)** -->

Compatible only with macOS 10.15 (Catalina); if you want to run it on an older
macOS, [build dosbox-staging yourself straight from the source][1] (send us
patches if you improve something!) :)

*Apple's "gatekeeper" feature on macOS will prevent you from running
dosbox-staging; see [the section below](#apple-gatekeeper) to learn how to fix
it.*

[1]:https://github.com/dosbox-staging/dosbox-staging.

### Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers and
testers in mind: [download instructions for snapshot
builds](https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).


### Older builds

There are no stable builds yet.


### <a name="apple-gatekeeper"></a> Apple Gatekeeper

In 2016 Apple added "Gatekeeper" to macOS 10.12, a rent-seeking system meant to
extort yearly payments from developers in exchange for sharing their software
with Apple users via the Apple App Store.

In lieu of paying Apple, the dosbox-staging project uses GitHub's free
integration service to generate macOS release packages. Users can bypass
Apple's Gatekeeper using either of the following methods:

#### Method 1

Use Linux instead. [Ubuntu](https://ubuntu.com/download/desktop) is an excellent
choice for new users.

#### Method 2

The following screenshots depict how to manually approve dosbox-staging in
your security settings:

TODO post screenshots

+++
title = "macOS bundles"
template = "download.html"
+++

**[Download dosbox-staging 0.75.0-rc1 (dmg)](https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-macOS-v0.75.0-rc1.dmg)**

Compatible only with macOS 10.15 (Catalina); if you want to run it on an older
macOS, [build dosbox-staging yourself straight from the source][1] (send us
patches if you improve something!) :)

*macOS uses its Gatekeeper feature to prevent users from running
externally-hosted 3rd party software, such as dosbox-staging. See [the section
below](#apple-gatekeeper) to learn how to fix it.*

[1]:https://github.com/dosbox-staging/dosbox-staging.

### Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers and
testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).

### Older builds

There are no stable builds yet.


### <a name="apple-gatekeeper"></a> Apple Gatekeeper

Apple's Gatekeeper feature only permits the running of notarized software, one
aspect of which involves developers making yearly payments to Apple.

As dosbox-staging is a volunteer effort, we are not in a position to make such
payments and therefore ask users to bypass Apple's Gatekeeper using either of
the following methods:

#### Method 1

Use Linux instead. [Ubuntu](https://ubuntu.com/download/desktop) is an excellent
choice for new users.

#### Method 2

The following screenshots depict how to manually approve dosbox-staging in
your security settings:

TODO post screenshots

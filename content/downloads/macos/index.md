+++
title = "macOS bundles"
template = "download.html"
+++

**[Download dosbox-staging 0.76.0 (dmg)][0_76_0]**
<br/>
<span style="font-size:0.7em">
sha256: TODO
</span>

This bundle is compatible with macOS 10.15 (Catalina) or newer.

*macOS uses its Gatekeeper feature to prevent users from running
externally-hosted 3rd party software, such as dosbox-staging. See [the section
below](#apple-gatekeeper) to learn how to fix it.*

[1]:https://github.com/dosbox-staging/dosbox-staging

### Homebrew

[Homebrew package](https://formulae.brew.sh/formula/dosbox-staging) is compatible
with macOS 10.13 (High Sierra) or newer.

    brew install dosbox-staging


### Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers and
testers in mind: [download instructions for snapshot builds](/downloads/devel/).


### <a name="apple-gatekeeper" href="#apple-gatekeeper">§</a> Apple Gatekeeper

**Ctrl-click** (or right-click) on dosbox-staging app, and select "Open".
This time, Gatekeeper will show "Open" button like this:

![Gatekeeper window](gatekeeper.png)


#### Explanation

Apple's Gatekeeper feature only permits the running of notarized software, one
aspect of which involves developers making yearly payments to Apple.

As dosbox-staging is a volunteer effort, we are not in a position to make such
payments and therefore ask users to bypass Apple's Gatekeeper manually.


### <a name="old-builds" href="#old-builds">§</a> Older builds

* [dosbox-staging 0.75.2 (dmg)][0_75_2] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: 272f01aa8598ecf3229d48680aa6ce6e5b88ebd0645b1f92b899bc0159afcf11
</span>

* [dosbox-staging 0.75.1 (dmg)][0_75_1] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: 2508a87c6aceee63da13e4c76159734e3c9ee4e76fb22a3a7c0d66021e71a4eb
</span>

* [dosbox-staging 0.75.0 (dmg)][0_75_0] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: a0038c7401d239934d25517ca5e8e6006cc3f4cb7060f6ace56609d36bca12ef
</span>

* [dosbox-staging 0.75.0-rc1 (dmg)][0_75_0_rc1] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: 8a5c12d1b6567d6e981acd76e30dec41a73a699963b714f4f1dcf0fc853fc9f6
</span>

[0_76_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-macOS-v0.76.0.dmg
[0_75_2]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.2/dosbox-staging-macOS-v0.75.2.dmg
[0_75_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-macOS-v0.75.1.dmg
[0_75_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0/dosbox-staging-macOS-v0.75.0.dmg
[0_75_0_rc1]:https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-macOS-v0.75.0-rc1.dmg


### Building from source

Of course you can always [build dosbox-staging straight from the source][1].
Send us patches if you improve something! :)

[1]:https://github.com/dosbox-staging/dosbox-staging

+++
title = "macOS bundles"
template = "download.html"
+++

**[Download dosbox-staging 0.77.1 x86-64 (dmg)][0_77_1_x64]**
<br/>
<span style="font-size:0.7em">
sha256: 29964d79f0a85d593f8bafd30da854c726594c12474528f46758fc95c05f0c97
</span>

**[Download dosbox-staging 0.77.1 ARM64 (dmg)][0_77_1_arm64]**
<br/>
<span style="font-size:0.7em">
sha256: 74a1c84bdda0db25091f749ba7a2e5e93f7849baf130817ea1bc182039bd3698
</span>

The x86-64 bundle is compatible with macOS 10.15 (Catalina) or newer and
the arm64 bundle is compatible macOS 11 (Big Sur) or newer.

*macOS uses its Gatekeeper feature to prevent users from running
externally-hosted 3rd party software, such as dosbox-staging. See [the section
below](#apple-gatekeeper) to learn how to fix it.*

[1]:https://github.com/dosbox-staging/dosbox-staging

### Homebrew

[Homebrew package](https://formulae.brew.sh/formula/dosbox-staging) is compatible
with macOS 10.14 (Mojave) or newer.

    brew install dosbox-staging


### Development snapshot builds

You can always see what's cooking on the main branch :)

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

* [dosbox-staging 0.77.0 x86-64 (dmg)][0_77_0_x64] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: 3ca859573814b2c50065825c02d8a04eb6d95605830ec3af21de0d64a2e32314
</span>

* [dosbox-staging 0.77.0 ARM64-testing (dmg)][0_77_0_arm64] (macOS 11 or newer)
<br/>
<span style="font-size:0.7em">
sha256: e2eecb52777d5ed836ba1f772fe669c89e94ea9b67777aced5fef5b51051ccaf
</span>

* [dosbox-staging 0.76.0-3 (dmg)][0_76_0-3] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: f6048fa0e1a33a41f0018cb6d7139c4f7b4a60176bbe6a42f681aa8b5adcb73b
</span>

* [dosbox-staging 0.76.0 (dmg)][0_76_0] (macOS 10.15 or newer)
<br/>
<span style="font-size:0.7em">
sha256: c9fa7b0bf6410f430b47daeb15a470e0105a147b555d3fbf574514406c71f492
</span>

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

[0_77_1_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.1/dosbox-staging-macOS-v0.77.1.dmg
[0_77_1_arm64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.1/dosbox-staging-macOS-arm64-0.77.1.dmg
[0_77_0_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.0/dosbox-staging-macOS-v0.77.0.dmg
[0_77_0_arm64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.0/dosbox-staging-macOS-arm64-0.77.0-testing.dmg
[0_76_0-3]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-macOS-v0.76.0-3-g6525f.dmg
[0_76_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-macOS-v0.76.0.dmg
[0_75_2]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.2/dosbox-staging-macOS-v0.75.2.dmg
[0_75_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-macOS-v0.75.1.dmg
[0_75_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0/dosbox-staging-macOS-v0.75.0.dmg
[0_75_0_rc1]:https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-macOS-v0.75.0-rc1.dmg


### Building from source

Of course you can always [build dosbox-staging straight from the source][1].
Send us patches if you improve something! :)

[1]:https://github.com/dosbox-staging/dosbox-staging

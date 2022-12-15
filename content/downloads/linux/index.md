+++
title = "Linux packages"
template = "download.html"
+++

<span>
<a href='https://flathub.org/apps/details/io.github.dosbox-staging'>
  <img style='float:left; margin-right:1em;' width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png' />
</a>

<a href='https://snapcraft.io/dosbox-staging'>
  <img height='80' alt='Get it from the Snap Store' src='https://snapcraft.io/static/images/badges/en/snap-store-black.svg'/>
</a>
</span>

#### Fedora

    $ sudo dnf install dosbox-staging

#### Gentoo

    # emerge games-emulation/dosbox-staging

#### Ubuntu, Mint

Available via Personal Package Archive
([link](https://launchpad.net/~feignint/+archive/ubuntu/dosbox-staging)):

    $ sudo add-apt-repository ppa:feignint/dosbox-staging
    $ sudo apt-get update
    $ sudo apt install dosbox-staging

#### Arch, Manjaro

Available via Arch User Repository
([link](https://aur.archlinux.org/packages/dosbox-staging)).

*Vote for inclusion in the community repo!*

#### Other repositories

[![Packaging status](https://repology.org/badge/vertical-allrepos/dosbox-staging.svg)](https://repology.org/project/dosbox-staging/versions)

## Tarball download

**[Download DOSBox Staging 0.80.0 (tar.xz)][0_80_0]**
<br/>
<span style="font-size:0.7em">
sha256: 3022bdd405dc1106007c3505e6a5d083de982d516c9bce499e2c4a02a697a1bd
</span>

Our pre-compiled builds run on most Linux distributions (x86\_64 only for now).
They depend on the following packages:

#### Fedora

    sudo dnf install SDL2 SDL2_image SDL2_net opusfile

#### Ubuntu (18.04 or newer) and Debian (9 or newer)

    sudo apt install libsdl2-2.0-0 libsdl2-image-2.0-0 libsdl2-net-2.0-0 libopusfile0

#### Arch, Manjaro

    sudo pacman -S sdl2 sdl2_image sdl2_net opusfile


## <a name="steam"></a> Steam

You can easily configure your DOS games on Steam to use DOSBox Staging via
[Boxtron](https://github.com/dreamer/boxtron) (community-developed
Steam Play compatibility tool for DOS games).

Boxtron will automatically use `dosbox` if found in your PATH or can be
configured to use a specific binary by editing the file
`~/.config/boxtron.conf` and overriding [dosbox.cmd][boxtron-conf]:

    cmd = ~/path-to-dosbox-staging/dosbox

[boxtron-conf]:https://github.com/dreamer/boxtron/wiki/Configuration#dosboxcmd

## Development snapshot builds

You can always see what's cooking on the main branch :)

These builds might be slow or unstable as they are designed with developers and
testers in mind: [download instructions for snapshot builds](/downloads/devel/).


## <a name="old-builds" href="#old-builds">§</a> Older builds

* [DOSBox Staging 0.79.1 (tar.xz)][0_79_1]
<br/>
<span style="font-size:0.7em">
sha256: aebf8619bb44934f18d0e219d50c4e2c03b179c37daa67a9b800e7bd3aefc262
</span>

* [DOSBox Staging 0.79.0 (tar.xz)][0_79_0]
<br/>
<span style="font-size:0.7em">
sha256: 804adb294096ab651490b1664570203f24e460048d7e6e2e388d210a8380016a
</span>

* [DOSBox Staging 0.78.1 (tar.xz)][0_78_1]
<br/>
<span style="font-size:0.7em">
sha256: 8bd2a247ca960f6059276db2b0331f853e16bc8a090722b15f567782542b5fba
</span>

* [DOSBox Staging 0.78.0 (tar.xz)][0_78_0]
<br/>
<span style="font-size:0.7em">
sha256: 085e7cbe350546b3f25b0400c872a2766f9a49d16a5ca8d17a0a93aad6e37709
</span>

* [DOSBox Staging 0.77.1 (tar.xz)][0_77_1]
<br/>
<span style="font-size:0.7em">
sha256: e2d475e4b1f80881ccafc4502b3884c096b51aa2fc2cfe89bb6c2b8ebfb7cc76
</span>

* [DOSBox Staging 0.76.0 (tar.xz)][0_77_0]
<br/>
<span style="font-size:0.7em">
sha256: f8401bcd473d5b664eeb3a90e4dbb4bbf0cef5339adba867f361c00b7de9b2fe
</span>

* [DOSBox Staging 0.76.0 (tar.xz)][0_76_0]
<br/>
<span style="font-size:0.7em">
sha256: b14de58ba0f5dd192398cda58fa439b15512f50d1c88b5ded6f300d4a9212852
</span>

* [DOSBox Staging 0.75.2 (tar.xz)][0_75_2]
<br/>
<span style="font-size:0.7em">
sha256: 0325a1860aea95e8117aa49b041bfd628ab20531a3abc7b0a67aff4c47049465
</span>

* [DOSBox Staging 0.75.1 (tar.xz)][0_75_1]
<br/>
<span style="font-size:0.7em">
sha256: aef22e5ddf93ff826fc2d48a4c8c0b4097d3455525b40be5b3fb443935929c70
</span>

* [DOSBox Staging 0.75.0 (tar.xz)][0_75_0]
<br/>
<span style="font-size:0.7em">
sha256: a28d8ba0481722c8343b7532299c7b9bb9e491c6832d9d05dd4704939287f776
</span>

* [DOSBox Staging 0.75.0-rc1 (tar.xz)][0_75_0_rc1]
<br/>
<span style="font-size:0.7em">
sha256: 594ba45280af240cb18b3882f7ffa71169a697eb362b7d7a76c8ccda2b940e84
</span>

[0_80_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.80.0/dosbox-staging-linux-v0.80.0.tar.xz
[0_79_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.79.1/dosbox-staging-linux-v0.79.1.tar.xz
[0_79_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.79.0/dosbox-staging-linux-v0.79.0.tar.xz
[0_78_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.78.1/dosbox-staging-linux-v0.78.1.tar.xz
[0_78_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.78.0/dosbox-staging-linux-v0.78.0.tar.xz
[0_77_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.1/dosbox-staging-linux-v0.77.1.tar.xz
[0_77_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.0/dosbox-staging-linux-v0.77.0.tar.xz
[0_76_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-linux-v0.76.0.tar.xz
[0_75_2]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.2/dosbox-staging-linux-v0.75.2.tar.xz
[0_75_1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-linux-v0.75.1.tar.xz
[0_75_0]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0/dosbox-staging-linux-v0.75.0.tar.xz
[0_75_0_rc1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-linux-v0.75.0-rc1.tar.xz

## Building from source

Of course you can always [build DOSBox Staging straight from the source][1].
Send us patches if you improve something! :)

[1]:https://github.com/dosbox-staging/dosbox-staging

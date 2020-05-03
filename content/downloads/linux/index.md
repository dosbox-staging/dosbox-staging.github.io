+++
title = "Linux packages"
template = "download.html"
+++

If your distribution already includes `dosbox-staging` in its repository, then
we recommend using that package:

#### Arch, Manjaro

Available via Arch User Repository
([link](https://aur.archlinux.org/packages/dosbox-staging)).

#### NixOS

Available via Nix User Repository
([instructions](https://github.com/dosbox-staging/dosbox-staging/wiki/Installing-on-NixOS)).

#### Others

This list might be incomplete. Lookup package on
[repology.org](https://repology.org/projects/?search=dosbox-staging).


## Tarball download

**[Download dosbox-staging 0.75.0 (tar.xz)][tarxz]** TODO
<br/>
<span style="font-size:0.7em">
sha256: TODO
</span>

Our pre-compiled builds run on most Linux distributions (x86\_64 only for now).
They depend on the following packages:

[tarxz]: https://TODO


#### Fedora

    sudo dnf install SDL2 SDL2_net opusfile

#### Ubuntu (18.04 or newer) and Debian (10 or newer)

    sudo apt install libsdl2-2.0 libsdl2-net-2.0 libopusfile0

#### Arch, Manjaro

    sudo pacman -S sdl2 sdl2_net opusfile


## <a name="steam"></a> Steam

You can easily configure your DOS games on Steam to use dosbox-staging via
[Boxtron](https://github.com/dreamer/boxtron) (community-developed
Steam Play compatibility tool for DOS games).

Boxtron will automatically use `dosbox` if found in your PATH or can be
configured to use a specific binary by editing the file
`~/.config/boxtron.conf` and overriding [dosbox.cmd][boxtron-conf]:

    cmd = ~/path-to-dosbox-staging/dosbox

[boxtron-conf]:https://github.com/dreamer/boxtron/wiki/Configuration#dosboxcmd

## Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).

## Older builds

* **[dosbox-staging 0.75.0-rc1 (tar.xz)][0_75_0_rc1]** (x86\_64)
<br/>
<span style="font-size:0.7em">
sha256: 594ba45280af240cb18b3882f7ffa71169a697eb362b7d7a76c8ccda2b940e84
</span>

[0_75_0_rc1]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-linux-v0.75.0-rc1.tar.xz

## Building from source

Of course you can always [build dosbox-staging straight from the source][1].
Send us patches if you improve something! :)

[1]:https://github.com/dosbox-staging/dosbox-staging

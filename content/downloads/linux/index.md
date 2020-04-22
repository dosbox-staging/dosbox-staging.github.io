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

**[Download dosbox-staging 0.75.0-rc1 (tar.xz)](https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-linux-v0.75.0-rc1.tar.xz)**

Our pre-compiled builds run on most Linux distributions (x86\_64 only for now).
They depend on the following packages:

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

If you use dosbox-staging `dosbox` command is in your PATH,
then Boxtron will pick it up automatically.  You can also
configure Boxtron to use specific build by editing file
`~/.config/boxtron.conf` and overriding [dosbox.cmd][boxtron-conf]:

    cmd = ~/path-to-dosbox-staging/dosbox

[boxtron-conf]:https://github.com/dreamer/boxtron/wiki/Configuration#dosboxcmd

## Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).


## Building from source

Of course you can always [build dosbox-staging straight from the source][1].
Send us patches if you improve something! :)

[1]:https://github.com/dosbox-staging/dosbox-staging

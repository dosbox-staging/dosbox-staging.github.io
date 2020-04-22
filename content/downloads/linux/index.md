+++
title = "Linux packages"
template = "download.html"
+++

If your distribution already includes `dosbox-staging` in its repository, then
we recommend using that package:

#### Arch, Manjaro

TODO instructions

#### NixOS

TODO instructions

#### Others

This list might be incomplete. Search
[repology.org](https://repology.org/projects/?search=dosbox-staging) for the
latest list of distributions that carry `dosbox-staging`.


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


## Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).

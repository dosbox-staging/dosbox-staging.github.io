+++
title = "Linux packages"
template = "download.html"
+++

If your distribution already includes `dosbox-staging` in the repository, then
using that package is recommended:

#### Arch, Manjaro

TODO instructions

#### NixOS

TODO instructions

#### Others

This list might be incomplete, lookup packages on
[repology.org](https://repology.org/projects/?search=dosbox-staging).


## Tarball download

TODO The latest stable version: [dosbox-staging 0.75.0-rc1](/)

Our precompiled tarball builds are designed to work with wide range
of Linux distributions, but will require you to manually install some
dependencies in order to use it:

#### Fedora

    sudo dnf install SDL2 SDL2_net opusfile

#### Debian (10 or newer), Ubuntu (18.04 LTS or newer)

    sudo apt install libsdl2-2.0 libsdl2-net-2.0 libopusfile0

#### Arch, Manjaro

    sudo pacman -S sdl2 sdl2_net opusfile


## Development snapshot builds

You can always check what's cooking on the master branch :)

These builds might be slow or unstable, they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds)

+++
title = "Development builds"
template = "devel-builds.html"
+++

## Installation notes

Development snapshot builds do not touch configuration of stable
version; they use separate config file (`dosbox-staging-git.conf`)
located in:

<table>
  <tr>
    <td>Linux</td>
    <td><code>~/.config/dosbox/</code></td>
  </tr>
  <tr>
    <td>Windows</td>
    <td><code>C:\Users\USERNAME\AppData\Local\DOSBox\</code></td>
  </tr>
  <tr>
    <td>macOS</td>
    <td><code>~/Library/Preferences/DOSBox/</code></td>
  </tr>
</table>


### Linux

These are dynamically-linked x86\_64 builds, you'll need additional packages installed via your package manager.

#### Fedora

    sudo dnf install SDL2 SDL2_net opusfile

#### Debian, Ubuntu

    sudo apt install libsdl2-2.0-0 libsdl2-net-2.0-0 libopusfile0

#### Arch, Manjaro

    sudo pacman -S sdl2 sdl2_net opusfile


### Windows

Windows executables in a snapshot packages are not signed, therefore Windows 10
might prevent the program from starting.

See [this guide](/downloads/windows/#ms-ss) to learn how to deal with this.


### macOS

macOS bundle is notarized via Apple Gatekeeper, your OS will try to prevent
dosbox-staging from running.

See [this guide](/downloads/macos/#apple-gatekeeper) to learn how to deal with
this.

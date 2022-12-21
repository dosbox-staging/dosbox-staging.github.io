+++
title = "Development builds"
template = "devel-builds.html"
+++

## Installation notes

Testing new features might require manual reset of the configuration
file.  DOSBox Staging builds use a configuration file named
`dosbox-staging.conf` located in:

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

Tarball contains dynamically-linked x86\_64 build, you'll need additional
dependencies installed via your package manager.

    # Fedora
    sudo dnf install SDL2 SDL2_image SDL2_net opusfile

<em></em>

    # Debian, Ubuntu
    sudo apt install libsdl2-2.0-0 libsdl2-image-2.0-0 libsdl2-net-2.0-0 libopusfile0

<em></em>

    # Arch, Manjaro
    sudo pacman -S sdl2 sdl2_image sdl2_net opusfile


### Windows

Windows executables in a snapshot packages are not signed, therefore Windows 10
might prevent the program from starting.

See [this guide](/downloads/windows/#ms-ss) to learn how to deal with this.


### macOS

macOS app bundle is not notarized; Apple Gatekeeper  will try to prevent
dosbox&#8209;staging from running.

See [this guide](/downloads/macos/#apple-gatekeeper) to learn how to deal with
this.

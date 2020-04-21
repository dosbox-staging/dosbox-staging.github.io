+++
title = "Windows downloads"
template = "download.html"
+++

TODO: **RC1 build not released yet**
<!-- **[Download dosbox-staging 0.75.0-rc1](/)** -->

*If Windows 8.x or Windows 10 prevents you from running dosbox-staging via
Microsoft Defender SmartScreen, see the [section below](#ms-ss).*

### Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds).

### Older builds

There are no stable builds yet.

### <a name="ms-ss"></a> Microsoft Defender SmartScreen

In 2012, Microsoft added "SmartScreen" to Windows 8, a rent-seeking system
meant extort payments from developers in exchange for sharing their software
with Window users via the App Store (see [[1]] and [[2]] below).

In lieu of paying Microsoft, the dosbox-staging project uses GitHub's free
integration service to generate Windows release packages. We will also rely on
Microsoft's "Application Reputation" scheme to eventually whitelist
dosbox-staging for users (see: [[3]], and the last paragraph in [[4]]).

For now, user can bypass SmartScreen using methods 1, 2, or 3 below:

If you're concerned about downloading pre-compiled binaries, you can [build
dosbox-staging yourself straight from the source][5] (send us patches if you
improve something!) :).

[1]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates
[2]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-windows-store--windows-8-apps
[3]:https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-smartscreen/windows-defender-smartscreen-overview
[4]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-ev-code-signing
[5]:https://github.com/dosbox-staging/dosbox-staging.

#### Method 1

Use Linux instead. [Ubuntu](https://ubuntu.com/download/desktop) is an excellent
choice for new users.

#### Method 2

SmartScreen will allow you to run application, after you click
on "More info":

![SmartScreen window 1](smartscreen1.png)
![SmartScreen window 2](smartscreen2.png)

#### Method 3

Right-click on "dosbox.exe" file distributed in the zip file, select
"Properties", and then "Unblock".

![Properties window](properties.png)

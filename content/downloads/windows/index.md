+++
title = "Windows downloads"
template = "download.html"
+++

**[Download dosbox-staging 0.75.0-rc1 (zip)](https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-windows-v0.75.0-rc1.zip)**

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

Starting in Windows 8, Microsoft's SmartScreen pop-up encumbers the execution
of newly-developed applications.  To prevent this, developers are expected to pay
Microsoft's EV certification vendors a yearly fee and put the software on Windows
Store<sup>[1]</sup>.

As dosbox-staging is a volunteer effort, we are not in a position to make such
payments. We therefore ask users to manually unblock dosbox-staging and be
patient while Microsoft's "Application Reputation" scheme eventually whitelists
dosbox-staging (see: [[2]], and the last paragraph in [[3]]).

If you're concerned about downloading pre-compiled binaries, you can [build
dosbox-staging yourself straight from the source][4]. Send us patches if you
improve something! :)

For now, you can bypass SmartScreen using methods 1, 2, or 3 below:

[1]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-windows-store--windows-8-apps
[2]:https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-smartscreen/windows-defender-smartscreen-overview
[3]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-ev-code-signing
[4]:https://github.com/dosbox-staging/dosbox-staging

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

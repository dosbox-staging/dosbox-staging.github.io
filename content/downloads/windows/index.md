+++
title = "Windows downloads"
template = "download.html"
+++

TODO **Download the latest stable version: [dosbox-staging 0.75.0-rc1](/)**

*If Windows 8.x or Windows 10 prevents you from running dosbox-staging via
Microsoft Defender SmartScreen, see the [section below](#ms-ss).*

### Development snapshot builds

You can always check what's cooking on the master branch :)

These builds might be slow or unstable, they are designed with developers
and testers in mind: [download instructions for snapshot builds](
https://github.com/dosbox-staging/dosbox-staging#development-snapshot-builds)

### Older builds

There are no stable builds yet.

### <a name="ms-ss"></a> Microsoft Defender SmartScreen

Starting with Windows 8, Microsoft enabled "SmartScreen" technology, which
disrupts user ability to run new (as in: newly developed) software.

Bypassing this check from software distribution side requires paying hundreds
of dollars for "[Extended Validation Code Signing Certificate][1]" and putting
the software on Windows Store (code signing only is not enough<sup>[2]</sup>).

As a small, open source, Free software project, we don't have ability to pay
for whitelisting and we don't want to force users into downloading the software
from Windows Store, that's why we rely on Microsoft's "Application Reputation"
scheme (see: [[3]], last paragraph in [[4]]) to eventually disable this hurdle for
users.

So simply bypass SmartScreen using methods 1, 2, or 3 listed below and don't
worry about it. Microsoft will eventually catch up to the fact, that this is
not malware and (hopefully) disable the screen for future users.

If you're afraid downloads linked in here might lead you to tainted version
of the software, you can always
[build dosbox-staging yourself straight from the source][5] (send us patches
if you'll end up improving something!) :).

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


+++
title = "Windows downloads"
template = "download.html"
+++

**[Download dosbox-staging 0.75.1 64-bit (zip)][0_75_1_x64]**
<br/>
<span style="font-size:0.7em">
sha256: TODO
</span>

**[Download dosbox-staging 0.75.1 32-bit (zip)][0_75_1_x86]**
<br/>
<span style="font-size:0.7em">
sha256: TODO
</span>

*If Windows 8.x or Windows 10 prevents you from running dosbox-staging via
Microsoft Defender SmartScreen, see the [section below](#ms-ss).*

[0_75_1_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-windows-x64-v0.75.1.zip
[0_75_1_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-windows-x86-v0.75.1.zip


### Development snapshot builds

You can always see what's cooking on the master branch :)

These builds might be slow or unstable as they are designed with developers and
testers in mind: [download instructions for snapshot builds](/downloads/devel/).


### <a name="ms-ss" href="#ms-ss">§</a> Microsoft Defender SmartScreen

#### Method 1

SmartScreen will allow you to run application, after you click
on "More info":

![SmartScreen window 1](smartscreen1.png)
![SmartScreen window 2](smartscreen2.png)


#### Method 2

Right-click on "dosbox.exe" file distributed in the zip file, select
"Properties", and then "Unblock".

![Properties window](properties.png)


#### Explanation

Starting in Windows 8, Microsoft's SmartScreen pop-up encumbers the execution
of newly-developed applications.  To prevent this, developers are expected to pay
Microsoft's EV certification vendors a yearly fee and put the software on Windows
Store<sup>[1]</sup>.

As dosbox-staging is a volunteer effort, we are not in a position to make such
payments. We therefore ask users to manually unblock dosbox-staging and be
patient while Microsoft's "Application Reputation" scheme eventually whitelists
dosbox-staging (see: [[2]], and the last paragraph in [[3]]).

[1]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-windows-store--windows-8-apps
[2]:https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-smartscreen/windows-defender-smartscreen-overview
[3]:https://docs.microsoft.com/en-gb/archive/blogs/ie/microsoft-smartscreen-extended-validation-ev-code-signing-certificates#-ev-code-signing


### <a name="old-builds" href="#old-builds">§</a> Older builds

* [dosbox-staging 0.75.0 32-bit (zip)][0_75_0_x86]
<br/>
<span style="font-size:0.7em">
sha256: 69046adcef2ef9920fbba8d40fc9e51f3dd144ba4549787e1816cf1c2ae87d71
</span>

* [dosbox-staging 0.75.0-rc1 32-bit (zip)][0_75_0_rc1_x86]
<br/>
<span style="font-size:0.7em">
sha256: 738d2ae2101384f2eeaf1895de64cf1b4c76eaf7873de7e15b7f52145dfed7e7
</span>

[0_75_0_x86]:     https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0/dosbox-staging-windows-v0.75.0.zip
[0_75_0_rc1_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-windows-v0.75.0-rc1.zip


### Building from source

Of course you can always [build dosbox-staging straight from the source][4].
Send us patches if you improve something! :)

[4]:https://github.com/dosbox-staging/dosbox-staging

+++
title = "Windows downloads"
template = "download.html"
+++

**[Download dosbox-staging 0.77.0 64-bit (zip)][0_77_0_x64]**
<br/>
<span style="font-size:0.7em">
sha256: cacdac418642fd8c7faf1e5955110c35d0c207392ae20835707fd2a1e1114b82
</span>

**[Download dosbox-staging 0.77.0 32-bit (zip)][0_77_0_x86]**
<br/>
<span style="font-size:0.7em">
sha256: f718d07bab69e3e1be0b28207039cea2746c7e45b8ba7a19b625011f477e609a
</span>

*If Windows 8.x or Windows 10 prevents you from running dosbox-staging via
Microsoft Defender SmartScreen, see the [section below](#ms-ss).*


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

* [dosbox-staging 0.76.0 32-bit (zip)][0_76_0_x86]
<br/>
<span style="font-size:0.7em">
sha256: 646d2f3fa8189e411589fedcb8148a295361693a6ce95d08e06f4a70e5a36b16
</span>

* [dosbox-staging 0.75.2 64-bit (zip)][0_75_2_x64]
<br/>
<span style="font-size:0.7em">
sha256: 09f0ca911813a64b8814880eb6e49ad4dcdac9a5bb9263c4887ad82b71fad292
</span>

* [dosbox-staging 0.75.2 32-bit (zip)][0_75_2_x86]
<br/>
<span style="font-size:0.7em">
sha256: 51dc171ff52ea395c6a22f09ebb98a93974a95c701ca81008368c22a66deced2
</span>

* [dosbox-staging 0.75.1 64-bit (zip)][0_75_1_x64]
<br/>
<span style="font-size:0.7em">
sha256: 80c60c4377ff2882649f113b3cb3bcd407c17acaac344c49fa1fc4229813f012
</span>

* [dosbox-staging 0.75.1 32-bit (zip)][0_75_1_x86]
<br/>
<span style="font-size:0.7em">
sha256: 843c742a348f575862e152e02cf174be0ea1c52bdb6e4bffd65f34af88b566b7
</span>

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

[0_77_0_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.0/dosbox-staging-windows-x64-v0.77.0.zip
[0_77_0_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.77.0/dosbox-staging-windows-x86-v0.77.0.zip
[0_76_0_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-windows-x64-v0.76.0.zip
[0_76_0_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.76.0/dosbox-staging-windows-x86-v0.76.0.zip
[0_75_2_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.2/dosbox-staging-windows-x64-v0.75.2.zip
[0_75_2_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.2/dosbox-staging-windows-x86-v0.75.2.zip
[0_75_1_x64]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-windows-x64-v0.75.1.zip
[0_75_1_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.1/dosbox-staging-windows-x86-v0.75.1.zip
[0_75_0_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0/dosbox-staging-windows-v0.75.0.zip
[0_75_0_rc1_x86]: https://github.com/dosbox-staging/dosbox-staging/releases/download/v0.75.0-rc1/dosbox-staging-windows-v0.75.0-rc1.zip


### Building from source

Of course you can always [build dosbox-staging straight from the source][4].
Send us patches if you improve something! :)

[4]:https://github.com/dosbox-staging/dosbox-staging

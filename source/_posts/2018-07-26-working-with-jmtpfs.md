---
title: Working with jmtpfs
date: 2018-07-24 12:00:00
tags: linux jmtpfs
---

## Introduction
This post is aimed to two different sets of people; those that are looking for a way to copy/transfer files from their computers to their cellphones and those that are trying to do that and are facing errors using jmtpfs.

If you are in one of those groups, this post is for you. Please continue reading.

NOTE: I am using Debian Linux (stretch)

## Steps
I am explicity describing these steps here as it took me a while to realize some very simple/stupid details.

1. **Install jmtpfs**

This is as simple as:
```bash
sudo apt-get update
sudo apt-get install jmtpfs
```

2. **Connect your device**

Connect your Andriod device (actually this should work with any mtp-capable device).   \
Unlock it!. Although this steps is quite obvious, when you forget it then you will need to unmount the specified folder manually (see next steps).

3. **Mount your device**

Execute:
```bash
jmtpfs ~/tmp
```

Assuming that the folder ~/tmp is empty.

You should receive an outpupt similiar to this:
```bash
Device 0 (VID=2e04 and PID=c025) is UNKNOWN in libmtp v1.1.13.
Please report this VID/PID and the device model to the libmtp development team
Android device detected, assigning default bug flags
```

**IMPORTANT**: Make sure that you do not have an alias for ```rm```.   \
It took me hours to realize that when I was trying to delete a file or a folder I was unable to do so because I was actually trying to move it to the trash, and this was giving errors.   \
I have an alias for ```rm``` to use ``trash``. For the sake of the connected device just remove the alias temporally.


Finnaly take into account that if you are using a Gui file explorer like thunar, those programs tend to automatically send deleted file to the trash (or internally use rm command).



## Debug

Finally, if you are experiencying other problems use ```-d``` when mounting the device. This option is to **d**ebug. What it does is to output on the console what it is doing.

If you encounter any problem transfering files from Linux to your device and want some help, let me know, write a comment :D.


# Appendix J: SDKBOX

## Prerequisite
* Review the [SDKBOX](http://cocos2d-x.org/sdkbox) website and decide what plugins you want to integrate.
* Download the __SDKBOX Installer__. If you are running Cocos2d-x v3.7, the __SDKBOX Installer__ is already downloaded and located at `<cocos2d-x root>/tools/cocos2d-console/bin/sdkbox`.

## Why SDKBOX?
__SDKBOX__ is a new Cocos2d-x tool that allows developers to integrate popular third party plugins for
__SDKBOX__ makes it super EASY and FREE for Cocos2d-x developers to integrate 3rd party SDKs into their games. We do all the hard, tedious and tricky work so that developers won’t have to. All services are tested and certified. No matter which version of the game engine you are using, C++ or Javascript or Lua, SDKBOX will reduce your integration time from a typical 1~2 weeks down to less than a day. No hassle, no friction.






# SDKBOX: Installing SDKBOX Plugins using the Installer

## Preparing to run the SDKBOX Installer
Before you can run the SDKBOX installer you need to do a few things.
* make sure you know the path to where you downloaded the SDKBOX installer. (you can always put it in `/usr/local/bin`)
* make sure you know the path to where you downloaded the SDKBOX plugin bundles.

## Installing a Plugin using the SDKBOX Installer
Now we are ready to install a plugin! There isn't much to it. Ready?

### Installing for OS X
* From a command-line, `cd` to your applications root directory. Example:
```sh
cd ~/MyGame
```

* Now, you can install your plugin using the SDKBOX installer, noting the locations of where you placed the installer and the plugin bundles. Example:
```sh
sdkbox import iap
```

### What Next?
The SDKBOX installer takes care of most of what you need. However, there are still a few manual steps that you must complete. After the installer runs it outputs a list of the remaining steps that you need to perform, referring to the plugin bundle PDF. Example output from running the above command:
```sh
$ sdkbox import iap
_______ ______  _     _ ______   _____  _     _
|______ |     \ |____/  |_____] |     |  \___/
______| |_____/ |    \_ |_____] |_____| _/   \_
Copyright (c) 2015 Chukong Technologies Inc. v0.5.7

Please reference the online documentation to finish the integration:
http://sdkbox-doc.github.io/en/plugins/iap/v3-cpp/
Installation Successful :)
```

### Other Installer switches.
The SDKBOX Installer has several switches that you can use. You can always see these by running `sdkbox` by itself or using the `-h` help switch:
```sh
$ <path>/sdkbox
_______ ______  _     _ ______   _____  _     _
|______ |     \ |____/  |_____] |     |  \___/
______| |_____/ |    \_ |_____] |_____| _/   \_
Copyright (c) 2015 Chukong Technologies Inc. v0.5.7

usage: sdkbox [-h] [-v] [-p PROJECT] [-b PLUGIN] [--yes] [--dryrun]
              {import,restore,symbols,api}
```

| switch  | alternate switch  | what it does |
| :------------ |---------------:| :-----|
| -h      | --help          |show this help message and exit |
| -v      | --verbose       |specify verbosity level |
| -p PROJECT | --project PROJECT |path to project root (defaults to .) |
| -b PLUGIN | --plugin PLUGIN |specify path to plugin (defaults to .) |
|         | --dryrun        |test install before performing. |

### Staying Up-to-date
The SDKBOX installer automatically checks for updates to itself. It will ask for your permission before updating. This will allow you to stay current and also automatically pull updates to your plugin bundles when they become available.
```sh
_______ ______  _     _ ______   _____  _     _
|______ |     \ |____/  |_____] |     |  \___/
______| |_____/ |    \_ |_____] |_____| _/   \_
Copyright (c) 2015 Chukong Technologies Inc. v0.5.6

A newer version of SDKBOX is available, would you like to update to v0.5.7?
Please type Yes, No or Quit Yes
updated SDKBOX v0.5.6 to v0.5.7 at sdkbox
```

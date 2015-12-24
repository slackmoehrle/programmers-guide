# SDKBOX

## Prerequisite
* Review the [SDKBOX](http://cocos2d-x.org/sdkbox) website and decide what plugins
you want to integrate.
* Download the __SDKBOX Installer__. If you are running cocos2d-x v3.7, the
__SDKBOX Installer__ is already downloaded and located at __<cocos2d-x root>/tools/cocos2d-console/plugins/plugin_package/sdkbox__.

## Why SDKBOX?
__SDKBOX__ is a new cocos2d-x tool that allows developers to integrate popular
third party plugins for __Tune__, __AdColony__, __Age Cheq__, __Chartboost__,
__Facebook__, __Flurry Analytics__, __Google Analytics__, __In-App Purchase__,
__Kochava__, __Vungle__ and many more. __SDKBOX__ makes it super *EASY* and *FREE* for
cocos2d-x developers to integrate 3rd party SDKs into their games by doing all
the hard, tedious and tricky work so that developers don’t have to. All services
are tested and certified. No matter which version of the game engine you are using,
C++ or Javascript or Lua, SDKBOX will reduce your integration time from a typical
1~2 weeks down to less than a day. No hassle, no friction.

## Which SDKBOX Plugins are right for you?
* __AdColony:__ Instant-play™ HD the best user experience.
* __AgeCheq:__ Easy compliance with the US and Euro Child Privacy Laws.
* __Appodeeal:__ Maximize your app revenue efficiently with programmatic ad mediation
for publishers.
* __Bee7:__ Native rewarded re-engagement system encourages valuable players to stay in your game
* __Chartboost:__ Games-only platform to increase revenue and discover new players.
* __Facebook:__ The world's largest social network.
* __Flurry Analytics:__ Insights into your users and app performance.
* __Fyber:__ Fyber empowers developers to execute smart ad monetization strategies.
* __Google Analytics:__ Turn insights into action.
* __In-App Purchase:__ Easily implement In-App Purchases in your game.
* __Kochava:__ Driving Effective Mobile Ad Spend.
* __Playphone:__ Your must-have game monetization channel in the world’s fastest
growing gaming markets
* __Ratings & Reviews:__ More downloads of your app with App store ratings and reviews
* __Scientific Revenue:__ Pricing without Compromise
* __SOOMLA Grow:__ God-mode analytics: see analytics from other games, target hidden
whales.
* __Tune:__ Making mobile marketing better, for everyone.
* __Valuepotion:__ Monetize your full user base and get your values up
* __Vungle:__ Infrastructure for app monetization through video ads.
* __YouTube Player:__ Single API to play YouTube videos on both iOS and Android.

## SDKBOX: Installing SDKBOX Plugins using the Installer
Before you can run the SDKBOX installer you need to do a few things.
* make sure you know the path to where you downloaded the SDKBOX installer. (you
  can always put it in __/usr/local/bin__)

Now we are ready to install a plugin! There isn't much to it. Ready?

### Installing for OS X
* From a command-line, __cd__ to your applications root directory. Example:
```sh
cd ~/MyGame
```

* Now, you can install your plugin using the SDKBOX installer. Example:
```sh
sdkbox import facebook
```

### Installing for Windows
* From a command-prompt, change to your applications root directory. Example:
```
c:\Users\<MY_USER_ID>\MyGame
```

* Now, you can install your plugin using the SDKBOX installer. Example:
```sh
sdkbox import facebook
```

### What Next?
The SDKBOX installer takes care of most of what you need. However, there are still
a few manual steps that you must complete. After the installer runs it outputs a
list of the remaining steps that you need to perform, referring to the plugin
bundle PDF. Example output from running the above command:
```sh
$ sdkbox import facebook
 _______ ______  _     _ ______   _____  _     _
 |______ |     \ |____/  |_____] |     |  \___/
 ______| |_____/ |    \_ |_____] |_____| _/   \_
Copyright (c) 2015 Chukong Technologies Inc. v0.5.7.1


  *****************************
  ******** Manual Step ********
  *****************************

1. Edit "project.properties"
   Set "target=android-15"

Please reference the online documentation to finish the integration:
http://sdkbox-doc.github.io/en/plugins/facebook/v3-cpp/
Installation Successful :)
```

### Other Installer options.

#### Switches
The SDKBOX Installer has several switches that you can use. You can always see
these by running __sdkbox__ by itself or using the __-h__ help switch:
```sh
$ sdkbox
 _______ ______  _     _ ______   _____  _     _
 |______ |     \ |____/  |_____] |     |  \___/
 ______| |_____/ |    \_ |_____] |_____| _/   \_
 Copyright (c) 2015 Chukong Technologies Inc. v0.5.7.1
 usage: sdkbox [-h] [-v] [-p [PROJECT]] [-b [PLUGIN]] [-D SYMBOL] [-q]
               [-d [DAYS]] [--china] [--dryrun] [--forcedownload] [--noupdate]
               [--patcherrors] [--nopatching]
               {import,info,update,restore,list,clean,symbols}

 Import SDKBOX packages into cocos2d-x projects

 positional arguments:
   {import,info,update,restore,list,clean,symbols}
                         issue sdkbox installer command
```

| switch  | alternate switch  | what it does |
| :------------- | :------------------------| :-----|
| -h      | --help          |show this help message and exit |
| -v      | --verbose       |specify verbosity level |
| -p PROJECT | --project PROJECT |path to project root (defaults to .) |
| -b PLUGIN | --plugin PLUGIN |specify path to plugin (defaults to .) |
| -D SYMBOL | --symbol SYMBOL |define a symbol for the package script |
| -q | --nohelp |don't open online documentation after installation. |
| -d [DAYS] | --days [DAYS] |specify number of days of logs and packages to keep |
|         | --china        |use China based server instead of US |
|         | --dryrun        |test install before performing. |
|         | --forcedownload |force download of package even if it is already downloaded. |
|         | --noupdate        |ignore available updates. |
|         | --patcherrors        |patch failures are counted as errors instead of warnings. |
|         | --nopatching        |skip all patching commands when executing package script. |

#### Commands:
The SDKBOX Installer has several commands that you can use. You can always see these by running `sdkbox` by itself or using the `-h` help switch:

| Command            | Description  |
| :--------------------- | :----------- |
|  import [name] |  imports the package 'name' into your project. For a list of names, see the list command. You can also specify local archived packages or a directory by specifying the -b option (see above). |
| update | re-imports all imported packages to update them to the latest version. If you have imported packages prior to SDKBOX v0.5.6.19 then you must manually import your packages again to add them to the package manifest. |
| info | displays the packages that have been imported into your project. If you have packages imported that are not in the package manifest, SDKBOX will alert you as to which packages it thinks are imported. |
| restore | restores your project to the latest backup that can be found. If you have made changes to your project files since importing, this will overwrite your changes, so use carefully. |
| list | list available and cached packages installed on your machine. The package repository is located in your home directory. |
| clean [N] | removes all packages older than N days. |
| symbols | displays the symbols that are used to drive the import process. These symbols are very useful for debugging, so if you have issues, and post on the forums, please include the symbols if possible. |

Examples:
```
// Add 'In App Purchase' plugin to your game
$ sdkbox import -b iap -p /path/to/your/cocos2dx/game/
```
```
// The -b option may be omitted and -p too if you are in your project directory
$ sdkbox import iap
```
```
// If you have a package directory you may specify it too
$ sdkbox -b /path/to/your/package
```
```
// List all available packages on the server
$ sdkbox list
```
```
//Show all package imported into your project
$ sdkbox info
```
```
//clean logs and packages older than 5 days
$ sdkbox clean 5
```

### Staying Up-to-date
The SDKBOX installer automatically checks for updates to itself. It will ask for your permission before updating. This will allow you to stay current and also automatically pull updates to your plugin bundles when they become available.
```sh
$ sdkbox
 _______ ______  _     _ ______   _____  _     _
 |______ |     \ |____/  |_____] |     |  \___/
 ______| |_____/ |    \_ |_____] |_____| _/   \_
Copyright (c) 2015 Chukong Technologies Inc. v0.5.6.24

A newer version of SDKBOX is available, would you like to update to v0.5.7.1?
Please type Yes, No or Quit Yes
updated SDKBOX v0.5.6.18 to v0.5.7.1 at sdkbox
```

### SDKBOX Documentation
All SDKBOX plugins have online documentation available. This documentation is your best resource for installation, integration and API reference.

* [AdColony](http://sdkbox-doc.github.io/en/plugins/adcolony/index.html)
* [AgeCheq](http://sdkbox-doc.github.io/en/plugins/agecheq/index.html)
* [Bee7](http://sdkbox-doc.github.io/en/plugins/bee7/index.html)
* [Chartboost](http://sdkbox-doc.github.io/en/plugins/chartboost/index.html)
* [Facebook](http://sdkbox-doc.github.io/en/plugins/facebook/index.html)
* [Flurry Analytics](http://sdkbox-doc.github.io/en/plugins/flurryanalytics/index.html)
* [Fyber](http://sdkbox-doc.github.io/en/plugins/fyber/index.html)
* [Google Analytics](http://sdkbox-doc.github.io/en/plugins/googleanalytics/index.html)
* [In-App Purchase](http://sdkbox-doc.github.io/en/plugins/iap/index.html)
* [Kochava](http://sdkbox-doc.github.io/en/plugins/kochaca/index.html)
* [Ratings and Reviews](http://sdkbox-doc.github.io/en/plugins/review/index.html)
* [Soomla Grow](http://sdkbox-doc.github.io/en/plugins/soomlagrow/index.html)
* [Tune](http://sdkbox-doc.github.io/en/plugins/tune/index.html)
* [Vungle](http://sdkbox-doc.github.io/en/plugins/vungle/index.html)

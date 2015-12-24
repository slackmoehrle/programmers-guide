# Windows Phone 8 Installation and Setup

## Environmental Requirements
* Windows 8.0/8.1
* cocos2d-x v3.3 [http://cocos2d-x.org/download](http://cocos2d-x.org/download)
* Visual Studio 2012+
* Windows Phone SDK 8.0 [http://dev.windowsphone.com/en-US/downloadsdk](http://dev.windowsphone.com/en-US/downloadsdk)

## Prerequisite
* Download cocos2d-x and unzip it. (maybe: ~/)

![](H-img/1.png "")

* Register to be a Windows Phone Developer [http://msdn.microsoft.com/en-us/library/windowsphone/help/jj206719(v=vs.105](http://msdn.microsoft.com/en-us/library/windowsphone/help/jj206719(v=vs.105)

## Compile and Run the TestCpp Project
* Open `cocos2d-wp8.vc2012.sln` in the `build` folder

![](H-img/2.png "")

* Right click the __cpp-tests__ project, and select __Set as StartUp Project__.

![](H-img/3.png "")

* Select __Emulator__ or a __Device__ to run the project on. If you select __Device__
you need to connect your phone device using usb. Compile and run the __TestCpp__
project.

![](H-img/4.png "")

## How to debug in project
* Right click __cpp-tests__, select __Properties__, in __Debug__, select __debug__
target.

![](H-img/5.png "")

* If you select __Managed Only__ in __UI Task__, it's to debug c# code in __cpp-tests__.
If you select __Native Only__, it's to debug c++ code in __cpp-testsComponent__.
If you select __Native Only__ and want to use __CCLog__ function, right click
__cpp-testsComponent__ and define __COCOS2D_DEBUG=1__ in __Preprocessor Definitions__.

![](H-img/6.png "")

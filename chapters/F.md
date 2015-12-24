# Linux Installation and Setup

## Environment Requirements
* Ubuntu 12.10+
* cocos2d-x v3.3 [https://cocos2d-x.org/download](https://cocos2d-x.org/download "cocos2d-x")
* CMake 2.6+
* gcc 4.9+

## Prerequisite
* Download cocos2d-x and unzip it. (maybe: ~/)

* Install dependencies. The dependencies are:

		libx11-dev
		libxmu-dev
		libglu1-mesa-dev
		libgl2ps-dev
		libxi-dev
		g++
		libzip-dev
		libpng12-dev
		libcurl4-gnutls-dev
		libfontconfig1-dev
		libsqlite3-dev
		libglew*-dev
		libssl-dev

* If you are using Ubuntu/Debian, there is a shell script __build/install-deps-linux.sh__
for you to install the dependences easily. Run the commands below, in a terminal:  

    	> cd $cocos2dx_root/build
    	> ./install-deps-linux.sh

Otherwise, you should install the dependencies manually.

## Generate Makefile

* Run __cmake__ to generate __makefile__:

    	> mkdir linux-build
    	> cd linux-build
    	> cmake ../..

* When __cmake__ returns correctly, many files & folders will be generated in  
__coocs2dx_root/build/linux-build__

![](F-img/1.png "")

## Compile

* Run __make__ to compile:

    	> make

Application will be generated in __cocos2dx_root/build/linux-build/bin/cpp-tests/__
if compiled successfully.

## Run

		> cd bin/cpp-tests/
		> ./cpp-tests

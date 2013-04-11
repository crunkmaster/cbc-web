# CBC Web

CBC Web is an attempt at creating a usable web interface for the CBCv2 series of robotics controllers. In its current state it includes a main page which provides a convenient way to access analog and digital sensor readings and a secondary page providing a proof of concept remote control interface using jquery and terrible .cgi scripts.

## Features

* Sleek, modern design.
* Easy way to get sensor readings remotely.
* Remote control functionality (including optional riding dirty module).

## Usage

* *This assumes you have a wireless adapter configured for the CBC and you have ssh access to it.
* download lighttpd built for the chumby -- http://files.chumby.com/hacks/lighttpd_chumby_1.7.tar.gz
* copy the tarball over to the cbc, and extract it to /mnt/usb/
* clone this git repository (git clone https://github.com/crunkmaster/cbc-web)
* copy the contents of the cbc-web directory to /mnt/usb/lighty/
* if you make any changes directly on the cbc, make sure they are backed up because the /mnt/usb partition will be deleted if the cbc powers off (working on a way around that).

## Project information

* Source: http://github.com/crunkmaster/cbc-web

## License

* Do whatever you want with it, Public Domain.

### Major components:

* jQuery: MIT/GPL license
* Modernizr: MIT/BSD license
* Normalize.css: Public Domain
* HTML5 Boilerplate: Public Domain


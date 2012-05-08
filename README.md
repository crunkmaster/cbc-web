# [CBC Web]

CBC Web is an attempt at creating a usable web interface for the CBCv2 series of robotics controllers. In its current state it includes a main page which provides a convenient way to access analog and digital sensor readings and a secondary page providing a proof of concept remote control interface using jquery and .cgi scripts.

## Features

* Sleek, modern design.
* Easy way to get sensor readings remotely.
* Remote control functionality (including optional riding dirty module).

## Usage

* *This assumes you have a wireless adapter configured for the CBC and you have ssh access to it.
* download the lighttpd built for the chumby -- http://files.chumby.com/hacks/lighttpd_chumby_1.7.tar.gz
* copy the tarball over to the cbc, and extract it to /mnt/usb/
* clone this git repository (git clone https://github.com/crunkmaster/cbc-web)
* copy the contents of the cbc-web directory to /mnt/usb/lighty/
* in the /mnt/usb/lighty directory, modify the lighttpd.conf file so the line with cgi.assign looks like this -- cgi.assign = ( ".sh" => "/bin/sh", ".pl" => "/usr/bin/perl", ".cgi" => "" )

## Project information

* Source: http://github.com/crunkmaster/cbc-web

## License

* Do whatever you want with it, Public Domain.

### Major components:

* jQuery: MIT/GPL license
* Modernizr: MIT/BSD license
* Normalize.css: Public Domain
* HTML5 Boilerplate: Public Domain

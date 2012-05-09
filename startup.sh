#!/bin/sh
# create the log directory
mkdir /tmp/logs
# start lighttpd
LD_LIBRARY_PATH=/mnt/usb/lighty/lib /mnt/usb/lighty/sbin/lighttpd -f /mnt/usb/lighty/lighttpd.conf


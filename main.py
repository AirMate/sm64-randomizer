#!/usr/bin/env python
from __version__ import __version__
print(f'  Super Mario 64 Randomizer  (Version: {__version__})\n')

import sys

if __name__ != '__main__':
  print("Dont import this")
  sys.exit(2)

if len(sys.argv) <= 1:
  # assume we want to start the GUI
  print("starting gui...")
  import gui
  sys.exit(0)

import os
import logging

if 'DEBUG' in os.environ:
  logging.basicConfig(level=logging.DEBUG, format="%(message)s")
else:
  logging.basicConfig(filename="sm64_rando_debug.log", level=logging.DEBUG, filemode="w", format="%(asctime)s %(module)s %(message)s")

from CLI import run_with_args
try:
  run_with_args()
except Exception as err:
  print(f'Unfortunately, the randomizer encountered an error, seen below:')
  raise err
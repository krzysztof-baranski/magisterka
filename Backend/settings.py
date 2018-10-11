import logging
import sys

logging.basicConfig(
    # level=logging.DEBUG,
    level=logging.INFO,
    format='%(levelname)7s: %(message)s',
    stream=sys.stderr,
)
LOG = logging.getLogger('Settings')

class Settings (object):
	def __init__(self, arg):
		super(Settings, self).__init__()
		self.arg = arg
		self.brightness = None
		self.color = None
		self.contrast = None

	def setBrightness (self, data):
		self.brightness = data['value']
		return self.brightness

	def  setColor (self, data):
		self.color = data['value']
		return self.color

	def  setContrast (self, data):
		self.contrast = data['value']
		return self.contrast
import logging
import sys

logging.basicConfig(
    # level=logging.DEBUG,
    level=logging.INFO,
    format='%(levelname)7s: %(message)s',
    stream=sys.stderr,
)
LOG = logging.getLogger('Navi')

class Navigation (object):
	def __init__(self, arg):
		super(Navigation, self).__init__()
		self.arg = arg
		self.homeAddress = {
			'country': 'Poland',
			'city': 'Lodz',
			'street': 'Al. Politechniki',
			'number': 11,
			'zipCode': '93-590'
		}

	def setHomeAddress(self, data): 
		self.homeAddress = data['address']
		return self.homeAddress

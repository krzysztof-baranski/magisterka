import logging
import sys

logging.basicConfig(
    # level=logging.DEBUG,
    level=logging.INFO,
    format='%(levelname)7s: %(message)s',
    stream=sys.stderr,
)
LOG = logging.getLogger('Tuner')

class Tuner(object):
	"""docstring for Tuner"""
	def __init__(self, arg):
		super(Tuner, self).__init__()
		self.arg = arg
		self.currentStation = {
			'name': 'Super Hits Station',
			'fraquence': 104.5,
			'band': 'fm',
			'isFavorite': True
		}

	stations = [{
		'name': 'Super Hits Station',
		'fraquence': 104.5,
		'band': 'fm',
		'isFavorite': True
	},
	{
		'name': 'AMmmerica Station',
		'fraquence': 554,
		'band': 'am',
		'isFavorite': False
	}]

	emptyStation = {
		'fraquence': 0,
		'band': ''
	}

	def getCurrentStation (self):
		return self.currentStation

	def changeBand (self): 
		if self.currentStation['band'] == 'fm':
			self.currentStation = self.stations[1]
		else: 
			self.currentStation = self.stations[0]
		LOG.info('change band' + str(self.currentStation))
		return self.currentStation

	def getListItems (self, data):
		LOG.info ('TUNER!!!!!!!!' + str (data) ) 
		items = []

		for x in range(0, 15):
			if x == 1:
				items.append({ 'fraquence': 554 + x, 'name': 'Radio AMmmerica ' + str(x), 'isFavorite': True, 'band': data['band'] })  
			else: 
				items.append({ 'fraquence': 554 + x, 'name': 'Radio AMmmerica ' + str(x), 'isFavorite': False, 'band': data['band'] })  

		global stations
		self.stations.extend(items) 
		LOG.info(len(self.stations)) 
		return self.stations

	def playStation (self, data):
		fraq = data.get('fraquence', None) 
		LOG.warning ('!!!!AA ' + str (fraq) ) 
		if fraq == None:
			return self.emptyStation

		for station in self.stations:
			if station['fraquence'] == fraq:
				return station
		else:
			return self.emptyStation

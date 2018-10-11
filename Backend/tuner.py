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
		'isFavorite': True,
		'stationID' : 0
	},
	{
		'name': 'AMmmerica Station',
		'fraquence': 554,
		'band': 'am',
		'isFavorite': False,
		'stationID' : 1
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

		for x in range(len(self.stations), len(self.stations) + 15):
			if x == 1:
				items.append({ 'stationID': x, 'fraquence': 554 + x, 'name': 'Radio AMmmerica ' + str(x), 'isFavorite': True, 'band': data['band'] })  
			else: 
				items.append({ 'stationID': x, 'fraquence': 554 + x, 'name': 'Radio AMmmerica ' + str(x), 'isFavorite': False, 'band': data['band'] })  

		global stations
		self.stations.extend(items) 
		LOG.info(len(self.stations)) 
		return self.stations

	def playStation (self, data):
		id = data.get('id', None) 
		LOG.warning ('!!!!AA ' + str (id) ) 
		
		for station in self.stations:
			if station['stationID'] == id:
				self.currentStation = station
				return station
		else:
			self.currentStation = emptyStation
			return self.emptyStation

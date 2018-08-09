import logging
import sys

logging.basicConfig(
    # level=logging.DEBUG,
    level=logging.INFO,
    format='%(levelname)7s: %(message)s',
    stream=sys.stderr,
)
LOG = logging.getLogger('Media')

class Media(object):
	"""docstring for Media"""
	def __init__(self, arg):
		super(Media, self).__init__()
		self.arg = arg
		self.currentSource = 'Noneqqqq'
	
	media = {
		'usb': {
			'mediaID': 'usb',
			'available': True,
			'playable': True,
			'empty': False
		},
		'hdd': {
			'mediaID': 'hdd',
			'available': True,
			'playable': True,
			'empty': False	
		}
	}
	
	emptyTrack = {
		'trackID': '',
		'playing': False
	}

	tracks = [
		{
			'trackID': '0',
			'playing': True
		},
		{
			'trackID': '1',
			'playing': False
		}
	]


	def selectSource (self, data):
		global currentSource
		source = data.get('source', None)
		newSource = self.media.get(source, None)
		LOG.warning('@@@2 newSource ' + str(newSource)) 
		self.currentSource = newSource
		return self.currentSource
		LOG.warning('@@@2 newSource' + str(currentSource)) 

	def playTrack (self, data):
		trackID = data.get('trackID', None) 
		if trackID == None:
			return emptyTrack

		for track in self.tracks:
			if track['trackID'] == trackID:
				return track
		else:
			return self.emptyTrack

	def getListItems (self):
		items = []
		for x in range(0, 15):
			if x == 1:
				items.append({ 'trackID': x, 'title': 'Track ' + str(x), 'isPlaying': True, 'isFavorite': True })  
			else: 
				items.append({ 'trackID': x, 'title': 'Track ' + str(x), 'isPlaying': False, 'isFavorite': False })  
		global tracks
		self.tracks.extend(items) 
		LOG.info(len(self.tracks)) 
		return items
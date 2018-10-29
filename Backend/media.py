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
		self.currentTrack = None
	
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
			'trackID': 0,
			'playing': True,
			'currentTime': 123,
			'totalTime': 321,
			'trackNumer': 1,
			'totalTracks': 2,
			'isFavorite': False,
			'name': 'Trackson 1'
		},
		{
			'trackID': 1,
			'playing': False,
			'currentTime': 123,
			'totalTime': 321,
			'trackNumer': 2,
			'totalTracks': 2,
			'isFavorite': False,
			'name': 'Trackson 2'
		}
	]

	def getSource (self): 
		global currentSource
		if (self.currentSource == 'Noneqqqq') or (self.currentSource == None):
			self.currentSource = self.media.get('hdd')
		LOG.info('GET SOURCE' + str(self.currentSource))
		return self.currentSource

	def getCurrentTrack (self):
		if self.currentTrack == None:
			self.currentTrack = self.tracks[0]
		LOG.info('GET TRACK ' + str(self.currentTrack))
		return self.currentTrack

	def selectSource (self, data):
		global currentSource
		source = data.get('source', None)
		newSource = self.media.get(source, None)
		LOG.warning('@@@2 newSource ' + str(newSource)) 
		self.currentSource = newSource
		LOG.warning('@@@2 newSource' + str(self.currentSource)) 
		return self.currentSource

	def playTrack (self, data):
		trackID = data.get('trackID', None) 

		for track in self.tracks:
			if str(track['trackID']) == trackID:
				# global currentTrack
				self.currentTrack = track
				break;
		return self.currentTrack
		
		# return self.emptyTrack

	def getListItems (self):
		items = []
		for x in range(0, 15):
			if x == 1:
				items.append({ 'trackID': x, 'title': 'Track ' + str(x), 'isPlaying': True, 'isFavorite': True, 'currentTime': 12, 'totalTime' : 300, 'totalTracks': len(self.tracks) + 15 })  
			else: 
				items.append({ 'trackID': x, 'title': 'Track ' + str(x), 'isPlaying': False, 'isFavorite': False, 'currentTime': 12, 'totalTime' : 300, 'totalTracks': len(self.tracks) + 15 })  
		global tracks
		self.tracks.extend(items) 
		LOG.info(len(self.tracks)) 
		return items
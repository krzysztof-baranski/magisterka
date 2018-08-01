class Media(object):
	"""docstring for Media"""
	def __init__(self, arg):
		super(Media, self).__init__()
		self.arg = arg
	
	media = {
		'usb': {
			'available': True,
			'playable': True,
			'empty': False
		},
		'hdd': {
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

	currentSource = None

	def selectSource (self, data):
		source = data.get('source', None)
		newSource = self.media.get(source, None)
		currentSource = newSource

	def playTrack (self, data):
		trackID = data.get('trackID', None) 
		if trackID == None:
			return emptyTrack

		for track in self.tracks:
			if track['trackID'] == trackID:
				return track
			else:
				return emptyTrack
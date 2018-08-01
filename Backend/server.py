#!/usr/bin/env python

# WS server that sends messages at random intervals

import asyncio
import datetime
import random
import websockets
import logging
import json
import sys
import media

logging.basicConfig(
    # level=logging.DEBUG,
    level=logging.INFO,
    format='%(levelname)7s: %(message)s',
    stream=sys.stderr,
)
LOG = logging.getLogger('')

commands = {
	'reqSelectSource': 0,
	'reqPlayTrack'	 : 1,
	'reqNextTrack'   : 2,
	'reqPrevTrack'   : 3
}

messages = []
messages.append(datetime.datetime.utcnow().isoformat() + 'Z')


Media = media.Media('media') 

def parseMsg(msg):
	try:
		messageObj = json.loads(msg)
	except ValueError:
		LOG.error('Cannot parse message to JSON! ')
		return False
	except:
		LOG.error('Unexpected error: ' + sys.exc_info()[0]); 
		return False
	return messageObj

async def consumer (message):
	messageObj = parseMsg(message)

	LOG.info('Msg from Client: ' + str(messageObj))

	if messageObj == False:
		LOG.warning('Return. Message not valid') 
		return False

	messageNo = commands.get(messageObj.get('cmd', 'noop'), -1)
	if messageNo == 0:
		LOG.info ('messageNo ' + str(messageNo) + ' no i elo')
		Media.selectSource(messageObj) 
		messages.append(json.dumps({ 'cmd': 'resSelectSource', 'source': Media.currentSource }) ) 
	elif messageNo == 1:
		track = Media.playTrack(messageObj)
		LOG.warning ('############ ' + str (track) ) 
		messages.append(json.dumps({ 'cmd': 'resPlayTrack', 'track': track })) 	
	else: 
		LOG.info ('NO message found!')  

async def consumer_handler(websocket, path):
    async for message in websocket:
        await consumer(message)

async def producer():
	# CZEMU NIE DZIALA JAK SIE NIE ZZROBI TU APPEND??
    messages.append(datetime.datetime.utcnow().isoformat() + 'Z')
    return messages

async def producer_handler(websocket, path):
    while True:
	    messages = await producer()
	    for msg in messages:
	    	await websocket.send(msg)
	    	await asyncio.sleep(0.01)
	    	if msg in messages:
	    		messages.remove(msg) 
	    # LOG.info('PATH ' + str(path)) 

async def handler(websocket, path):
    consumer_task = asyncio.ensure_future(
        consumer_handler(websocket, path))
    producer_task = asyncio.ensure_future(
        producer_handler(websocket, path))
    done, pending = await asyncio.wait(
        [consumer_task, producer_task],
        return_when=asyncio.FIRST_COMPLETED,
    )
    for task in pending:
        task.cancel()

event_loop = asyncio.get_event_loop()
# Enable debugging
event_loop.set_debug(True)
start_server = websockets.serve(handler, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
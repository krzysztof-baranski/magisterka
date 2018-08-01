#!/usr/bin/env python

# WS server that sends messages at random intervals

import asyncio
import datetime
import random
import websockets
import logging
import json
import sys

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

async def consumer (message):
	LOG.info('Msg from Client: ' + message)
	messageNo = commands.get(message, -1)
	LOG.info('Msg from Client: ' + str(messageNo))
	if messageNo == 0:
		LOG.info ('messageNo ' + str(messageNo) + ' no i elo')
	else: 
		LOG.info ('NO message found!')  

async def consumer_handler(websocket, path):
    async for message in websocket:
        await consumer(message)

async def producer():
    message = datetime.datetime.utcnow().isoformat() + 'Z'
    return message

async def producer_handler(websocket, path):
    while True:
	    message = await producer()
	    await websocket.send(message)
	    await asyncio.sleep(random.random() * 3)
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
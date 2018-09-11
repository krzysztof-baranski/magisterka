import React from 'react';

export class MediaService extends React.Component {
	constructor (props) {
		super(props);

		this.currentSource = {};
		this.listItems = [
			{
				trackID: 0,
				isFavorite: true,
				title: 'T1000'
			}
		];
		this.currentTrack = {
			trackID: 0,
			isFavorite: true,
			name: 'T1000'
		}
	}

}
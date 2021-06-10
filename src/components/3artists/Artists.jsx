import React, { useEffect, useState } from 'react';
import ArtistCard from './components/ArtistCard';
import ArtistCardNew from './components/ArtistCardNew';
import Artistfilterbutton from './filter/Artistfilterbutton';
import ArtistActionButton from './actions/ArtistActionButton';

import {
	getArtists,
	deleteArtist,
	putArtist,
	postArtist,
} from '../../api/artists';
import createKey from '../../helpers/createKey';

export default function Artists() {
	// Data complete Artist lists
	const [data, setData] = useState([]);
	const [dataNewArtist, setDataNewArtist] = useState([]);

	// Data complete new Artist
	const [listView, setListView] = useState(true);
	const [newArtistView, setNewArtistView] = useState(false);

	const dataRequest = async () => {
		const response = await getArtists();
		setData(response.data);
	};

	useEffect(() => {
		dataRequest();
	}, [listView]);

	// Refresh db
	const refresh = () => {};

	// Update Artist card
	const handleChange = (index) => (e) => {
		e.preventDefault();
		let newArr = data.map((item, i) => {
			if (index == i) {
				return { ...item, [e.target.name]: e.target.value };
			} else {
				return item;
			}
		});
		setData(newArr);
		console.log(data);
	};

	const handleSubmit = (index) => async (e) => {
		e.preventDefault();
		const id = e.target._id.value;
		try {
			await putArtist(id, data[index]);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
		console.log('target ID', id);
		console.log('this is exported data', data[index]);
	};

	// Delete Artist card
	const handleDelete = async (item) => {
		const artists = data.filter((artist) => artist._id !== item);
		setData(artists);

		try {
			await deleteArtist(item);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	// New Artist window
	const newCard = () => {
		if (listView) setNewArtistView(true);
		setListView(false);
	};

	const handleClose = () => {
		setNewArtistView(false);
		setListView(true);
	};

	// Post Artist card
	const handleChangeNew = (e) => {
		setDataNewArtist({
			...dataNewArtist,
			[e.target.name]: e.target.value,
		});
		console.log(dataNewArtist);
	};

	const handleSubmitNew = async () => {
		try {
			await postArtist(dataNewArtist);
			setListView(true);
			setNewArtistView(false);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	return (
		<>
			<div className="artist-filter">
				<Artistfilterbutton name="ONLINE" />
				<Artistfilterbutton name="OFFLINE" />
				<Artistfilterbutton name="ARCHIVED" />
				<form className="artist-filter-form">
					<label className="artist-filter-button" htmlFor="search">
						SEARCH:
					</label>
					<input
						className="artist-filter-input"
						type="text"
						name="search"
						id="search"
						placeholder=""
					></input>
					<div className="artist-filter-input-line"></div>
					<button className="artist-filter-button-submit">OK</button>
				</form>
			</div>
			<div className="artist-actions">
				<ArtistActionButton
					name="REFRESH"
					className="artist-actions-buttons"
					onClick={refresh}
				/>
				<ArtistActionButton
					name="NEW"
					className="artist-actions-buttons"
					onClick={newCard}
				/>
			</div>

			{listView && (
				<div className="artist-list">
					{data.map((item, index) => (
						<ArtistCard
							key={createKey(item, item._id, data)}
							id={item._id}
							name={item.name}
							events={item.events}
							description={item.description}
							website={item.website}
							imagesUrl={item.imagesUrl}
							links={item.links}
							pictures={() => item.imagesUrl.map((pic) => pic)}
							onSubmit={handleSubmit(index)}
							handleChange={handleChange(index)}
							handleDelete={() => handleDelete(item._id)}
						/>
					))}
				</div>
			)}
			{newArtistView && (
				<ArtistCardNew
					data={dataNewArtist}
					onClose={handleClose}
					onSubmit={handleSubmitNew}
					onChange={handleChangeNew}
				/>
			)}
		</>
	);
}

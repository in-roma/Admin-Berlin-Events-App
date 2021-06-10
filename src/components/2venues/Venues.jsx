import React, { useEffect, useState } from 'react';
import VenueCard from './components/VenueCard';
import VenueCardNew from './components/VenueCardNew';
import Venuefilterbutton from './filter/Venuefilterbutton';
import VenueActionButton from './actions/VenueActionButton';

import { getVenues, deleteVenue, putVenue, postVenue } from '../../api/venues';
import createKey from '../../helpers/createKey';

export default function Venues() {
	// Data complete Venue lists
	const [data, setData] = useState([]);
	const [dataNewVenue, setDataNewVenue] = useState([]);

	// Data complete new Venue
	const [listView, setListView] = useState(true);
	const [newVenueView, setNewVenueView] = useState(false);

	const dataRequest = async () => {
		const response = await getVenues();
		setData(response.data);
	};

	useEffect(() => {
		dataRequest();
	}, [listView]);

	// Refresh db
	const refresh = () => {};

	// Update Venue card
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
			await putVenue(id, data[index]);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
		console.log('target ID', id);
		console.log('this is exported data', data[index]);
	};

	// Delete Venue card
	const handleDelete = async (item) => {
		const venues = data.filter((venue) => venue._id !== item);
		setData(venues);

		try {
			await deleteVenue(item);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	// New Venue window
	const newCard = () => {
		if (listView) setNewVenueView(true);
		setListView(false);
	};

	const handleClose = () => {
		setNewVenueView(false);
		setListView(true);
	};

	// Post Venue card
	const handleChangeNew = (e) => {
		setDataNewVenue({
			...dataNewVenue,
			[e.target.name]: e.target.value,
		});
		console.log(dataNewVenue);
	};

	const handleSubmitNew = async () => {
		try {
			await postVenue(dataNewVenue);
			setListView(true);
			setNewVenueView(false);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	return (
		<>
			<div className="venue-filter">
				<Venuefilterbutton name="ONLINE" />
				<Venuefilterbutton name="OFFLINE" />
				<Venuefilterbutton name="ARCHIVED" />
				<form className="venue-filter-form">
					<label className="venue-filter-button" htmlFor="search">
						SEARCH:
					</label>
					<input
						className="venue-filter-input"
						type="text"
						name="search"
						id="search"
						placeholder=""
					></input>
					<div className="venue-filter-input-line"></div>
					<button className="venue-filter-button-submit">OK</button>
				</form>
			</div>
			<div className="venue-actions">
				<VenueActionButton
					name="REFRESH"
					className="venue-actions-buttons"
					onClick={refresh}
				/>
				<VenueActionButton
					name="NEW"
					className="venue-actions-buttons"
					onClick={newCard}
				/>
			</div>

			{listView && (
				<div className="venue-list">
					{data.map((item, index) => (
						<VenueCard
							key={createKey(item, item._id, data)}
							id={item._id}
							name={item.name}
							events={item.events}
							description={item.description}
							location={item.location}
							address={item.address}
							website={item.website}
							imagesUrl={item.imagesUrl}
							pictures={() => item.imagesUrl.map((pic) => pic)}
							onSubmit={handleSubmit(index)}
							handleChange={handleChange(index)}
							handleDelete={() => handleDelete(item._id)}
						/>
					))}
				</div>
			)}
			{newVenueView && (
				<VenueCardNew
					data={dataNewVenue}
					onClose={handleClose}
					onSubmit={handleSubmitNew}
					onChange={handleChangeNew}
				/>
			)}
		</>
	);
}

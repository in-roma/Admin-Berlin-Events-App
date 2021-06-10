import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import EventCardNew from './EventCardNew';
import Eventfilterbutton from './filter/Eventfilterbutton';
import EventActionButton from './actions/EventActionButton';

import { getEvents, deleteEvent, putEvent, postEvent } from '../../api/events';
import createKey from '../../helpers/createKey';

export default function Events() {
	// Data complete Event lists
	const [data, setData] = useState([]);
	const [dataNewEvent, setDataNewEvent] = useState([]);

	// Data complete new Event
	const [listView, setListView] = useState(true);
	const [newEventView, setNewEventView] = useState(false);

	const dataRequest = async () => {
		const response = await getEvents();
		setData(response.data);
	};

	useEffect(() => {
		dataRequest();
	}, [listView]);

	// Refresh db
	const refresh = () => {};

	// Update Event card
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
			await putEvent(id, data[index]);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
		console.log('target ID', id);
		console.log('this is exported data', data[index]);
	};

	// Delete Event card
	const handleDelete = async (item) => {
		const events = data.filter((event) => event._id !== item);
		setData(events);

		try {
			await deleteEvent(item);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	// New Event window
	const newCard = () => {
		if (listView) setNewEventView(true);
		setListView(false);
	};

	const handleClose = () => {
		setNewEventView(false);
		setListView(true);
	};

	// Post Event card
	const handleChangeNew = (e) => {
		setDataNewEvent({
			...dataNewEvent,
			[e.target.name]: e.target.value,
		});
		console.log(dataNewEvent);
	};

	const handleSubmitNew = async () => {
		try {
			await postEvent(dataNewEvent);
			setListView(true);
			setNewEventView(false);
		} catch (error) {
			if (error.response && error.response.status === 404);
		}
	};

	return (
		<>
			<div className="event-filter">
				<Eventfilterbutton name="ONLINE" />
				<Eventfilterbutton name="OFFLINE" />
				<Eventfilterbutton name="ARCHIVED" />
				<form className="event-filter-form">
					<label className="event-filter-button" htmlFor="search">
						SEARCH:
					</label>
					<input
						className="event-filter-input"
						type="text"
						name="search"
						id="search"
						placeholder=""
					></input>
					<div className="event-filter-input-line"></div>
					<button className="event-filter-button-submit">OK</button>
				</form>
			</div>
			<div className="event-actions">
				<EventActionButton
					name="REFRESH"
					className="event-actions-buttons"
					onClick={refresh}
				/>
				<EventActionButton
					name="NEW"
					className="event-actions-buttons"
					onClick={newCard}
				/>
			</div>

			{listView && (
				<div className="event-list">
					{data.map((item, index) => (
						<EventCard
							index={index}
							key={createKey(item, item._id, data)}
							id={item._id}
							event={item.event}
							artist={item.artist}
							type={item.type}
							venue={item.venue}
							date={item.date}
							time={item.time}
							price={item.price}
							address={item.address}
							description={item.description}
							imageUrl={item.imageUrl}
							utc={item.utc}
							onSubmit={handleSubmit(index)}
							handleChange={handleChange(index)}
							handleDelete={() => handleDelete(item._id)}
						/>
					))}
				</div>
			)}
			{newEventView && (
				<EventCardNew
					data={dataNewEvent}
					onClose={handleClose}
					onSubmit={handleSubmitNew}
					onChange={handleChangeNew}
				/>
			)}
		</>
	);
}

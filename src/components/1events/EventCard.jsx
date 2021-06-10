import React from 'react';

import EventCardLine from './EventCardLine';
import EventCardButton from './EventCardButton';
import EventCardButtonSubmit from './EventCardButtonSubmit';
import EventCardSelectButton from './EventCardSelectButton';

export default function EventCard({
	id,
	event,
	artist,
	type,
	venue,
	time,
	address,
	date,
	price,
	description,
	imageUrl,
	onSubmit,
	handleDelete,
	handleChange,
	handlePublish,
	rate,
	tag,
	utc,
}) {
	const optionsType = [
		{ value: 'exhibition', label: 'EXHIBITION' },
		{ value: 'opening', label: 'OPENING' },
		{ value: 'party', label: 'PARTY' },
	];
	const optionsRate = [
		{ value: 5, label: 5 },
		{ value: 4, label: 4 },
		{ value: 3, label: 3 },
		{ value: 2, label: 2 },
		{ value: 1, label: 1 },
	];
	const optionsTag = [
		{ value: 'pick', label: 'OUR PICK' },
		{ value: 'pick', label: 'RESIDENT ADVISOR PICK' },
	];

	return (
		<>
			<form className="event-card" onSubmit={onSubmit}>
				<div className="event-inner-card">
					<div className="eventcard-frame">
						<div className="event-picture-frame">
							<img src={imageUrl} className="event-picture" />
						</div>
						<div className="event-text-zone">
							{/* <h1>{event}</h1> */}
						</div>
					</div>
					<div className="eventcard-frame, event-card-infos">
						<EventCardLine
							label="ID:"
							typeInput="text"
							name="_id"
							defaultValue={id}
							onChange={handleChange}
						/>
						<EventCardLine
							label="Event:"
							typeInput="text"
							name="event"
							defaultValue={event}
							onChange={handleChange}
						/>
						<EventCardLine
							label="Artist:"
							typeInput="text"
							name="artist"
							defaultValue={artist}
							onChange={handleChange}
						/>
						<EventCardLine
							label="Venue:"
							typeInput="text"
							name="venue"
							defaultValue={venue}
							onChange={handleChange}
						/>
						<EventCardLine
							label="Price:"
							typeInput="text"
							name="price"
							defaultValue={price}
							onChange={handleChange}
						/>
						<EventCardLine
							label="Text:"
							typeInput="text"
							name="description"
							defaultValue={description}
							onChange={handleChange}
						/>
						<EventCardLine
							label="URL:"
							typeInput="text"
							name="imageUrl"
							defaultValue={imageUrl}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="event-buttons-right">
					<EventCardSelectButton
						options={optionsType}
						name="type"
						label="TYPE"
						onChange={handleChange}
						defaultValue={type}
						className="event-card-select-button"
					/>
					<EventCardSelectButton
						options={optionsRate}
						name="rate"
						label="RATE"
						onChange={handleChange}
						defaultValue={rate}
						className="event-card-select-button"
					/>
					<EventCardSelectButton
						options={optionsTag}
						name="tag"
						label="TAG"
						onChange={handleChange}
						defaultValue={tag}
						className="event-card-select-button"
					/>
				</div>
				<div className="event-buttons-bottom">
					<EventCardButton label="DELETE" onClick={handleDelete} />
					<EventCardButtonSubmit label="SAVE" onSubmit={onSubmit} />
					<EventCardButton label="ARCHIVE" onClick={handlePublish} />
				</div>
			</form>
		</>
	);
}

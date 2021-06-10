import React, { useState } from 'react';

import EventCardLine from './EventCardLine';
import EventCardButton from './EventCardButton';
import EventCardButtonSubmit from './EventCardButtonSubmit';
import EventCardSelectButton from './EventCardSelectButton';

export default function EventCard({
	onSubmitNew,
	imageUrl,
	onClose,
	handleInput,
	onSubmit,
	onChange,
	data,
	event,
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
							<img src={''} className="event-picture" />
						</div>
						<div className="event-text-zone">
							<EventCardLine
								label=""
								name="event"
								handleInput={onChange}
							/>
						</div>
					</div>
					<div className="eventcard-frame, event-card-infos">
						<EventCardLine
							label="Event:"
							name="event"
							onChange={onChange}
							defaultValue={data.event}
						/>
						<EventCardLine
							label="Artist:"
							name="artist"
							onChange={onChange}
							defaultValue={data.artist}
						/>
						<EventCardLine
							label="Type:"
							name="type"
							onChange={onChange}
							defaultValue={data.type}
						/>
						<EventCardLine
							label="Venue:"
							name="venue"
							onChange={onChange}
							defaultValue={data.venue}
						/>

						<EventCardLine
							label="Price:"
							name="price"
							onChange={onChange}
							defaultValue={data.price}
						/>

						<EventCardLine
							label="Text:"
							name="description"
							onChange={onChange}
							defaultValue={data.description}
						/>
						<EventCardLine
							label="URL:"
							name="imageUrl"
							defaultValue={data.imageUrl}
							onChange={onChange}
						/>
					</div>
				</div>
				<div className="event-buttons-right">
					<EventCardSelectButton
						options={optionsType}
						label="TYPE"
						handleInput={handleInput}
						className="event-card-select-button"
					/>
					<EventCardSelectButton
						options={optionsRate}
						label="RATE"
						handleInput={handleInput}
						className="event-card-select-button"
					/>
					<EventCardSelectButton
						options={optionsTag}
						label="TAG"
						handleInput={handleInput}
						className="event-card-select-button"
					/>
				</div>
				<div className="event-buttons-bottom">
					<EventCardButton label="CLOSE" onClick={onClose} />
					<EventCardButtonSubmit label="CREATE" onSubmit={onSubmit} />
				</div>
			</form>
		</>
	);
}

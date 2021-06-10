import React from 'react';

import VenueCardLine from './VenueCardLine';
import VenueCardButton from './VenueCardButton';
import VenueCardButtonSubmit from './VenueCardButtonSubmit';

export default function VenueCard({
	name,
	id,
	events,
	address,
	description,
	location,
	website,
	imagesUrl,
	onSubmit,
	handleChange,
	handleDelete,
	handlePublish,
}) {
	return (
		<>
			<form className="venue-card" onSubmit={onSubmit}>
				<div className="venue-inner-card">
					<div className="venue-card-frame">
						<div className="venue-picture-frame">
							<img src={imagesUrl[0]} className="venue-picture" />
						</div>
					</div>
					<div className="venue-card-frame, venue-card-infos">
						<VenueCardLine
							label="ID:"
							typeInput="text"
							name="_id"
							defaultValue={id}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Name:"
							typeInput="text"
							name="name"
							defaultValue={name}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Description:"
							typeInput="text"
							name="description"
							defaultValue={description}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Website:"
							typeInput="text"
							name="website"
							defaultValue={website}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Address:"
							typeInput="text"
							name="address"
							defaultValue={address}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Location:"
							typeInput="text"
							name="location"
							defaultValue={location}
							onChange={handleChange}
						/>
						<VenueCardLine
							label="Pictures:"
							typeInput="text"
							name="imagesUrl"
							defaultValue={imagesUrl}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="venue-buttons-bottom">
					<VenueCardButton label="DELETE" onClick={handleDelete} />
					<VenueCardButtonSubmit label="SAVE" onSubmit={onSubmit} />
					<VenueCardButton label="ARCHIVE" onClick={handlePublish} />
				</div>
			</form>
		</>
	);
}

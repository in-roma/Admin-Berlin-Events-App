import React from 'react';

import VenueCardLine from './VenueCardLine';
import VenueCardButton from './VenueCardButton';
import VenueCardButtonSubmit from './VenueCardButtonSubmit';

export default function VenueCard({
	data,
	onSubmit,
	handleDelete,
	onChange,
	handlePublish,
}) {
	return (
		<>
			<form className="venue-card" onSubmit={onSubmit}>
				<div className="venue-inner-card">
					<div className="venue-card-frame">
						<div className="venue-picture-frame">
							<img src={''} className="venue-picture" />
						</div>
					</div>
					<div className="venuecard-frame, venue-card-infos">
						<VenueCardLine
							label="Name:"
							typeInput="text"
							name="name"
							onChange={onChange}
							defaultValue={data.name}
						/>
						<VenueCardLine
							label="Description:"
							typeInput="text"
							name="description"
							onChange={onChange}
							defaultValue={data.description}
						/>
						<VenueCardLine
							label="Website:"
							typeInput="text"
							name="website"
							onChange={onChange}
							defaultValue={data.website}
						/>
						<VenueCardLine
							label="Address:"
							typeInput="text"
							name="address"
							onChange={onChange}
							defaultValue={data.address}
						/>
						<VenueCardLine
							label="Location:"
							typeInput="text"
							name="location"
							onChange={onChange}
							defaultValue={data.location}
						/>
						<VenueCardLine
							label="Pictures:"
							typeInput="text"
							name="imagesUrl"
							onChange={onChange}
							defaultValue={data.imagesUrl}
						/>
						<VenueCardLine
							label="Events:"
							typeInput="text"
							name="events"
							onChange={onChange}
							defaultValue={data.events}
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

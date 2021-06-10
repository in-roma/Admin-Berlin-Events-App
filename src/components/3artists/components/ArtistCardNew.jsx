import React from 'react';

import ArtistCardLine from './ArtistCardLine';
import ArtistCardButton from './ArtistCardButton';
import ArtistCardButtonSubmit from './ArtistCardButtonSubmit';

export default function VenueCard({
	data,
	onSubmit,
	handleDelete,
	onChange,
	handlePublish,
}) {
	return (
		<>
			<form className="artist-card" onSubmit={onSubmit}>
				<div className="artist-inner-card">
					<div className="artist-card-frame">
						<div className="artist-picture-frame">
							<img src={''} className="artist-picture" />
						</div>
					</div>
					<div className="artistcard-frame, artist-card-infos">
						<ArtistCardLine
							label="Name:"
							typeInput="text"
							name="name"
							onChange={onChange}
							defaultValue={data.name}
						/>
						<ArtistCardLine
							label="Description:"
							typeInput="text"
							name="description"
							onChange={onChange}
							defaultValue={data.description}
						/>
						<ArtistCardLine
							label="Website:"
							typeInput="text"
							name="website"
							onChange={onChange}
							defaultValue={data.website}
						/>
						<ArtistCardLine
							label="Pictures:"
							typeInput="text"
							name="imagesUrl"
							onChange={onChange}
							defaultValue={data.imagesUrl}
						/>
						<ArtistCardLine
							label="Links:"
							typeInput="text"
							name="links"
							onChange={onChange}
							defaultValue={data.links}
						/>
						<ArtistCardLine
							label="Events:"
							typeInput="text"
							name="events"
							onChange={onChange}
							defaultValue={data.events}
						/>
					</div>
				</div>
				<div className="artist-buttons-bottom">
					<ArtistCardButton label="DELETE" onClick={handleDelete} />
					<ArtistCardButtonSubmit label="SAVE" onSubmit={onSubmit} />
					<ArtistCardButton label="ARCHIVE" onClick={handlePublish} />
				</div>
			</form>
		</>
	);
}

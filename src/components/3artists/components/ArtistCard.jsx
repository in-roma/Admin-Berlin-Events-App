import React from 'react';

import ArtistCardLine from './ArtistCardLine';
import ArtistCardButton from './ArtistCardButton';
import ArtistCardButtonSubmit from './ArtistCardButtonSubmit';

export default function ArtistCard({
	name,
	id,
	events,
	description,
	website,
	imagesUrl,
	links,
	onSubmit,
	handleChange,
	handleDelete,
	handlePublish,
}) {
	return (
		<>
			<form className="artist-card" onSubmit={onSubmit}>
				<div className="artist-inner-card">
					<div className="artist-card-frame">
						<div className="artist-picture-frame">
							<img
								src={imagesUrl[0]}
								className="artist-picture"
							/>
						</div>
					</div>
					<div className="artist-card-frame, artist-card-infos">
						<ArtistCardLine
							label="ID:"
							typeInput="text"
							name="_id"
							defaultValue={id}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Name:"
							typeInput="text"
							name="name"
							defaultValue={name}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Description:"
							typeInput="text"
							name="description"
							defaultValue={description}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Website:"
							typeInput="text"
							name="website"
							defaultValue={website}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Pictures:"
							typeInput="text"
							name="imagesUrl"
							defaultValue={imagesUrl}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Events:"
							typeInput="text"
							name="events"
							defaultValue={events}
							onChange={handleChange}
						/>
						<ArtistCardLine
							label="Links:"
							typeInput="text"
							name="links"
							defaultValue={links}
							onChange={handleChange}
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

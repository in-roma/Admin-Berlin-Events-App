// Packages
import React, { useState } from 'react';

// Components
import SectionButton from './components/navigation/SectionButton';
import Events from './components/1events/Events';
import Venues from './components/2venues/Venues';
import Artists from './components/3artists/Artists';
import Reviews from './components/4reviews/Reviews';
import Users from './components/5users/Users';

function App() {
	const [section, setSection] = useState(<Events />);

	return (
		<>
			<div className="app-container">
				<div className="navigation-menu">
					<SectionButton
						name="EVENTS"
						onClick={() => setSection(<Events />)}
					/>
					<SectionButton
						name="VENUES"
						onClick={() => setSection(<Venues />)}
					/>
					<SectionButton
						name="ARTISTS"
						onClick={() => setSection(<Artists />)}
					/>
					<SectionButton
						name="REVIEWS"
						onClick={() => setSection(<Reviews />)}
					/>
					<SectionButton
						name="USERS"
						onClick={() => setSection(<Users />)}
					/>
				</div>
				<div className="app-content">{section}</div>
			</div>
		</>
	);
}

export default App;

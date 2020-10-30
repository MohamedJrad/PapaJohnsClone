import { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl, Popup } from 'react-map-gl';
import { CustomeMarker } from './CustomeMarker';

export const Map = () => {
	const [ viewport, setViewport ] = useState({
		longitude: 10.268038,
		latitude: 36.382739,
		zoom: 7.5,
		width: '80vw',
		height: '90vh'
	});
	const [ selectedPark, setSelectedPark ] = useState(null);

	const onClose = () => {
		setSelectedPark(null);
	};

	useEffect(() => {
		const listener = (e) => {
			if (e.key === 'Escape') {
				setSelectedPark(null);
			}
		};
		window.addEventListener('keydown', listener);

		return () => {
			window.removeEventListener('keydown', listener);
		};
	}, []);

	return (
		<div className="mx-8">
			<ReactMapGL
				{...viewport}
				mapboxApiAccessToken="MAP-BOX-KEY"
				onViewportChange={(viewport) => {
					setViewport(viewport);
				}}
			>
				<div>
					<div style={{ position: 'absolute', right: 0 }}>
						<NavigationControl />
					</div>
					{locations.map((location, index) => (
						<button
							onClick={(e) => {
								e.preventDefault();
								setSelectedPark(location);
							}}
						>
							<CustomeMarker location={location} />
						</button>
					))}

					{selectedPark ? (
						<Popup
							closeButton
							latitude={selectedPark.latitude}
							longitude={selectedPark.longitude}
							closeOnClick={false}
							onClose={() => {
								setSelectedPark(null);
							}}
							offsetTop={-10}
						>
							<p className="text-center w-56 p-2">{selectedPark.description}</p>
						</Popup>
					) : null}
				</div>
			</ReactMapGL>
		</div>
	);
};

const locations = [
	{
		latitude: 36.889098,
		longitude: 10.322283,
		description: `
Papa John's Ain Zaghouane | Tel : 71 724 000
Dimanche - Jeudi : 11H - 23H
Vendredi et Samedi : 11H - Minuit`
	},
	{
		latitude: 35.902483,
		longitude: 10.543816,
		description: `
Papa John's Sidi Khalifa | Tel : 71 724 000
Tout les jours 11H - Minuit`
	},
	{
		latitude: 36.76827,
		longitude: 10.239121,
		description: `

Papa John's Megrine | Tel : 71 724 000
Dimanche - Jeudi : 11H - 23H
Vendredi et Samedi : 11H - Minuit`
	},
	{
		latitude: 36.848528,
		longitude: 10.131369,
		description: `


Papa John's Jardins d El Menzah | Tel : 71 724 000
Dimanche - Jeudi : 11H - 23H
Vendredi et Samedi : 11H - Minuit`
	}
];

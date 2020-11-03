import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { MarkerLogo } from './MarkerLogo';

export const CustomeMarker = ({ location, Children }) => {
	return (
		<Marker longitude={location.longitude} latitude={location.latitude}>
			{Children}
			<MarkerLogo />
		</Marker>
	);
};

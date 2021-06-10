import http from './client';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/venues';

function elementUrl(id) {
	return `${apiEndPoint}/${id}`;
}

export function getVenues() {
	return http.get(apiEndPoint);
}

export function postVenue(element) {
	return http.post(apiEndPoint, element);
}

export function putVenue(id, element) {
	const body = { ...element };
	return http.put(elementUrl(id), body);
}

export function deleteVenue(id) {
	return http.delete(elementUrl(id));
}

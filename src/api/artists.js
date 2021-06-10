import http from './client';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/artists';

function elementUrl(id) {
	return `${apiEndPoint}/${id}`;
}

export function getArtists() {
	return http.get(apiEndPoint);
}

export function postArtist(element) {
	return http.post(apiEndPoint, element);
}

export function putArtist(id, element) {
	const body = { ...element };
	return http.put(elementUrl(id), body);
}

export function deleteArtist(id) {
	return http.delete(elementUrl(id));
}

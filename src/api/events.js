import http from './client';
import { apiUrl } from '../config.json';

const apiEndPoint = apiUrl + '/events';

function elementUrl(id) {
	return `${apiEndPoint}/${id}`;
}

export function getEvents() {
	return http.get(apiEndPoint);
}

export function postEvent(element) {
	return http.post(apiEndPoint, element);
}

export function putEvent(id, element) {
	const body = { ...element };
	return http.put(elementUrl(id), body);
}

export function deleteEvent(id) {
	return http.delete(elementUrl(id));
}

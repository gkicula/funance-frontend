
// API
const API = 'api/';

const API_DEV = {
	getCompetencies:  API + 'competencia',
	setCompetencies:  API + 'competencia'
};

export const environment = {
	production: false,
	api: API_DEV
};

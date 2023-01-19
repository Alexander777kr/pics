import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xh39EgU3482tuY5rT6mlRD5IxZWx6gzigOAwjqChyAY'
        },
        params: {
            query: term
        }
    });
    return response.data.results;
}

export default searchImages;
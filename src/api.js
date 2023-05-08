import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID IZ0UQx8DC6SUfAH2y1tUjkZ4DJ7hI3N-2IjklLE4tfk',
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;

import axios from 'axios';

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDY4Yzk3ZmE3ZmYwM2I1ZWM4NGUwZTkzMjQwODNjNSIsIm5iZiI6MTczOTQ0NTcxNC43ODcwMDAyLCJzdWIiOiI2N2FkZDVkMmYyOGQ5NWFkYjNkMGI0ZmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.lFphRX2elavmATnySvIJ6Lz-87ep0itdM2GeNf268dI';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
    headers: {
        Authorization: `Bearer ${TOKEN}`
    }
};

export const GetPopularMovie = async () => {
    const response = await axios.get('trending/movie/day', options);
    return response.data.results;
}




















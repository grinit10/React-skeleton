import axios from 'axios';
const url = 'http://localhost:3000/api/questions/';


export default fetchQuestions = () => axios.get(url);
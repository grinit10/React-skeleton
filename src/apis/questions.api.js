import axios from 'axios';
const url = 'http://localhost:3000/api/questions/';


const fetchQuestions = () => axios.get(url);

export default fetchQuestions;
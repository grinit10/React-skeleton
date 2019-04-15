import axios from 'axios';
const url = 'http://localhost:3000/api/questions/';


const fetchQuestion = question_id => axios.get(url + question_id);

export default fetchQuestion;
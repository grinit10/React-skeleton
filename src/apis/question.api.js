import axios from 'axios';
const url = 'http://localhost:3000/api/questions/';


export default fetchQuestion = question_id => axios.get(url + question_id);
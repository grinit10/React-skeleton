import axios from 'axios';
import { handleFetchQuestion } from './fetch-question-saga';

jest.mock('axios');
describe(`Fetch question saga`, () => {
    beforeAll(() => {
        
    })

    it(`should fetch the question`, async () => {
        const question = { question_id: 32 };
        axios.get.mockResolvedValue(question);
        const gen = handleFetchQuestion({ question_id: 32 });
        const { val } = await gen.next();
    })
})
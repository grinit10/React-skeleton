import { delay } from "redux-saga";

describe('Jest testing async', () => {
    it('Should work with setTimeout', done => setTimeout(done, 1000));

    it('Should work with promise', () => new Promise(done => setTimeout(done, 1000)));

    it('Should work with async', async () => await delay(1000));
});

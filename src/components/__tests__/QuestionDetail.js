import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail'
import renderer from 'react-test-renderer';
import React from 'react';

describe('The question details component testing', () => {

    describe(`The container element`, () => {
        describe(`mapStateToProps`, () => {
            it(`Should map the state to props correctly`, () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: 'This is a question'
                };
                const appState = {
                    questions: [sampleQuestion]
                }
                const ownProps = {
                    question_id: 42
                }
                const containerState = mapStateToProps(appState, ownProps)
                expect(containerState).toEqual(sampleQuestion)
            })
        })
    })

    describe('The display element', () => {
        it(`Should not regress`, () => {
            const tree = renderer.create(
                <QuestionDetailDisplay title='Thanks'></QuestionDetailDisplay>
            )
            expect(tree.toJSON()).toMatchSnapshot();
        })
    })
})
import React, {Component} from 'react';
import {ToggleCallPopup, ToggleQuestionPopup} from "components/modals/Call"
import styled from 'styled-components'

const CallAskDiv = styled.div`
    font-size: 2em;
    width: 100%;
    background-color: #ffffff;
    padding: 1.56em 0;
    margin-top: 1.56em;
    position: relative;
    z-index: 1;
    .inner {
        width: 14.88em;
        @media (max-width: 660px) {
            width: calc(100% - 30px);
            max-width: none;
        }
    }
    .title {
        font-family: "Ubuntu", sans-serif;
        font-weight: 500;
        text-align: center;
        font-size: 1em;
        color: #4a4a4a;
        margin-bottom: .94em;
        line-height: 0.4;
        @media (max-width: 660px) {
            font-size: 95%;
        }
    }
    .buttons {
        cursor: pointer;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        justify-content: space-between;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        @media (max-width: 660px) {
            flex-direction: column;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            align-items: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
        }
    }
    .button {
        font-size: 1.2rem;
        width: 14rem;
        display: block;
        color: #ffffff !important; /* blockText a перебивает! */
        text-decoration: none;
        background-color: #f4511e;
        padding: .91em 0;
        text-align: center;
        transition: all .4s;
        &:hover {
            background-color: #922d0e;
        }
        @media (max-width: 660px) {
            width: 15.33em;
            margin-bottom: 10px;
        }
    }
`;
class BottomHelper extends Component {

    render() {
        return (
            <CallAskDiv>
                <section className="block-callask">
                    <div className="inner">
                        <div className="title">Остались вопросы?</div>
                        <div className="title">Мы ответим!</div>
                        <div className="buttons">
                            <ToggleQuestionPopup targetID="question"><a className="button">Задай вопрос</a></ToggleQuestionPopup>
                            <ToggleCallPopup targetID="call_me_bottom"><a className="button">Закажи звонок</a></ToggleCallPopup>
                        </div>
                    </div>
                </section>
            </CallAskDiv>
        )
    }
}

export default BottomHelper

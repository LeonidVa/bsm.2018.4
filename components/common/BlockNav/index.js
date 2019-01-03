import React, {Component} from 'react';
import styled from "styled-components";

const BlockNavWrapper = styled.div`
    font-size: 1em;
    width: 34em;
    margin: 1.56em auto 0;
    background-color: #ffffff;
    position: relative;
    z-index: 1;
    @media (max-width: 900px) {
        width: 70%;
        min-width: 273px;
    }
    @media (max-width: 660px) {
        width: 100%;
        // font-size: 1.4em;
    }
`;

class BlockNav extends Component {
    render() {
        return (
            <BlockNavWrapper className="block-nav">{this.props.children}</BlockNavWrapper>
        )
    }
}

export default BlockNav;
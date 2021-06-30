import React from 'react';
import styled from 'styled-components';

export default function Divider() {
    return (
        <CustomDivider />
    )
}

// TODO: aclarar funcionamiento
const CustomDivider = styled.div`
    margin-${props => props.vertical ? 'left' : 'top' }: ${props => props.size ? props.size : '25' }px;
`;
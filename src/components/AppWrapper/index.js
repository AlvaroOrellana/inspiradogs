import React from "react";
import { StyledWrapper, PageWrapper } from "@StyledComponents/index"
import Header from '@Components/Header';
import Divider from '@Components/Divider';
import Selector from '@Components/Selector';
import Gallery from "@Components/Gallery";
import { goToNextPage } from "@Store/index";
import { BottomScrollListener } from "react-bottom-scroll-listener";
import { useDispatch } from "react-redux";

const AppWrapper = () => {
    const dispatch = useDispatch()

    return (
        <BottomScrollListener onBottom={() => dispatch(goToNextPage())}>
            <StyledWrapper className="App full-height" >
                <PageWrapper>
                    <Header />
                    <Divider />
                    <Selector />
                    <Divider />
                    <Gallery />
                </PageWrapper>
            </StyledWrapper>
        </BottomScrollListener>
    )
}

export default AppWrapper;
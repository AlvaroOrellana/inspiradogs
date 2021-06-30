import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getBreeds, getPictures } from '@Store';
import { SelectorWrapper, CustomSelect } from "@StyledComponents";

const customStyles = {
    option: (styles, {data}) => ({
        ...styles,
        textAlign: 'left',
        paddingLeft: data.subBreed ? '35px' : '',
        color: data.subBreed ? 'gray' : ''
    })
}

export default function Selector() {
    
    const breedList = useSelector((state) => state.breeds)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBreeds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SelectorWrapper>
            <CustomSelect options={breedList} onChange={e => dispatch(getPictures(e.value))} styles={customStyles} />
        </SelectorWrapper>
    )
}
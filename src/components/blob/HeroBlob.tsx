import * as React from "react"
import styled from "styled-components"
import BlobSVG from "../../images/blobs/hero-blob.svg"

const Wrapper = styled.img`
    max-height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
        z-index: -1;

    @media screen and (max-width: 1024px) {
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        height: 100%;
        width: 100%;
    }
`

interface HeroBlobProps {
    stickToTop?: boolean
    grayscale?: boolean
}

const HeroBlob: React.FC<HeroBlobProps> = ({
    stickToTop,
    grayscale
}) => {
    return (
        <Wrapper src={BlobSVG} alt="Blob image rendered from SVG" />
    )
}

export default HeroBlob
import * as React from "react"
import styled from "styled-components"
import BlobSVG from "../../images/blobs/footer-blob.svg"

const Wrapper = styled.img.attrs({
    draggable: false,
    loading: "lazy"
})`
    position: absolute;
    bottom: 0;
    left: -200px;
    width: auto;
    max-height: 100%;
    z-index: 0;

    @media screen and (max-width: 600px) {
        top: 0;
        transform: rotate(180deg);
    }
`

interface FooterBlobProps { }

const FooterBlob: React.FC<FooterBlobProps> = (props) => {
    return (
        <Wrapper src={BlobSVG} alt="Blob image rendered from SVG" />
    )
}

export default FooterBlob
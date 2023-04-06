import * as React from "react"
import styled from "styled-components"
import BlobSVG from "../../images/blobs/footer-blob.svg"

const Wrapper = styled.img.attrs({
    draggable: false
})`
    position: absolute;
    top: 0;
    left: 0;
    width: auto;
    max-height: 100%;
`

interface FooterBlobProps { }

const FooterBlob: React.FC<FooterBlobProps> = (props) => {
    return (
        <Wrapper src={BlobSVG} alt="Blob image rendered from SVG" />
    )
}

export default FooterBlob
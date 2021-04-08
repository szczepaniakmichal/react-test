import React, { useState } from 'react';

import ImageGallery from 'react-image-gallery';

import {
    Magnifier,
    MagnifierContainer,
    MagnifierPreview,
    MagnifierZoom,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";

import './App.css';
import './sass/app.scss'

export default function App() {

    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    // const [backgroundPosition, setBackgroundPosition] = useState('0px 0px');
    // const [backgroundImage, setBackgroundImage] = useState('none');
    // const [zoom, setZoom] = useState(false);

    const [smallImage, setSmallImage] = useState(images[0].thumbnail);
    const [biggerImage, setBiggerImage] = useState(images[0].original);


    // const handleMouseMove = e => {
    //     const { left, top, width, height } = e.target.getBoundingClientRect()
    //     const x = (e.pageX - left) / width * 300
    //     const y = (e.pageY - top) / height * 300
    //     setBackgroundPosition(`${x}px, ${y}px`)
    //     setBackgroundImage(`url(${e.target.src})`)
    //     setZoom(true)
    //
    // //     `url(${this.props.src})`
    // }

    // const handleMouseLeave = e => {
    //     setZoom(false)
    // }

    // const zoomPositionHandler = (e) => {
    //     const container = this.imgThumb
    //     const target = this.imgZoomed
    //     const containerBox = container.getBoundingClientRect()
    //     const transform = {
    //         x: (e.clientX - containerBox.left) / containerBox.width * 100,
    //         y: (e.clientY - containerBox.top) / containerBox.height * 100,
    //     }
    //
    //     target.style.height = containerBox.height
    //     target.style.transformOrigin = `${transform.x}% ${transform.y}%`
    // }

    const changeBiggerImage = (smallSrc, bigSrc) => {
        setSmallImage(smallSrc);
        setBiggerImage(bigSrc);
    }


    // console.log("backgroundPosition", backgroundPosition);
    // console.log("backgroundImage", backgroundImage);
    // console.log("biggerImage", biggerImage);

    return (
        <>
            <div className="gallery-container">
                <ul className="gallery-list">
                    {images.map((image, i) => (
                        <li>
                            <img src={image.thumbnail}
                                 alt={i + 1}
                                // onMouseOver={e => changeBiggerImage(e)}
                                 onMouseOver={() => changeBiggerImage(image.thumbnail, image.original)}
                            />
                        </li>
                    ))}
                </ul>

                <div className="preview-container">
                    <MagnifierContainer
                    >

                        {/*<div className="flex">*/}
                        {/*    <MagnifierPreview*/}
                        {/*        imageSrc={biggerImage}*/}
                        {/*        onMouseOver={(e) => {*/}
                        {/*            console.log("eeeeeeeeeeeee",e)*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</div>*/}


                        <SideBySideMagnifier
                            imageSrc={smallImage}
                            // imageSrc={images[0].thumbnail}
                            className="input-position"
                            style={{order: true ? "1" : "0"}}
                            largeImageSrc={biggerImage}
                            // largeImageSrc={images[0].original}
                            alwaysInPlace={false}
                            overlayOpacity={0.6}
                            switchSides={false}
                            zoomPosition="left"
                            inPlaceMinBreakpoint={641}
                            fillAvailableSpace={true}
                            fillAlignTop={false}
                            fillGapTop={10}
                            fillGapRight={10}
                            fillGapBottom={10}
                            fillGapLeft={0}
                            zoomContainerBorder="1px solid #ccc"
                            zoomContainerBoxShadow="0 4px 8px rgba(0,0,0,.5)"
                        />
                    </MagnifierContainer>
                </div>
            </div>








        </>
    );
}
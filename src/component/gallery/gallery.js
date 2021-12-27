import React, { useState } from "react";
import './gallery.css';
import { Col, Container, Row, } from "reactstrap";
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import './data.json';
import Card from "../gallery-card/card";
import img from "../../constant/images";
import lanStore from "../../constant/language";


const GalleryWarp = () => {
    const [name, setName] = useState('Cat');
    const [age, setAge] = useState(5);
    const [image, setImg] = useState();

    const handleClick = (e) => {
        if (image) {
            setImg('');
        }
        else {
            setImg(img.img1)
        }
        e.preventDefault();
    }
    const vishal = { type: "pr ajj tk nhi aya", m: '@i_vishal_sharma' };

    const [language, setLanguage] = useState();
    const lanButton = (e, languageName) => {
        // if (language) {
        //     setLanguage('')
        // }
        // else {
            setLanguage(languageName);
            e.preventDefault();
        // }
    };

    return (
        <div>
            <Row>
                {console.log(img)}
                <Col md="12">
                    <div className="gallery_header">
                        <iframe src='./gallery.mp4'
                            frameBorder='0'
                            allow='autoplay'
                            allowFullScreen
                            title='video'
                            width="100%"
                            height="100%"
                        />
                        <iframe src='./gallery.mp4'
                            frameBorder='0'
                            allow='autoplay'
                            allowFullScreen
                            title='video'
                            width="100%"
                            height="100%"
                        />
                        <Container>
                            <h1>Gallery</h1>
                        </Container>
                        <iframe src='./gallery.mp4'
                            frameBorder='0'
                            allow='autoplay'
                            allowFullScreen
                            title='video'
                            width="100%"
                            height="100%"
                        />
                        <iframe src='./gallery.mp4'
                            frameBorder='0'
                            allow='autoplay'
                            allowFullScreen
                            title='video'
                            width="100%"
                            height="100%"
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Container>
                        <div className="text">
                            <h1>Gallery</h1>
                            <Gallery>
                                <Item
                                    original="./img1.jpg"
                                    thumbnail="./img1_1.jpg"
                                    width="1024"
                                    height="2219"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img1_1.jpg" />
                                    )}
                                </Item>
                                <Item
                                    original="./img2.jpg"
                                    thumbnail="./img2_1.jpg"
                                    width="1024"
                                    height="640"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img2_1.jpg" />
                                    )}
                                </Item>
                                <Item
                                    original="./img3.jpg"
                                    thumbnail="./img3_1.jpg"
                                    width="1024"
                                    height="683"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img3_1.jpg" />
                                    )}
                                </Item>
                                {/* <Item
                                original="./img4.jpg"
                                thumbnail="./img4_1.jpg"
                                width="1024"
                                height="576"
                            >
                                {({ ref, open }) => (
                                    <img ref={ref} onClick={open} src="./img4_1.jpg" />
                                )}
                            </Item> */}
                                <Item
                                    original="./img5.jpg"
                                    thumbnail="./img5_1.jpg"
                                    width="1024"
                                    height="1536"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img5_1.jpg" />
                                    )}
                                </Item>
                                <Item
                                    original="./img6.jpg"
                                    thumbnail="./img6_1.jpg"
                                    width="1024"
                                    height="576"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img6_1.jpg" />
                                    )}
                                </Item>
                                <Item
                                    original="./img7.jpg"
                                    thumbnail="./img7_1.jpg"
                                    width="1024"
                                    height="537"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img7_1.jpg" />
                                    )}
                                </Item>
                                <Item
                                    original="./img8.jpg"
                                    thumbnail="./img8_1.jpg"
                                    width="1024"
                                    height="576"
                                >
                                    {({ ref, open }) => (
                                        <img ref={ref} onClick={open} src="./img8_1.jpg" />
                                    )}
                                </Item>
                            </Gallery>
                        </div>
                    </Container>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col md="12">
                        <form className="gallery_from">
                            <p>{name} is {age} years old</p>
                            <img src={image} style={{ margin: "20px auto", width: "50%" }} />
                            <button onClick={(e) => handleClick(e)}>Click me</button>
                        </form>
                    </Col>
                    <Col md="12" style={{ textAlign:"center", margin:"20px auto"}}>
                        <button type="button" onClick={(e) => lanButton(e, "hindi")}>Hindi</button>
                        <button type="button" style={{ margin:"0px 20px" }} onClick={(e) => lanButton(e, "english")}>English</button>
                        <button type="button" onClick={(e) => lanButton(e, "urdu")}>Urdu</button>
                    </Col>
                    <Col md="12" style={{ textAlign:"center"}}>
                        {language === "hindi"
                            ? lanStore.hindiText
                            : language === "english"
                            ? lanStore.englishText
                            : language === "urdu"
                            ? lanStore.urduText
                            : null
                        }
                        </Col>
                    <Col md="12" style={{ textAlign: "center", marginTop: "20px" }}>
                        {/* <Card /> */}
                        5 minutes me aaya {vishal.type}  {vishal['m']}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default GalleryWarp;
import React, { useState } from 'react';
import './style.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: './header_image.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
  },
  {
    src: './header_image1.jpg',
    // altText: 'Slide 2',
    // caption: 'Slide 2'
  },
  {
    src: './header_image3.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3'
  }
];

const HeaderSlider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="silder_text">
        <h1>Dummy Text</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
      </div>
      <Carousel className="topSlider"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </>
  );
}

export default HeaderSlider;
import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from "reactstrap";
import Slider from "react-slick";
import styles from "./slider.module.scss";

const items = [
  {
    src: "/Assets/alpha_new/sliderr.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/Assets/alpha_new/sliderr.png",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/Assets/alpha_new/sliderr.png",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const items_mob = [
  {
    src: "/Assets/college/middle.png",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/college/left_1.png",
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: "/Assets/college/left_2.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: "/Assets/college/right_1.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/college/right_2.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/college/right_3.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
  {
    src: "/Assets/college/right_4.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const SliderSection = ({ heading }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  const slides_mob = items_mob.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          style={{ width: "100%", height: "auto" }}
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider_container}>
      <h1>MEET THE APEZ</h1>
      {/* <section className='d-none d-md-block'>
        <Carousel activeIndex={activeIndex} next={next} previous={previous}>
          {slides}
        </Carousel>
      </section> */}
      <section className="d-block d-md-none p-3">
        <Slider {...settings}>
          {items_mob.map((item) => {
            return (
              <section className={styles.mob_slider}>
                <img src={item.src} />
              </section>
            );
          })}
        </Slider>
      </section>
      {/* <section className={styles.arrow_section + ' d-none d-md-flex'}>
        {activeIndex === 0 ? (
          <img src='/Assets/alpha_new/arr_left.png' />
        ) : (
          <img onClick={previous} src='/Assets/alpha_new/c_left.png' />
        )}
        {activeIndex === 2 ? (
          <img src='/Assets/alpha_new/arr_right.png' />
        ) : (
          <img onClick={next} src='/Assets/alpha_new/c_right.png' />
        )}
      </section> */}
      <div className={styles.collage_container + " d-none d-md-block"}>
        <Row>
          <Col xs={3}>
            <section className={styles.sec_left}>
              <img src="/Assets/college/left_1.png" />
              <img src="/Assets/college/left_2.jpg" />
            </section>
          </Col>
          <Col style={{ paddingRight: "0" }} xs={6}>
            <section className={styles.sec_mid}>
              <img src="/Assets/college/middle.png" />
            </section>
          </Col>
          <Col style={{ paddingLeft: "3px" }} xs={3}>
            <section className={styles.sec_left}>
              <img src="/Assets/college/right_1.jpg" />
              <img src="/Assets/college/right_2.jpg" />
            </section>
            {/* <section className={styles.sec_right}>

                  <img src='/Assets/alpha_new/college/right_3.jpg' />
                  <img src='/Assets/alpha_new/college/right_4.jpg' />

            </section>  */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SliderSection;

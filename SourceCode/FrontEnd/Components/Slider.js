import SimpleImageSlider from "react-simple-image-slider";
// import Slide1 from 'src/images/slider1.jpg'
// import Slide2 from '../assets/images/slider2.jpg'
// import Slide3 from '../assets/images/slider3.jpg'

const images = [
    { url: '../assets/images/slider1.jpg' },
    { url: '../assets/images/slider2.jpg' },
    { url: '../assets/images/slider3.jpg' },
  ];
  const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={"100%"}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          style={{objectFit:"content"}}
        />
      </div>
    );
  }

  export default Slider;
// src/pages/Home.jsx
import { useSpring, animated } from '@react-spring/web';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef ,useState} from 'react';
// import HeroOne from "../components/HeroOne"
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer/Footer';
// import HeroTwo from '../components/HeroTwo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import About from '../components/About/About';
import Team from '../components/Team/Team'
import Contact from '../components/Contact';
import FAQ from '../components/Faq';
import Gallery from '../components/Gallery'
import Review from '../components/Review';
import PastWorks from '../components/PastWorks';
import GalleryComponent from '../components/GalleryComponent'
import Product from '../components/Product';
import InfiniteScrollText from '../components/InfiniteScrollText';
import Advisors from '../components/Advisory/Advisory'; 
















function Home() {
  // Animations for sections
  const heroAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000 } });
  
  const testimonialAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 400 } });
  const reviewAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 600 } });
  const pastWorksAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 800 } });


   // Create a reference for Swiper to control the carousel programmatically
  const swiperRef = useRef(null);

  // Animations for sections

  // Function to go to next slide
  const [swiper, setSwiper] = useState(null);

  const galleryAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

  const goToPrevSlide = () => swiper?.slidePrev();
  const goToNextSlide = () => swiper?.slideNext();

  // gsap
 






  return (
    <div className="bg-gray-50">

        {/* Hero section 1 */}
        {/* <HeroOne/> */}
        {/* <HeroTwo/> */}
        <section id='home'>
        <HeroSection/>
        <InfiniteScrollText/>


        </section>
    
      {/* Hero Section */}
    

      {/* About Section
      <section id="about">
      <About/>

      </section> */}


      {/* Product Section */}
      <section id='products' className="py-16 px-4">
        <Product/>

</section>



      {/* Testimonials Section */}
   

      {/* Reviews Section */}
      {/* <section id='reviews'>

      <Review/>

      </section> */}

      {/* Past Works Section */}
      {/* <section id='pastworks'>
        <PastWorks/>

      </section> */}
      {/* Team section */}
      {/* <section id="team" >
      
      
      <Team/>
         

      </section> */}
       {/* Advisors section */}
       {/* <section id="advisors" >
      
      
      <Advisors/>
         

      </section> */}
      {/* <section id="recoginition" >
      
      
      <Gallery/>
         

      </section> */}
      {/* <section id="gallery" >
      
      
      <GalleryComponent
           galleryAnimation={galleryAnimation}
           goToPrevSlide={goToPrevSlide}
           goToNextSlide={goToNextSlide}
      
      
      />
         

      </section> */}

      {/* <div className="bg-gray-50 "> */}
      {/* Gallery Section */}
    
    {/* </div> */}
    {/* contact section  */}
    {/* <section id='contact'> */}

      {/* <Contact/> */}
    {/* </section> */}

    {/* FAQS SECTION */}
    <FAQ/>

 {/* footer */}
 {/* <section>
 <Footer/>

 </section> */}

    </div>
  );
}

export default Home;

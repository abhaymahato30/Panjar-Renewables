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









// import images 
import cooker from '../assets/products/cooker.jpg'
import dcsystem from '../assets/products/dcsystem.jpg'
import distilator from '../assets/products/distilator.jpg'
import dryer from '../assets/products/dryer.jpg'
import eycycle from '../assets/products/eycycle.jpg'

import grasscutter from '../assets/products/grasscutter.jpg'
import hat from '../assets/products/hat.jpg'
import lawngrass from '../assets/products/lawngrass.jpg'
import powersource from '../assets/products/powersource.jpg'
import tent from '../assets/products/tent.jpg'
import tree from '../assets/products/tree.jpg'






function Home() {
  // Animations for sections
  const heroAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000 } });
  const productAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 200 } });
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
  useGSAP(
    () => {
        // gsap code here...
        
         
  // var tl2 =gsap.timeline({
  //   scrollTrigger:{
  //     trigger:"section2",
  //     scroller:"body",
  //     markers:true,
  //     start:"top 50%",
  //     end:"top 0",
  //     scrub:2

  //   }
  // })
  // tl2.from(".services",{
  //   x:-300,
  //   opacity:0

  // });

         
       
    }
);






  return (
    <div className="bg-gray-50">

        {/* Hero section 1 */}
        {/* <HeroOne/> */}
        {/* <HeroTwo/> */}
        <HeroSection/>
    
      {/* Hero Section */}
    

      {/* About Section */}
      <section id="about">
      <About/>

      </section>


      {/* Product Section */}
      <section id='products' className="py-16 px-4">
  <animated.div style={productAnimation} className="text-center">
    <h2 className="text-4xl font-bold text-blue-600">Our Products</h2>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={cooker} alt="Product 1" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR COOKER</h3>
          <p className="mt-2 text-gray-600">A solar-powered cooker ideal for use in rural and off-grid areas to reduce dependency on traditional fuels.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={distilator} alt="Product 2" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR DISTILLATOR</h3>
          <p className="mt-2 text-gray-600">A solar distiller designed to optimize sunlight for herb and distilled water extraction, ideal for small-scale industries.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={dryer} alt="Product 3" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">HYBRID SOLAR DRYER</h3>
          <p className="mt-2 text-gray-600">A solar-powered dryer for efficiently processing farm produce, reducing spoilage and enhancing quality.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={hat} alt="Product 4" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR CAP</h3>
          <p className="mt-2 text-gray-600">The Solar Cap is a wearable, solar-powered accessory equipped with small panels that charge devices on the go. Perfect for outdoor activities, it combines convenience with sustainable energy.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={dcsystem} alt="Product 5" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">DC SOLAR SYSTEM</h3>
          <p className="mt-2 text-gray-600">A small solar lamp, compact, portable, and ideal for indoor or outdoor use. It charges during the day and provides eco-friendly illumination at night.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={eycycle} alt="Product 6" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">EV CYCLE</h3>
          <p className="mt-2 text-gray-600">An eco-friendly electric cycle powered by solar energy, designed for efficient and sustainable personal transportation.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={lawngrass} alt="Product 7" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">LAWN GRASS CUTTER</h3>
          <p className="mt-2 text-gray-600">A compact, solar-powered lawn cutter ideal for small to medium-sized lawns. It provides an eco-friendly solution for lawn maintenance.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={powersource} alt="Product 8" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">POWER SOURCE</h3>
          <p className="mt-2 text-gray-600">A solar energy source designed to power various farm and industrial tools like pumps and machinery.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={grasscutter} alt="Product 9" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">HAND HELD GRASS CUTTER</h3>
          <p className="mt-2 text-gray-600">A robust, solar-powered tool for larger lawns and tougher vegetation. Its ergonomic design ensures easy handling, providing an eco-friendly landscaping solution.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tent} alt="Product 10" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR TENT</h3>
          <p className="mt-2 text-gray-600">An eco-friendly shelter equipped with solar panels to generate power for lighting and charging small devices. Perfect for camping and off-grid use.</p>
        </div>
      </div>

      {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tree} alt="Product 11" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR TREE</h3>
          <p className="mt-2 text-gray-600">A solar-powered tree structure that captures sunlight efficiently to power urban utilities like charging stations and lighting. A perfect blend of technology and nature.</p>
        </div>
      </div>
        {/* Product Card */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tree} alt="Product 11" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR POWER BANK</h3>
          <p className="mt-2 text-gray-600">A solar power bank is a portable,
eco-friendly charger that uses
solar energy to recharge its
battery, ideal for off-grid use. It
often includes high-efficiency
panels, a durable casing, and
features like fast charging and
LED lights.</p>
        </div>
      </div>  {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tree} alt="Product 11" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR SPRAYER</h3>
          <p className="mt-2 text-gray-600">A solar fertilizer sprayer is an
eco-friendly agricultural tool
powered by solar energy,
designed to spray fertilizers or
pesticides efficiently across
crops. It reduces fuel costs,
minimizes emissions, and ensures
consistent spraying with minimal
environmental impact</p>
        </div>
      </div>  {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tree} alt="Product 11" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SMART BENCH</h3>
          <p className="mt-2 text-gray-600">A solar smart bench is an
outdoor seating solution
equipped with solar panels to
power USB charging ports, Wi-Fi,
and lighting. It provides a
sustainable, eco-friendly way for
users to recharge devices and
access connectivity in public
spaces</p>
        </div>
      </div>  {/* Product Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img src={tree} alt="Product 11" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-900">SOLAR INSECT TRAP</h3>
          <p className="mt-2 text-gray-600">The Solar Insect Trap uses solar
power to attract and capture
harmful insects, protecting crops
without the use of chemicals.
Ideal for sustainable farming, it
reduces pest damage while being
environmentally friendly and
cost-effective</p>
        </div>
      </div>
    </div>
  </animated.div>
</section>



      {/* Testimonials Section */}
   

      {/* Reviews Section */}
      <section id='reviews'>

      <Review/>

      </section>

      {/* Past Works Section */}
      <section id='pastworks'>
        <PastWorks/>

      </section>
      {/* Team section */}
      <section id="team" >
      
      
      <Team/>
         

      </section>
      <section id="recoginition" >
      
      
      <Gallery/>
         

      </section>
      <section id="gallery" >
      
      
      <GalleryComponent
           galleryAnimation={galleryAnimation}
           goToPrevSlide={goToPrevSlide}
           goToNextSlide={goToNextSlide}
      
      
      />
         

      </section>

      <div className="bg-gray-50 ">
      {/* Gallery Section */}
    
    </div>
    {/* contact section  */}
    <section id='contact'>

      <Contact/>
    </section>

    {/* FAQS SECTION */}
    <FAQ/>

 {/* footer */}
 <section>
 <Footer/>

 </section>

    </div>
  );
}

export default Home;

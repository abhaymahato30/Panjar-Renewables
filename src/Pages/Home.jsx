// src/pages/Home.jsx
import { useSpring, animated } from '@react-spring/web';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef } from 'react';
import HeroOne from "../components/HeroOne"
import Footer from '../components/Footer/Footer';
// import HeroTwo from '../components/HeroTwo';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import About from '../components/About/About';
import Team from '../components/Team/Team'
import Contact from '../components/Contact';

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
  const galleryAnimation = useSpring({ opacity: 1, transform: 'translateY(0)', from: { opacity: 0, transform: 'translateY(20px)' }, config: { duration: 1000, delay: 1000 } });

  // Function to go to next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Function to go to previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

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
        <HeroOne/>
        {/* <HeroTwo/> */}
    
      {/* Hero Section */}
      <section className="section2 h-screen bg-cyan-950  text-white flex items-center justify-center px-4">
        <animated.div style={heroAnimation} className="services text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold">Welcome to Our Amazing Products</h1>
          <p className="mt-4 text-lg">We offer the best products to take your business to the next level. Discover what we have to offer!</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300">
            Learn More
          </button>
        </animated.div>
      </section>

      {/* About Section */}
      <section id="about">
      <About/>

      </section>


      {/* Product Section */}
      <section id='products'  className="py-16 px-4">
        <animated.div style={productAnimation} className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Our Products</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/jcxW3npRY4xurWPBkQaT9Djx-QUvq9_GxNUOsAIEXLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NjgyMzI0My92ZWN0/b3Ivc29sYXItb3Zl/bi1pY29uLWluLXZl/Y3Rvci1sb2dvdHlw/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MjhXaGNMWTZM/ZkFzb2pfTnBRZjNK/QjI2b3d2bjlKVjZ5/VlRNN2p4Q09aUT0" alt="Product 1" className="w-80 h-80 " />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 1</h3>
                <p className="mt-2 text-gray-600">Amazing product that will help you achieve your goals faster!</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/5KwOLEqgwE2B2_J2c8eeMjX63JkjNAOxzUUdia5_-Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA5LzA1LzUy/LzM2MF9GXzQwOTA1/NTIxNF9KUG9OQkdy/dzZXamhLcVdwMVNq/NFdGUGhmSGpxTUFp/Vy5qcGc" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 2</h3>
                <p className="mt-2 text-gray-600">Innovative design that meets your needs and expectations!</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/NVqt7fzRWZYoKqz5-WJ0gq1SjcX1YURdvHa_VENeqqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MTY0NDcxNS92ZWN0/b3IvYXV0dW1uLXRy/ZWUtc3ltYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/Y2JhSnVUdmVaZVVa/TndQSXl0UjdlZEpk/aWRFV1hsaktBNzVw/MDR3U1FjPQ" alt="Product 3" className="w-80 h-80" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 3</h3>
                <p className="mt-2 text-gray-600">The perfect product for your everyday needs.</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/jcxW3npRY4xurWPBkQaT9Djx-QUvq9_GxNUOsAIEXLs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/NjgyMzI0My92ZWN0/b3Ivc29sYXItb3Zl/bi1pY29uLWluLXZl/Y3Rvci1sb2dvdHlw/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MjhXaGNMWTZM/ZkFzb2pfTnBRZjNK/QjI2b3d2bjlKVjZ5/VlRNN2p4Q09aUT0" alt="Product 1" className="w-80 h-80 " />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 1</h3>
                <p className="mt-2 text-gray-600">Amazing product that will help you achieve your goals faster!</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/5KwOLEqgwE2B2_J2c8eeMjX63JkjNAOxzUUdia5_-Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzA5LzA1LzUy/LzM2MF9GXzQwOTA1/NTIxNF9KUG9OQkdy/dzZXamhLcVdwMVNq/NFdGUGhmSGpxTUFp/Vy5qcGc" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 2</h3>
                <p className="mt-2 text-gray-600">Innovative design that meets your needs and expectations!</p>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center flex-col">
              <img src="https://imgs.search.brave.com/NVqt7fzRWZYoKqz5-WJ0gq1SjcX1YURdvHa_VENeqqw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/MTY0NDcxNS92ZWN0/b3IvYXV0dW1uLXRy/ZWUtc3ltYm9sLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz02/Y2JhSnVUdmVaZVVa/TndQSXl0UjdlZEpk/aWRFV1hsaktBNzVw/MDR3U1FjPQ" alt="Product 3" className="w-80 h-80" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Product 3</h3>
                <p className="mt-2 text-gray-600">The perfect product for your everyday needs.</p>
              </div>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-16 px-4">
        <animated.div style={testimonialAnimation} className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">What Our Clients Say</h2>
          <div className="mt-8 space-y-8">
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto">
              <p className="text-lg text-gray-600">"This product changed the way we do business. We saw a dramatic increase in productivity."</p>
              <p className="text-gray-500">CEO, TechCo</p>
            </div>
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto">
              <p className="text-lg text-gray-600">"Highly recommend! The support team is incredible, and the product is easy to use."</p>
              <h4 className="mt-4 font-semibold">Jane Smith</h4>
              <p className="text-gray-500">Founder, DesignLab</p>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Reviews Section */}
      <section id='reviews' className="py-16 px-4">
        <animated.div style={reviewAnimation} className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Our Reviews</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">★★★★★</h3>
              <p className="mt-2 text-gray-600">"Amazing product! Worth every penny. Will buy again."</p>
              <h4 className="mt-4 font-semibold">Michael Johnson</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">★★★★★</h3>
              <p className="mt-2 text-gray-600">"The best product I've used in a long time. Highly recommend it to others!"</p>
              <h4 className="mt-4 font-semibold">Sarah Lee</h4>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold">★★★★★</h3>
              <p className="mt-2 text-gray-600">"Exceptional quality and excellent customer service. Very satisfied!"</p>
              <h4 className="mt-4 font-semibold">Chris Brown</h4>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Past Works Section */}
      <section className="py-16 px-4 bg-gray-100">
        <animated.div style={pastWorksAnimation} className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Our Past Works</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/work1.jpg" alt="Past Work 1" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Project 1</h3>
                <p className="mt-2 text-gray-600">A description of this project and the challenges we solved.</p>
                <a href="/projects/project1" className="mt-4 inline-block text-blue-600 hover:text-blue-500 transition-all duration-300">Learn More</a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/work2.jpg" alt="Past Work 2" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Project 2</h3>
                <p className="mt-2 text-gray-600">Another example of our work. We delivered results ahead of time!</p>
                <a href="/projects/project2" className="mt-4 inline-block text-blue-600 hover:text-blue-500 transition-all duration-300">Learn More</a>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src="/work3.jpg" alt="Past Work 3" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Project 3</h3>
                <p className="mt-2 text-gray-600">A showcase of our expertise in delivering high-quality solutions.</p>
                <a href="/projects/project3" className="mt-4 inline-block text-blue-600 hover:text-blue-500 transition-all duration-300">Learn More</a>
              </div>
            </div>
          </div>
        </animated.div>
      </section>

      {/* Team section */}
      <section id="team" >
      
      
      <Team/>
         

      </section>

      <div className="bg-gray-50 ">
      {/* Gallery Section */}
      <section className="py-16 px-4 bg-white">
        <animated.div style={galleryAnimation} className="text-center">
          <h2 className="text-4xl font-bold text-blue-600">Our Gallery</h2>

          {/* Swiper Carousel */}
          <div className="relative mt-8">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={false} // We will use custom navigation controls
              pagination={{ clickable: true }}
              loop={true}  // Makes the carousel loop
              autoplay={{
                delay: 3000, // 3 seconds for each slide
                disableOnInteraction: false, // Keeps autoplay active after user interaction
              }}
              className="my-swiper"
            >
              <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1701207573585-3ac478804b2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="w-full h-64 object-cover rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1730871083804-ceaeb8c08e79?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery 2" className="w-full h-64 object-cover rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1701207573585-3ac478804b2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery 3" className="w-full h-64 object-cover rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://images.unsplash.com/photo-1730871083804-ceaeb8c08e79?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery 4" className="w-full h-64 object-cover rounded-lg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://plus.unsplash.com/premium_photo-1701207573585-3ac478804b2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery 5" className="w-full h-64 object-cover rounded-lg" />
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Controls */}
            <div className="absolute top-1/2 z-10 left-0 transform -translate-y-1/2 pl-4">
              <button
                onClick={goToPrevSlide}
                className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 z-10 right-0 transform -translate-y-1/2 pr-4">
              <button
                onClick={goToNextSlide}
                className="text-white bg-blue-600 hover:bg-blue-700 p-2 rounded-full shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </animated.div>
      </section>
    </div>
    {/* contact section  */}
    <section id='contact'>

      <Contact/>
    </section>

 {/* footer */}
 <section>
 <Footer/>

 </section>

    </div>
  );
}

export default Home;

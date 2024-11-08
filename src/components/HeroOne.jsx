import Carousel from 'react-bootstrap/Carousel';


function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Carousel.Caption className="top-32 md:top-1/2">
                    <p className="text-3xl md:text-4xl font-extrabold">The sun's energy is endless—let’s harness it to power a sustainable future for generations to come</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://plus.unsplash.com/premium_photo-1678743133487-d501f3b0696b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Carousel.Caption className="top-32 md:top-1/2">
          
          <p className="text-3xl md:text-4xl font-extrabold">When the sun shines, the world thrives. Let’s make the most of it with solar energy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="h-screen w-screen" src="https://images.unsplash.com/photo-1463173904305-ba479d2123b7?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" text="Third slide" />
        <Carousel.Caption className="top-32 md:top-1/2">
                    <p className="text-3xl md:text-4xl font-extrabold">
                    Every ray of sunlight is an opportunity for a cleaner, greener world. Let’s seize that opportunity
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
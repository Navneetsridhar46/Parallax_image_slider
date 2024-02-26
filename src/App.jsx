import React, { useRef, useState } from 'react';
import { Stack, Button } from '@mui/material'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'ease-in-out',
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
      setCurrentSlide(index);
    }
  };

  return (
    <>
    <div>
      <Navbar expand="lg" className="" style={{ backgroundColor: 'black', zIndex: '2' }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ display: 'flex', gap: '20px',alignItems:'center' }} >
              <img style={{height:'30px'}} src="https://www.skullcandy.in/wp-content/themes/skullcandy/images/skullcandy_logo.svg" alt="" />
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link">SHOP</Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link"><i className="fa-brands fa-instagram"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#link"><i className="fa-brands fa-twitter"></i></Nav.Link>
            </Nav>

            <Nav className="p-3" style={{ marginLeft: '500px', display: 'flex', gap: '20px',alignItems:'center' }}>
              <Nav.Link style={{ fontSize: '20px', color: 'grey' }} href="#support">Support</Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#user"><i class="fa-regular fa-user"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#search"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
              <Nav.Link style={{ fontSize: '20px', color: 'white' }} href="#bag"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='parallax-container' style={{

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',

        backgroundRepeat: 'no-repeat',


        zIndex: '1'
      }}>
        <div className="parallax-section parallax-section1"></div>
        <div className="content">
          <h1 className='heading1'>SKULLCANDY' <b>SHOPPE</b></h1>

        </div>
      </div>

      <div className='container'>
        <div className=" row video border p-4 mt-3 rounded container">
          <div className="col-lg-5">
            <h2 style={{height:'80px'}}><b>SLEEK BUDS, ELEVATED SOUND.</b></h2>
            <p>Pure and simple.
              On the road to high-tech, feature-packed earbuds, some brands have forgotten what people really want — comfortable, stylish earbuds with full, clear sound. We haven’t forgotten. Smokin’ Buds look great and they sound better. Sure, they come with intuitive touch controls, sweat- and water-resistant construction and a mic in each earbud. But the priority is big, clean sound and lots of it.</p>
            <Stack direction="row" spacing={2}>
              <Button style={{ width: '50%', height: '70px' }} variant="contained">READ MORE</Button>
              <Button style={{ width: '50%', height: '70px' }} className='bg-dark' variant="outlined">BUY NOW</Button>

            </Stack>

          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img style={{ width: '500px' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/09/10909_17772.jpg" alt="" />
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: '2' }} className='mt-4'>
        <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={2000}>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/10/10610_17473.jpg" alt="Image 1" />
          </div>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/06/10044_16982.jpg" alt="Image 2" />
          </div>
          <div>
            <img style={{ height: '500px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/09/10759_17622.jpg" alt="Image 3" />
          </div>
        </Slider>
      </div>

      <div style={{ position: 'absolute', top: '1500px', right: '20px', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', zIndex: '3' }}>
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '10px',
              height: '10px',
              marginBottom: '5px',
              background: index === currentSlide ? 'blue' : 'gray',
              border: 'none',
              cursor: 'pointer',

            }}
          />
        ))}
      </div>

      <div className='parallax-container' style={{

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px',

        backgroundRepeat: 'no-repeat',


        zIndex: '1'
      }}>
        <div className="parallax-section parallax-section2"></div>
        <div className="content">
          <h1 className='heading1'>Only <b>Skullcandy</b>audio is custom-tuned to deliver music you can feel. From the lyrics in your soul to the bass in your bones.</h1>

        </div>
      </div>
      <div className='mt-5' >
        <h1 style={{ textAlign: 'center' }}><b>SHOP</b></h1>

        <div className='container-fluid'>
          <div className="row mb-5">
            <div className="col-lg-6"><div style={{ position: 'relative', zIndex: '2' }} className=" mt-5">
              <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={1900}  >
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/09/10908_17771.jpg" alt="Image 1" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Smokin’ Buds® True Wireless Earbuds</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/08/1-2.jpg" alt="Image 2" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Rail® ANC True Wireless Earbuds</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/gg1.jpg" alt="Image 3" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Dime® 2 True Wireless Earbuds</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/08/8-d.jpg" alt="Image 4" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Mod® True Wireless Earbuds</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2022/03/1-2.jpg" alt="Image 5" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Push™ Active True Wireless Earbuds</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/06/Anc-1-scaled.jpg" alt="Image 6" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Sesh® ANC True Wireless Earbuds</h3>
                </div>
              </Slider>
            </div></div>
            <div className="col-lg-6"><div style={{ position: 'relative', zIndex: '2' }} className=" mt-5">
              <Slider ref={sliderRef} {...sliderSettings} autoplay={true} autoplaySpeed={1900}  >
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/09/1.jpg" alt="Image 1" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2021/07/5680_12583.jpg" alt="Image 2" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Crusher® Evo Sensory Bass Headphones with Personal Sound</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2021/07/new1.webp" alt="Image 3" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Hesh® Evo Wireless Headphones</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2023/06/1-4.jpg" alt="Image 4" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>SLYR® Wired Black Gaming Headset</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2021/07/2268_5488.webp" alt="Image 5" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Riff On-Ear Headphone</h3>
                </div>
                <div>
                  <img style={{ height: '250px', width: '100%' }} src="https://d3lnc7yu1ksdj.cloudfront.net/wp-content/uploads/2021/07/7660_14563.jpg" alt="Image 6" />
                  <h3 className='mt-2' style={{ textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Cassette™ Wireless On-Ear Headphones</h3>
                </div>
              </Slider>
            </div></div>
          </div>
        </div>
      </div>
    </div>

<div className='container-fluid justify-content-between p-4 bg-dark' style={{ display: 'flex', height: '350px',color:'white' }}>
<div className='media p-2' style={{ width: '40%',color:'red' }}>
    <h5 style={{height:'30px'}}><i class="fa-solid fa-phone me-1 "></i>Contact Us</h5>
    <h6 style={{height:"20px"}}>Email :- customercare@brandeyes.in</h6>
    <p>Phone :- 011-42700400</p>
    <p>Mon-Fri, 10 AM – 4 PM</p>
</div>

<div className='links flex-column d-flex p-2'>
    <h5 style={{height:'30px'}}>Help Center</h5>
    <a to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Contact us</a>
    <a to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Product Help</a>
    <a to={'/watch'} style={{ textDecoration: 'none', color: 'white' }}>Warranty</a>
    <a to={'/watch'} style={{ textDecoration: 'none', color: 'white' }}>Order Status</a>
</div>

<div className='guides d-flex flex-column p-2'>
    <h5 style={{height:'30px'}}>Bulk Orders</h5>
    <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.skullcandy.in/press-releases/" target=''>Press</a>
    <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.skullcandy.in/press-releases/" target=''>Releases</a>
    <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.skullcandy.in/blogs/" target=''>Blogs</a>
    <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.skullcandy.in/participate-contest/" target=''>Contest</a>
</div>

<div className='contact us p-2'>
    <h5 style={{height:'30px'}}>Follow us</h5>
    <div className='d-flex'>
        <input type="text" className='form-control' placeholder='Enter your email id' />
        <button className='btn btn-danger ms-2'><i style={{height:'20px'}} class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div className='p-2 mt-2' style={{alignItems:'center', justifyContent:'space-between',display:'flex'}}>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-solid fa-message"></i></a>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-twitter"></i></a>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-linkedin"></i></a>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-instagram"></i></a>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-github"></i></a>
        <a style={{color:'white'}} href="http://"><i style={{height:'100px'}} class="fa-brands fa-whatsapp"></i></a>

    </div>
</div>
</div>
<p style={{color:'grey'}} className='text-center bg-dark mb-3'>© 2024 Skullcandy.com All Rights Reserved</p>

</>
  );
}

export default App;
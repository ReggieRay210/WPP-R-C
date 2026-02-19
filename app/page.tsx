"use client"
import Image from 'next/image';
import {useEffect, useState} from "react"

const learnBtn = 'rounded-2xl px-1.5 bg-[#490077] text-white  ';
const card = 'relative w-1/3 bg-amber-50 rounded-2xl px-1.5 pb-10 box-shadow ';
const btnpostion = 'absolute bottom-0 left-1/2 -translate-x-1/2';
const tableText = 'text-sm';
const images = [
  "/Bathroom-remodel.png",
  "/Full-home_remodel.png",
  "/Kitchen_coastal_remodel.png",
  "/kitchenRemodel.jpg",
]


function HeroCarousel(){
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() =>{
      setCurrent(prev => (prev + 1)% images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          fill
          style={{borderRadius: '2%', maxWidth:"750px",placeSelf:"center"}}
          alt="Hero Image"
          priority={index === 0}
          className={`object-cover transition-opacity duration-700 ${index === current ? "opacity-100": "opacity-0"}`}
          unoptimized
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      {/* Hero Carousel */}
      <HeroCarousel/>
      {/* ------------------- */}

      {/* company slogan and brief description */}
      <div className="m-2">
        <h3 className="text-[#907600] font-bold text-stroke text-3xl text-center">
          Transform your space to make the most of your home.
        </h3>
        <div className="p-3 shadow-xl rounded-md mx-auto max-w-screen-sm mb-5">
          <p className="text-xs text-black">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </div>
      {/* ------------------- */}

      {/* Services offered Section */}
      <div className="flex gap-2 text-black">
        <div className={`${card}`}>
          <div className="flex gap-2 pb-2">
            <div className="w-1/2">
              <Image
                src="/kitchenRemodel.jpg"
                width={400}
                height={500}
                alt="Kitchen Remodel"
                style={{ borderRadius: '20%' }}
                unoptimized
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/Bathroom-remodel.png"
                width={400}
                height={400}
                alt="Kitchen Remodel"
                style={{ borderRadius: '20%' }}
                unoptimized
              />
            </div>
          </div>
          <div>
            <h4 className="font-bold">Kitchen & Bath Remodel</h4>
            <p className="text-wrap text-xs">
              Tired of the cookie-cutter design and wish to add a little
              creativity? Our Mission is to ensure a custom one-of-a-kind design
              while maintaining functionality.
            </p>
          </div>
          <div className={`${btnpostion}`}>
            <button className={`${learnBtn}`}>
              <p className="text-sm">Learn More</p>
            </button>
          </div>
        </div>

        <div className={`${card}`}>
          <div className="w-1/2 place-self-center pb-2">
            <Image
              src="/Full-home_remodel.png"
              width={200}
              height={200}
              alt="Full Home Remodel"
              style={{ borderRadius: '20%' }}
              unoptimized
            />
          </div>
          <div>
            <h4 className="font-bold">Full-Home Remodel</h4>
            <p className="text-wrap text-xs">
              Looking to do a complete home make-over? A full home remodel is
              more than just starting fresh, it is an opportunity to create your
              own unique home that is tailored to fit your lifestyle and
              interests.
            </p>
          </div>
          <div className={`${btnpostion}`}>
            <button className={`${learnBtn}`}>
              <p className="text-sm">Learn More</p>
            </button>
          </div>
        </div>

        <div className={`${card}`}>
          <div className="w-1/2 place-self-center pb-2">
            <Image
              src="/UnfinishedRoom.png"
              width={200}
              height={200}
              alt="Room Unfinished"
              style={{ borderRadius: '20%' }}
              unoptimized
            />
          </div>
          <div>
            <h4 className="font-bold">Construction</h4>
            <p className="text-wrap text-xs">
              Need work with Plumbing, Painting, Drywall and plaster,
              Electrical, Flooring, or Structural?
            </p>
          </div>
          <div className={`${btnpostion}`}>
            <button className={`${learnBtn}`}>
              <p className="text-sm">Learn More</p>
            </button>
          </div>
        </div>
      </div>
      {/* ------------------- */}

      {/* footer */}
      <div className="flex items-center space-x-10 bg-[#D9D9D9] mt-10 border-x-4 border-t-4 rounded-t-xl border-[#490077]">
        <Image
          src="/companylogo.png"
          width={100}
          height={100}
          alt="Company Logo"
          style={{ borderRadius: '50%', margin: '10px' }}
          unoptimized
        />
        <div>
          <table className="border-separate border-spacing-x-10 text-black">
            <thead>
              <tr>
                <th>Hours</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${tableText}`}>Monday-Sunday</td>
                <td className={`${tableText}`}>Phone:(123) 456-7890</td>
              </tr>
              <tr>
                <td className={`${tableText}`}>8:00AM - 4:00PM</td>
                <td className={`${tableText}`}>email@email.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

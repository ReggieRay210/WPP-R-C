'use client'
import Image from 'next/image';
import {useState} from "react";

const inputText = "w-full border border-gray-400 rounded-md";
const checkBoxDescription = "ml-4 text-md text-gray-600";

function BookingForm(){
  const [startDate, setStartDate] = useState("");
}


export default function Page() {
  return (
    <main className="max-h-svh">
      <div className=" grid grid-cols-2 grid-rows-3 gap-1">
        <div>
          <Image
            src="/Full-home_remodel.png"
            width={600}
            height={600}
            alt="Full Home"
            style={{borderRadius:"23%"}}
            unoptimized
          />
        </div>
        <div className="row-span-3 bg-white mt-1 mb-3 rounded-md p-2">
          <form action="#" className="grid grid-cols-2 grid-rows-12 gap-1 ">
            <div>
              <label htmlFor="fname">First Name</label>
              <input type="text" placeholder="First Name" className={`${inputText}`}/>
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input type="text" placeholder="Last Name" className={`${inputText}`}/>
            </div>
            <div className="col-span-2 row-span-2">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="email@email.com" className={`${inputText}`}/>
              <label htmlFor="phone">Phone #</label>
              <input type="text" placeholder="(000) 000-0000" className={`${inputText}`}/>
            </div>
            
            <div className="row-span-9 row-start-4 mt-4">
              <label htmlFor="service-checkbox">
                <input type="checkbox" /> Kitchen Remodel
                <p className={`${checkBoxDescription}`} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat.</p>
              </label>
              <label htmlFor="service-checkbox">
                <input type="checkbox" /> Bathroom Remodel
                <p className={`${checkBoxDescription}`} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat.</p>
              </label>
              <label htmlFor="service-checkbox">
                <input type="checkbox" /> Full-House Remodel
                <p className={`${checkBoxDescription}`} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat.</p>
              </label>
              <label htmlFor="service-checkbox">
                <input type="checkbox" /> Construction
                <p className={`${checkBoxDescription}`} >Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat.</p>
              </label>
              
            </div>
            <div className="row-span-9 row-start-4 ">5</div>
            <div className="col-span-2 row-start-13">
              <label htmlFor="project-description" className="block mt-2">Tell us about your project.</label>
              <textarea className="border border-gray-400 rounded-md w-full" name="project-description" id="project-description" placeholder="Type here."></textarea>
            </div>
            <input className="border shadow-md rounded-md bg-[#907600] text-white  " type="submit" value="Submit"/>
          </form>
        </div>
        <div className="row-span-2 mt-3">
          <h6 className="font-bold">Contact:</h6>
          <p>(123) 456-7890</p>
          <p>email@email.com</p>
          <h6 className="font-bold">Hours:</h6>
          <p>Monday - Sunday</p>
          <p>8:00AM - 4:00PM</p>
        </div>
      </div>
    </main>
  );
}

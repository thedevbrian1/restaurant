import { Form, Link, useActionData, useTransition } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ArrowRightIcon } from "~/components/Icon";
import MenuCard from "~/components/MenuCard";
import Special from "~/components/Special";
import TestimonialCard from "~/components/TestimonialCard";
import Input from "~/components/Input";
import { badRequest, hours, validateCapacity, validateDate, validateMessage, validatePhone, validateTime } from "~/utils";


export async function action({ request }) {
  const formData = await request.formData();
  const date = formData.get('date');
  const time = formData.get('time');
  const quantity = formData.get('quantity');
  const phone = formData.get('phone');
  const specialEvent = formData.get('specialEvent');
  const specialEventDetails = formData.get('specialEventDetails');

  console.log({ date, time, quantity, phone, specialEvent, specialEventDetails });

  console.log(hours.includes(time));

  const fields = { date, time, quantity, phone, specialEventDetails };
  const fieldErrors = {
    date: validateDate(date),
    time: validateTime(time),
    quantity: validateCapacity(quantity),
    phone: validatePhone(phone),
    specialEventDetails: validateMessage(specialEventDetails)
  };

  // Return errors if any
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fields, fieldErrors });
  }
  return redirect('/success');
}

export default function Index() {
  return (
    <main>
      {/* Hero section */}
      <Hero />
      {/* Specials section */}
      <Specials />
      {/* Menus section */}
      <Menus />
      {/* Testimonials section */}
      <Testimonials />
      {/* Form */}
      <ContactForm />
      {/* Footer */}
      <Gallery />
    </main>
  );
}

function Hero() {
  return (
    <section className="w-full h-screen  bg-[url('/hero.jpg')] bg-center bg-no-repeat ">
      <div className="w-full h-full grid place-items-center  bg-gradient-to-b from-a11y-1 via-[#5c0244]">
        <div className="grid gap-3 lg:gap-6 place-items-center px-5">
          <h1 className="text-3xl lg:text-6xl font-semibold font-heading">
            Experience Heaven in your Mouth
          </h1>
          <p className="text-lg lg:text-2xl font-text">
            The best of Nairobian drinks and meals in one spot
          </p>
          <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto px-4 lg:px-auto">
            <Link to="/#reserve" className="px-6 py-2 w-full lg:w-auto text-center bg-white text-black rounded-lg">
              Make Reservation
            </Link>
            <Link to="/" className="px-6 py-2 w-full lg:w-auto text-center border border-white rounded-lg">
              Order Here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Specials() {
  const specials = [
    {
      title: 'Date Night',
      day: 'Tuesdays',
      time: '7pm till late',
    },
    {
      title: 'Karaoke Night',
      day: 'Wednesdays',
      time: '7-11pm',
    },
    {
      title: 'Afrobeats Night',
      day: 'Thursdays',
      time: '7pm till late',
    },
    {
      title: 'Deejay Showdown',
      day: 'Fridays',
      time: '7pm till late',
    }
  ];
  return (
    <section className="bg-light-gray w-full text-black py-16 lg:py-20">
      <div className="w-4/5 mx-auto grid lg:grid-cols-2 gap-5 lg:gap-14">
        <div className="order-2 lg:order-none">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src="/man-serving-burger.jpg"
              alt=""
              width="100%"
              height="100%"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 self-center order-1 lg:order-none">
          <h2 className="font-semibold text-2xl lg:text-4xl font-heading">Enjoy our weekly specials</h2>
          <p className="text-a11y-1 text-xl lg:text-2xl">Awesome experiences at Restaurant KE</p>
          <p className="text-light-black">Don't get left out of the hottest vibes in Nairobi's hypest spot.</p>
          <div className="grid lg:grid-cols-2 gap-2 mt-3">
            {/* Grid with icons */}
            {
              specials.map((item, index) => (
                <Special special={item} key={index} index={index} />
              ))
            }
          </div>
          <Link to="/events" className="text-a11y-1 underline hover:text-a11y-2">
            View our events calendar <ArrowRightIcon className="ml-1 w-5 h-5 inline" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Menus() {
  const menus = [
    {
      title: 'Lunch',
      imageUrl: '/burger.jpg',
      id: 1,
    },
    {
      title: 'Dinner',
      imageUrl: '/dinner.jpg',
      id: 2,
    },
    {
      title: 'Cocktails',
      imageUrl: '/cocktails.jpg',
      id: 3,
    },
    {
      title: 'Beer/Wines',
      imageUrl: '/beer.jpg',
      id: 4,
    }
  ];
  return (
    <section className="relative bg-a11y-1 text-a11y-2 fill-light-gray">
      <div className="w-4/5 lg:max-w-6xl mx-auto pt-48 lg:pt-52">
        <div className="grid gap-5">
          <h2 className="font-semibold text-2xl lg:text-5xl text-center font-heading">Our Menus</h2>
          <p className="text-center">The best specialties from Africa, Asia, Europe and beyond.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
              menus.map((menu, index) => (
                <MenuCard bgImageUrl={menu.imageUrl} title={menu.title} key={menu.id} />
              ))
            }
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-32 py-10">
            <div className="flex flex-col gap-3">
              <p className="font-bold  text-xl lg:text-2xl font-heading">You can now order online from Restaurant</p>
              <p>We now actively deliver meals to your doorstep on <span className="font-bold">Uber Eats</span> and <span className="font-bold">Glovo</span></p>
              <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-3">
                <Link to="/" className="py-2 px-6 w-2/3 lg:w-auto text-center rounded-lg bg-white text-black">
                  Order on Glovo
                </Link>
                <Link to="/" className="py-2 px-6 w-2/3 lg:w-auto text-center rounded-lg border border-white text-white">
                  Order on Uber Eats
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="aspect-w-4 aspect-h-3 lg:aspect-h-1 lg:aspect-w-1 w-60 lg:w-72">
                <img
                  src="/order.svg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full leading-[0] overflow-hidden">
        <svg className="relative block h-[150px] w-[calc(101% + 1.3px)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className="fill-light-gray"></path>
        </svg>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-a11y-1 text-a11y-2">
      <div className="w-4/5 lg:max-w-6xl mx-auto py-16 lg:py-20 grid gap-5">
        <h2 className="font-semibold text-2xl lg:text-5xl text-center font-heading">What Customers Say</h2>
        <p className="text-center ">
          Over 1000 reviews on Google, Yelp and Facebook
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const actionData = useActionData();

  const transition = useTransition();
  const isSubmitting = transition.submission;

  const [showAdditional, setShowAdditional] = useState(false);

  const dateRef = useRef(null);
  const quantityRef = useRef(null);
  const phoneRef = useRef(null);
  const specialEventDetailsRef = useRef(null);
  // const hours = ['12 (Midnight)', '1 a.m.', '2 a.m.', '3 a.m.', '4 a.m.', '5 a.m.', '6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 (Noon)', '1 p.m', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.', '9 p.m.', '10 p.m.', '11 p.m.'];

  // TODO: Collect more details for reservation e.g whether it is a special occasion
  // Use a checkbox to activate the more details section
  // Special occasions include birthdays, graduation party, valentine's
  return (
    <section id="reserve" className="w-4/5 lg:max-w-6xl mx-auto py-16 lg:py-20 grid gap-5 justify-items-center">
      <h2 className="font-semibold text-2xl lg:text-5xl text-black font-heading">Your next meal awaits @ Restaurant KE</h2>
      <p className="font-bold text-a11y-1 text-xl lg:text-2xl">123 Street, Nairobi</p>
      <Form method="post" className="w-full lg:w-auto">
        <fieldset className="text-black px-4 lg:px-10 ">
          <div className="flex flex-col lg:flex-row flex-wrap gap-3 lg:items-start">
            <div>
              <label htmlFor="date">Day</label>
              <Input
                ref={dateRef}
                type="date"
                name="date"
                id="date"
                fieldError={actionData?.fieldErrors.date}
              />
            </div>
            <div>
              <label htmlFor="time">Time</label>
              <select
                name="time"
                id="time"
                className="w-full lg:w-auto border border-gray-300 text-light-black  rounded block shadow-sm"
                defaultValue={hours[12]}
              >
                {hours.map((hour, index) => (
                  <option
                    value={hour}
                    key={index}
                  // selected={hour === '12 (Noon)'}
                  >
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Number of people</label>
              <Input
                ref={quantityRef}
                type='number'
                name='quantity'
                id='quantity'
                placeholder='2'
                fieldError={actionData?.fieldErrors.quantity}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <Input
                ref={phoneRef}
                type='text'
                name='phone'
                id='phone'
                placeholder='0710 162 152'
                fieldError={actionData?.fieldErrors.phone}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="specialEvent"
                id="specialEvent"
                onClick={() => setShowAdditional(prev => !prev)}
                className="rounded mr-2"
              />
              <label htmlFor="specialEvent">This is a special occasion</label>
            </div>
            {showAdditional &&
              <div>
                <label htmlFor="specialEventDetails">What kind of occasion is it?</label>
                <Input
                  ref={specialEventDetailsRef}
                  type='text'
                  name='specialEventDetails'
                  id='specialEventDetails'
                  placeholder='Birthday, Anniversary...'
                  fieldError={actionData?.fieldErrors.specialEventDetails}
                />
              </div>
            }
          </div>
          <button type="submit" className="w-full lg:w-auto bg-a11y-1 text-a11y-2 lg:h-11 mt-4 py-2 px-6 rounded-lg">
            {isSubmitting ? 'Reserving...' : 'Reserve a Table'}
          </button>
        </fieldset>
      </Form>
    </section>
  )
}

function Gallery() {
  gsap.registerPlugin(ScrollTrigger);

  const galleryRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#rect1, #rect2, #rect3", {
        xPercent: 100,
        ease: 'expo',
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: '#images',
        }
      })
    }, galleryRef);
    return () => {
      ctx.revert();
    }
  }, []);
  return (
    <div className="bg-a11y-1 py-8 lg:py-16 xl:py-20" ref={galleryRef}>
      {/* <div className="columns-2 lg:columns-3 gap-1 lg:gap-x-2 w-4/5 lg:max-w-4xl mx-auto">
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2 ">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-0.5 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
        <div className="break-inside-avoid p-1 mb-1 lg:p-2 lg:mb-2">
          <img
            src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover rounded-lg"
          />
        </div>
      </div> */}
      <div className="max-w-xs lg:max-w-xl mx-auto">
        <svg viewBox="0 0 100 100" id="images">
          <mask id="blueClip">
            <rect id="rect1" x="30" y="0" width="70" height="50" fill="white" />
          </mask>

          <mask id="greenClip">
            <rect id="rect2" x="60" y="60" width="40" height="40" fill="white" />
          </mask>

          <mask id="pinkClip">
            <rect id="rect3" x="0" y="30" width="50" height="70" fill="white" />
          </mask>

          <image preserveAspectRatio="xMidYMid slice" mask="url(#blueClip)" x="30" y="0" width="70" height="50" href="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

          <image preserveAspectRatio="xMidYMid slice" mask="url(#greenClip)" x="60" y="60" width="40" height="40" href="https://images.pexels.com/photos/784633/pexels-photo-784633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

          <image preserveAspectRatio="xMidYMid slice" mask="url(#pinkClip)" x="0" y="30" width="50" height="70" href="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </svg>
      </div>
    </div>
  )
}
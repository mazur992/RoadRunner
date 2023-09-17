import React from 'react';
import { HomeStyle } from './Home.styled';

export default function Home() {
  return (
    <HomeStyle>
      {/* <div className="companyName">RoadRunner</div> */}
      {/* <p> */}
      <div className="companyName">
        <header>
          <h1>Welcome to RoadRunner Car Rentals in Ukraine</h1>
        </header>

        <section>
          <h2>Our Services</h2>
          <ul>
            <li>
              <strong>Wide Selection:</strong> Choose from our diverse fleet of
              vehicles, including compact cars, SUVs, luxury cars, and more. We
              have the perfect car to suit your needs and preferences.
            </li>
            <li>
              <strong>Flexible Rental Options:</strong> We offer flexible rental
              durations, from hourly rentals for quick city trips to long-term
              rentals for extended journeys.
            </li>
            <li>
              <strong>Competitive Rates:</strong> Enjoy competitive rental rates
              that fit any budget. Our transparent pricing ensures you know
              exactly what you're paying for.
            </li>
            <li>
              <strong>24/7 Support:</strong> Our dedicated customer support team
              is available around the clock to assist you with any questions or
              concerns.
            </li>
          </ul>
        </section>

        <section>
          <h2>Why Choose RoadRunner?</h2>
          <ul>
            <li>
              <strong>Quality and Safety:</strong> Our vehicles are regularly
              maintained to ensure your safety and comfort throughout your
              journey.
            </li>
            <li>
              <strong>Convenient Booking:</strong> Easily book your rental car
              online, and we'll have it ready for you when and where you need
              it.
            </li>
            <li>
              <strong>Local Expertise:</strong> As a local car rental service,
              we know Ukraine inside and out. We can provide recommendations on
              the best routes, places to visit, and more.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> We prioritize customer
              satisfaction above all else. Your experience with RoadRunner is
              our top priority.
            </li>
          </ul>
        </section>

        <section>
          <h2>Explore Ukraine with RoadRunner</h2>
          <p>
            Ukraine's rich history, diverse landscapes, and vibrant cities are
            waiting to be discovered. With RoadRunner, you can explore Ukraine
            at your own pace and on your terms.
          </p>
          <p>
            Ready to start your journey? Browse our selection of vehicles,
            choose your rental duration, and book your car today. RoadRunner -
            Your Key to Ukraine's Roads!
          </p>
        </section>
      </div>
    </HomeStyle>
  );
}

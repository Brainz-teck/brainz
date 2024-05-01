import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  CardDeal,
  Business,
  Button,
  Clients,
  CTA,
  FeedBackCard,
  Footer,
  GetStarted,
  Testimonials,
} from "./components";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats />  <Billing />  <CardDeal /> <Contactform /> <PrivacyPolicy />*/}
          <Business />
          <Clients /> <CTA />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

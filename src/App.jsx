import styles from './style';

const App = () => (

  <div className="bg-primary w-full overflow-hidden">
    {/* NAVBAR */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar here
      </div>
    </div>

    {/* HERO */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero here
      </div>
    </div>

    {/* CONTENT */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Statistics 
        Business 
        Billing 
        CardDeal 
        Testimonials 
        Clients 
        CTA 
        Footer
      </div>
    </div>
  </div>

);

export default App;

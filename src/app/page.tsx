import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* fix header */}
      <header className="flex flex-row items-center p-12">
        <div>Something here</div>
        <div>Something else</div>
        <div>Something again</div>
      </header>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="">

          {/* fix main title and title */}
          <h1>Welcome to Web3Manifold</h1>
          <br />
          <p>Our goal is to create the best Web3 learning path for developers</p>
         
          <br />
          <p>Learn Solidity, DeFi patterns, about NFTs, security and more</p>

          {/* create section and add text */}
          <div className="section-overview">
            <br />
            <p>Our goal is to create excellent Solidity and web3 technical content in a fast, iterative, and consistent manner. 
              We aim to be the most comprehensive web3 development resource, covering beginner, intermediate, and advanced solidity development concepts. We plan to cover DeFi, and NFTs and do deep dives into popular protocols. Additionally, we aim to include various mini-projects and larger capstone projects. 
              The content on this site is still in HEAVY draft mode and will improve over time through fast iteration and external feedback. 
              We will be linking and drafting content iteratively.</p>
              
              <br />
              <p>Find this useful? Please share it with your friends: 
                <span>
                  <a href='https://web3manifold.dev/'> web3manifold.dev</a>
                </span>
              </p> 
                
              <br />
              <p>Have any suggestions? Please reach out via Join our discord and let us know what can be added or improved.</p>
              
              <p>Thank you in advance for reading and for any comments you may have!</p>
          </div>
        </div>

      <br />
      <div>
        <h2>Pricing</h2>
        <p>Learn the latest web3 technologies, updated daily</p>
        <p>Choose annual and save!</p>
        {/* cards */}
        <div className="flex justify-between p-12">
          {/* card 1 */}
          <div>
            <p>Monthly</p>
            <p>$50.00</p>
          </div>
          {/* card 2 */}
          <div>
            <p>Annual</p>
            <p>$35.00</p>
          </div>
        </div>
      </div>

      <br />

      <div>
        <h2>FAQs</h2>
        <h3>You Have Questions?</h3>
        <h4>We've got answers!</h4>

        <div className="faq-section-container">
          <div className="faq-question-container">
            Why the price?
          </div>
          <div className="faq-question-container">
            What will I learn?
          </div>
          <div className="faq-question-container">
            How long will it take?
          </div>
          <div className="faq-question-container">
            Is this really updated daily?
          </div>
        </div>
      </div>

      <br/>
      <div>
        <p>Get started!</p>
        <p>Sign up!</p>
      </div>


      </main>
    </div>
  )
}

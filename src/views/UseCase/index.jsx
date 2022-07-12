import React from 'react';
import BannerHeader from '@Components/common/BannerHeader/index';
import Banner from '@Components/UseCase/Banner/indes';
import Cases from '@Components/UseCase/Cases/index';
import image from '@Assets/images/CTA-img.jpg';
import Footer from '@Components/common/Footer/index';

const UseCase = () => (
  <>
    <BannerHeader />
    <main className="">
      <Banner />
      <Cases />
      <section className="usafiri-request" id="usafiri-request">
        <div className="container">
          <div className="usafiri-request-wrap">
            <div className="usafiri-request-content">
              <div className="row">
                <div className="grid-lg-7 grid-sm-12">
                  <figure className="request-image">
                    <img src={image} alt="cta" />
                  </figure>
                </div>
                <div className="grid-lg-5 grid-sm-12">
                  <form className="pd-25">
                    <div className="pm-group">
                      <input type="text" placeholder="Full name" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="email" placeholder="Email" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="number" placeholder="Phone" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <input type="text" placeholder="Organization Name" className="pm-control" />
                    </div>
                    <div className="pm-group">
                      <div className="pm-checkbox mb-0">
                        <input type="checkbox" id="signin" />
                        <label htmlFor="signin" className="fs-md">
                          Yes, I would like to receive marketing communications regarding USAFIRI.
                        </label>
                      </div>
                    </div>
                    <button className="is-btn is-btn_primary" type="button">
                      <span>Request for demo</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default UseCase;

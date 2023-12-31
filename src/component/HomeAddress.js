import React from 'react'

export const HomeAddress = () => {
  return (
    <div className="overflow-visible">
    <div className="container">
        <div className="row footer-address">
            <div className="col-lg-3 mb-3 mb-lg-0">
                <div className="bg-white p-1-9 shadow border-radius-10 text-center h-100">
                    <div className="footer-logo mx-auto">
                        <img src="/assets/img/logos/logo.png" alt="..."/>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="bg-white p-1-9 shadow border-radius-10 position-relative word-wrap">
                    <div className="row mt-n3">
                        <div className="col-md-4 mt-3">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ti-location-pin display-24 mt-1 d-block text-primary"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 font14">Chief Operating Officer
                                        The New India Assurance Co Ltd
                                        P O Box 2907
                                        Postal Code 112, Ruwi
                                        Sultanate of Oman</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ti-mobile display-24 mt-1 d-block text-primary"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 font14">24838800</p>
                                    <p className="mb-0 font14">24838800</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-3">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <i className="ti-email display-24 mt-1 d-block text-primary"></i>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <p className="mb-0 font14">info@newindiaoman.com</p>
                                    <p className="mb-0 font14">admin@newindiaoman.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

import React from 'react'
import {Link} from 'react-router-dom'

export const Financial = () => {
  return (
    <section>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="row mb-6 mb-lg-8">
                    <div className="col-md-6 position-relative elements-block mb-6 mb-md-0">

                       <ul className="list-style1 mb-0">
                            <li><Link to='/aboutUs/financialRating'>Financial Rating</Link></li>
                            <li><Link to='/aboutUs/performance'>Performance</Link></li>
                           
                        </ul>
                        </div>
                        
                      </div>

                      <div className="row mb-6 mb-lg-8">
                    <div className="col-md-4 position-relative elements-block mb-6 mb-md-0">

                        <div className="inner-title">
                            <h2 className="h4 mb-0">Annual Reports</h2>
                        </div>

                        <ul className="list-style1 mb-0">
                            <li><a href='https://www.newindiaoman.com/wp-content/uploads/2019/06/Final2Q4201819.pdf' target='_blank'>Financial Year 2018-19</a></li>
                            <li><a href='https://www.newindiaoman.com/pdf-new/Complete_Final_Book_2014.pdf'target='_blank' >Financial Year 2013-14</a></li>
                            <li><a href='https://www.newindiaoman.com/pdf-new/NIA-Eng_Hindi-Report.pdf' target='_blank'>Financial Year 2012-13</a></li>
                            <li><a href='https://www.newindiaoman.com/pdf-new/New%20india%20final%20for%20CTP%20176%20pages.pdf' target='_blank'>Financial Year 2011-12</a></li>
                            <li><a href='https://www.newindiaoman.com/pdf-new/Annual-Report-2010-11.pdf' target='_blank'>Financial Year 2010-11</a></li>
                            <li><a href='https://www.newindiaoman.com/NIAAnnualRep2009-10.pdf' target='_blank'>Financial Year 2009-10</a></li>
                           
                        </ul>
                        </div>

                        <div className="col-md-4 position-relative elements-block mb-6 mb-md-0">

<div className="inner-title">
<h2 className="h4 mb-0">&nbsp;&nbsp;&nbsp;</h2>
</div>

<ul className="list-style1 mb-0">
    <li><a href='https://www.newindiaoman.com/NIAAnnualRep2008-09.pdf' target='_blank'>Financial Year 2008-09</a></li>
    <li><a href='https://www.newindiaoman.com/NewIndiaInsuranceDt.19-9-2008-3.pdf' target='_blank'>Financial Year 2007-08</a></li>
    <li><a href='https://www.newindiaoman.com/AnnualReport2006.pdf' target='_blank'>Financial Year 2006-07</a></li>
    <li><a href='https://www.newindiaoman.com/annualreport05-06.pdf' target='_blank'>Financial Year 2005-06</a></li>
    
</ul>
</div>


<div className="col-md-4 position-relative elements-block mb-6 mb-md-0">

<div className="inner-title">
    <h2 className="h4 mb-0">&nbsp;&nbsp;&nbsp;</h2>
</div>

<ul className="list-style1 mb-0">
<li><a href='https://www.newindiaoman.com/AnnualReport2005.pdf' target='_blank'>Financial Year 2004-05</a></li>
    <li><a href='https://www.newindiaoman.com/AnnualReport0304.pdf' target='_blank'>Financial Year 2003-04</a></li>
    <li><a href='https://www.newindiaoman.com/AnnualReport0203.pdf' target='_blank'>Financial Year 2002-03</a></li>
</ul>
</div>
                        
                      </div>

                      
                      </div>
                      </div>
                      </div>
                      </section>
  )
}

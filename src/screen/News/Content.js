import React ,{useState}from 'react';

let images = [
    { src: "/assets/img/gallery/banner1.jpg", 
    original:"/assets/img/gallery/banner1.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",

    title:"BROKER’S MEET 2023    ", 
    description:"BROKER’S MEET 2023    "},
    { src: "/assets/img/gallery/banner2.jpg",
    original:"/assets/img/gallery/banner2.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
     title:"BROKER’S MEET 2023    " ,
     description:"BROKER’S MEET 2023    "},
    { src: "/assets/img/gallery/banner3.jpg", 
    original:"/assets/img/gallery/banner3.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
    title:"BROKER’S MEET 2023    " ,
    description:"BROKER’S MEET 2023    "}
];

let images2 = [
    { src: "/assets/img/gallery/br1.jpeg", 
    original:"/assets/img/gallery/br1.jpeg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",

    title:"BROKER’S MEET 2023    ", 
    description:"BROKER’S MEET 2023    "},
    { src: "/assets/img/gallery/br2.jpg",
    original:"/assets/img/gallery/br2.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
     title:"BROKER’S MEET 2023    " ,
     description:"BROKER’S MEET 2023    "},
   
];

let images3 = [
    { src: "/assets/img/gallery/bd1.jpg", 
    original:"/assets/img/gallery/bd1.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",

    title:"BROKER’S MEET 2023    ", 
    description:"BROKER’S MEET 2023    "},
    { src: "/assets/img/gallery/bd2.jpg",
    original:"/assets/img/gallery/bd2.jpg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
     title:"BROKER’S MEET 2023    " ,
     description:"BROKER’S MEET 2023    "},
   
];

let images4 = [
    { src: "/assets/img/gallery/s1.jpeg", 
    original:"/assets/img/gallery/s1.jpeg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",

    title:"BROKER’S MEET 2023    ", 
    description:"BROKER’S MEET 2023    "},
    { src: "/assets/img/gallery/s2.jpeg",
    original:"/assets/img/gallery/s2.jpeg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
     title:"BROKER’S MEET 2023    " ,
     description:"BROKER’S MEET 2023    "},
     { src: "/assets/img/gallery/s3.jpeg",
     original:"/assets/img/gallery/s3.jpeg",
     width: 320,
     height: 174,
     tags: [
       { value: "Nature", title: "Nature" },
       { value: "Flora", title: "Flora" },
     ],
     caption: "After Rain (Jeshu John - designerspics.com)",
      title:"BROKER’S MEET 2023    " ,
      description:"BROKER’S MEET 2023    "},
      { src: "/assets/img/gallery/s4.jpeg",
      original:"/assets/img/gallery/s4.jpeg",
      width: 320,
      height: 174,
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Flora", title: "Flora" },
      ],
      caption: "After Rain (Jeshu John - designerspics.com)",
       title:"BROKER’S MEET 2023    " ,
       description:"BROKER’S MEET 2023    "},
       { src: "/assets/img/gallery/s5.jpeg",
       original:"/assets/img/gallery/s5.jpeg",
       width: 320,
       height: 174,
       tags: [
         { value: "Nature", title: "Nature" },
         { value: "Flora", title: "Flora" },
       ],
       caption: "After Rain (Jeshu John - designerspics.com)",
        title:"BROKER’S MEET 2023    " ,
        description:"BROKER’S MEET 2023    "},
        { src: "/assets/img/gallery/s6.jpeg",
        original:"/assets/img/gallery/s6.jpeg",
        width: 320,
        height: 174,
        tags: [
          { value: "Nature", title: "Nature" },
          { value: "Flora", title: "Flora" },
        ],
        caption: "After Rain (Jeshu John - designerspics.com)",
         title:"BROKER’S MEET 2023    " ,
         description:"BROKER’S MEET 2023    "},
         { src: "/assets/img/gallery/s7.jpeg",
         original:"/assets/img/gallery/s7.jpeg",
         width: 320,
         height: 174,
         tags: [
           { value: "Nature", title: "Nature" },
           { value: "Flora", title: "Flora" },
         ],
         caption: "After Rain (Jeshu John - designerspics.com)",
          title:"BROKER’S MEET 2023    " ,
          description:"BROKER’S MEET 2023    "},
   
];

let images5 = [
    { src: "/assets/img/gallery/b1.jpeg", 
    original:"/assets/img/gallery/b1.jpeg",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",

    title:"BROKER’S MEET 2023    ", 
    description:"BROKER’S MEET 2023    "},
    
   
];

export const Content = () => {
   
  return (
    <section>
            <div className="container">
                <div className="section-heading text-center mb-2-9 mb-lg-6 wow fadeIn" data-wow-delay="100ms">
                    <span>Gallery</span>
                    <h2 className="h1 mb-0">Newa & Event</h2>
                </div>
                <div className="row about-style">
                <div classNameName="col-lg-12 wow fadeIn" data-wow-delay="400ms">
                    <div classNameName="ps-xl-2-3">
                                <div className="inner-title whyChoose">
                                        <h2 className="h4 mb-0">BROKER’S MEET 2023:</h2>
                                        <h3 className="h5 mb-3">Date : 31-08-2023</h3>
                                </div>
                        </div>
                        <div className="row justify-content-center lightbox-gallery">
                        <div class="row photos">
                        {images.map(function(data,index) {
                        return (
                            <div class="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                <a href={data.src} data-lightbox="photos">
                <img class="img-fluid" src={data.src}/></a></div>
                        )
                        })}
             </div>
    
</div>
        </div>

        <div classNameName="col-lg-12 wow fadeIn" data-wow-delay="400ms">
                    <div classNameName="ps-xl-2-3">
                                <div className="inner-title whyChoose">
                                        <h2 className="h4 mb-0">THE NEW INDIA ASSURANCE COMPANY LIMITED 105 TH FOUNDATION DAY
:</h2>
                                        <h3 className="h5 mb-3">Date : 23-07-2023</h3>
                                </div>
                        </div>
                        <div className="row justify-content-center lightbox-gallery">
                        <div class="row photos">
                        {images2.map(function(data,index) {
                        return (
                            <div class="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                <a href={data.src} data-lightbox="photos">
                <img class="img-fluid" src={data.src}/></a></div>
                        )
                        })}
             </div>
    
</div>
        </div>


        <div classNameName="col-lg-12 wow fadeIn" data-wow-delay="400ms">
                    <div classNameName="ps-xl-2-3">
                                <div className="inner-title whyChoose">
                                        <h2 className="h4 mb-0">BLOOD DONATION DRIVE :</h2>
                                        <h3 className="h5 mb-3">Date : 26-04-2023</h3>
                                </div>
                        </div>
                        <div className="row justify-content-center lightbox-gallery">
                        <div class="row photos">
                        {images3.map(function(data,index) {
                        return (
                            <div class="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                <a href={data.src} data-lightbox="photos">
                <img class="img-fluid" src={data.src}/></a></div>
                        )
                        })}
             </div>
    
</div>
        </div>

        <div classNameName="col-lg-12 wow fadeIn" data-wow-delay="400ms">
                    <div classNameName="ps-xl-2-3">
                                <div className="inner-title whyChoose">
                                        <h2 className="h4 mb-0">SKILLS OF COMMUNICATION:</h2>
                                        <h3 className="h5 mb-3"> Trainer: Amjad Abu Suwaid</h3>
                                        <h3 className="h5 mb-3">Date : 17-07-2019</h3>
                                </div>
                        </div>
                        <div className="row justify-content-center lightbox-gallery">
                        <div class="row photos">
                        {images4.map(function(data,index) {
                        return (
                            <div class="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                <a href={data.src} data-lightbox="photos">
                <img class="img-fluid" src={data.src}/></a></div>
                        )
                        })}
             </div>
    
</div>
        </div>

        <div classNameName="col-lg-12 wow fadeIn" data-wow-delay="400ms">
                    <div classNameName="ps-xl-2-3">
                                <div className="inner-title whyChoose">
                                        <h2 className="h4 mb-0">BASIC PRINCIPLES OF GENERAL INSURANCE:</h2>
                                        <h3 className="h5 mb-3"> Trainer: Mr R.T Deva Rayalu</h3>
                                        <h3 className="h5 mb-3">Date : 20-06-2019</h3>
                                </div>
                        </div>
                        <div className="row justify-content-center lightbox-gallery">
                        <div class="row photos">
                        {images5.map(function(data,index) {
                        return (
                            <div class="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                <a href={data.src} data-lightbox="photos">
                <img class="img-fluid" src={data.src}/></a></div>
                        )
                        })}
             </div>
    
</div>
        </div>
        
                </div>
                    </div>
                    </section>
  )
}

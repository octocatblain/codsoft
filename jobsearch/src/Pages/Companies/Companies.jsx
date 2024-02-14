// import React from 'react'
// import "./Companies.css"
// import { useRef, useEffect } from 'react';
// import { register } from 'swiper/element/bundle';
// import Layout from '../../Layout/Layout'

// register();

// const Companies = () => {
//   const swiperElRef = useRef(null);

//   useEffect(() => {
//     // listen for Swiper events using addEventListener
//     swiperElRef.current.addEventListener('swiperprogress', (e) => {
//       const [swiper, progress] = e.detail;
//       console.log(progress);
//     });

//     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
//       console.log('slide changed');
//     });
//   }, []);

//   return (
//     <Layout>
//       <swiper-container
//         className="swiper_container"
//         ref={swiperElRef}
//         slides-per-view="1"
//         autoplay="true"
//         navigation="false"
//         pagination="false"
//         zoom="true"
//         effect-cube="true"
//       >
//         <swiper-slide className="slide_item"><img src="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce40ce8b8ba365e5e6d06401e5485390" alt="" /></swiper-slide>
//         <swiper-slide className="slide_item"><img src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f" alt="" /></swiper-slide>
//         <swiper-slide className="slide_item"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPncLqD-Ypa_346mTZC_Nywz9xmCMGk3ipu25Gl-RSxA&s" alt="" /></swiper-slide>
//         ...
//       </swiper-container>
//     </Layout>
//   );
// }

// export default Companies


import React from 'react';
import Accordion from '../../Components/Accordion/Accordion';
import "../../Components/Accordion/Accordion.css"
import Layout from '../../Layout/Layout';

const Companies = () => {
  const items = [
    {
      title: 'What is React?',
      content: 'React is a JavaScript library for building user interfaces.',
    },
    {
      title: 'Why use React?',
      content: 'React allows developers to create reusable UI components.',
    },
    {
      title: 'How to learn React?',
      content: 'You can learn React through online tutorials and documentation.',
    },
  ];

  return (
    <Layout>
      <div className="ui container">
        <h1>Accordion Example</h1>
        <Accordion items={items} />
      </div>
    </Layout>
  );
};

export default Companies;


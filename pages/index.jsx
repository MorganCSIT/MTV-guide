import * as React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import Banner from "../public/banner1.webp";

function HomePage() {
  const scrollToBottom = () => {
    const windowHeight = window.innerHeight;
    window.scrollTo(0.5, windowHeight);
  };

  <button onClick={scrollToBottom}>Scroll</button>;
  return (
    <main role="main" className="main">
      <Head>
        <title>Phuket Interactive Maps</title>
        <meta name="description" content="MangoTreeVilla" />
      </Head>

      <Header></Header>

      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${Banner.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="content p-0 text-center bg-image"
          style={{
            height: "100vh",
            top: "0",
            position: "relative",
            background: "rgba(0, 0, 0, 0.6)",
            width: "100%",
          }}
        ></div>
      </div>

      <div
        className="content p-0 text-center bg-image"
        style={{
          height: "100vh",
          top: "0",
          position: "relative",
          width: "100%",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h1
              className="mb-3"
              style={{ color: "white", textShadow: "2px 2px 0px black" }}
            >
              Aoyon Discovery <br />
              Phuket
            </h1>
            <h4
              className="mb-3"
              style={{ color: "white", textShadow: "2px 2px 0px black" }}
            >
              Make the most of your stay in Aoyon
            </h4>
            <br></br>

            <button
              onClick={scrollToBottom}
              className="btn btn-outline-light btn-lg"
              // href="/browse"
              role="button"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      <div
        className="content p-0 text-center bg-image"
        style={{
          height: "auto",
          top: "0",
          position: "relative",
          width: "100%",
        }}
      >
        <div id="firstMap" style={{ padding: "10%", boxSizing: "border-box" }}>
          <h3
            className="mb-3"
            style={{ color: "white", textShadow: "2px 2px 0px black" }}
          ></h3>
          <h5
            className="mb-3"
            style={{
              color: "white",
              textShadow: "2px 2px 0px black",
              display: "flex",
              justifyContent: "flexstart",
              paddingLeft: "23px",
            }}
          >
            <ArrowDownwardIcon color="white" />
            Press to see list
            <br />
          </h5>

          <div
            style={{
              position: "relative",
              paddingBottom: "100%", // for a 4:3 aspect ratio
              height: "0",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1Ncfb1O2xy0AE9V1vIxm0zhu_Z8PPMPQ&ehbc=2E312F"
              loading="lazy"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div style={{ padding: "10%", boxSizing: "border-box" }}>
          <div
            style={{
              position: "relative",
              paddingBottom: "100%", // for a 4:3 aspect ratio
              height: "0",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1yEadiJSV3W_90XMluZyERkIEXRE&ehbc=2E312F"
              loading="lazy"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                border: "0",
              }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default HomePage;

export async function getServerSideProps() {
  const vid = await fetch(`https://auvr.vercel.app/api/browse/videos`);
  const videos = await vid.json();
  return { props: { videos } };
}

// import * as React from 'react'
// import Head from 'next/head'
// import Link from 'next/link'
// import Header from '../components/header'
// import Footer from '../components/footer'

// function HomePage() {
//   const [isHoveringLeft, setIsHoveringLeft] = React.useState(false);

//   const handleMouseOverLeft = () => {
//     setIsHoveringLeft(true);
//   };

//   const handleMouseOutLeft = () => {
//     setIsHoveringLeft(false);
//   };

//   return (
//     <main role="main">
//       <Head>
//         <title>VR Tours - Home</title>
//         <meta name="description" content="A VR Video Hosting platform" />
//       </Head>

//       <Header />

//       <div>
//         <h1>Split handling page</h1>
//         <div
//           className={isHoveringLeft ? "hover-left" : "hover-right"}
//           style={{ position: "relative", width: "100vw", height: "100vh", background: "black" }}
//         >
//           <div
//             className="split left"
//             onMouseOver={handleMouseOverLeft}
//             onMouseOut={handleMouseOutLeft}
//           >
//             <h1
//               style={{ position: "absolute", color: "white", left: "50%", top: "20%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
//             >
//               IMMERSE
//             </h1>
//             <Link
//               className="btn btn-outline-light btn-lg"
//               href="/story"
//               role="button"
//               style={{position:'absolute', left:"50%", top:"30%", transform:"translateX(-50%)", width:"15rem", fontWeight:"bold", textTransform:"uppercase"}}
//             >
//               Immerse
//             </Link>
//           </div>
//           <div className="split right">
//             <h1
//               style={{ position: "absolute", color: "white", left: "50%", top: "20%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
//             >
//               BROWSE
//             </h1>
//             <Link
//               className="btn btn-outline-light btn-lg"
//               href="/browse"
//               role="button"
//               style={{position:'absolute', left:"50%", top:"30%", transform:"translateX(-50%)", width:"15rem", fontWeight:"bold", textTransform:"uppercase"}}
//             >
//               Browse
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </main>
//   )
// }

// export default HomePage

{
  /* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner">

                        <div className="carousel-item active" >
                            <video autoPlay loop muted style={{ position: "absolute", right: "0", bottom: "0", minWidth: "100%", minHeight: "100%" }}>
                                <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
                            </video>

                            <div className="content p-0 text-center bg-image" style={{ height: "100vh", position: "relative", right: "0", bottom: "0", background: "rgba(0, 0, 0, 0.6)", color: "#f1f1f1", width: "100%" }}>
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div className="text-white">
                                        <h1 className="mb-3">Welcome to our VR Hosting Platform</h1>
                                        <h4 className="mb-3">Here is a collection of VR Videos that are tailored to your liking</h4>
                                        <br></br>
                                        <Link className="btn btn-outline-light btn-lg" href="/browse" role="button">Click here to Start Browsing</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <video autoPlay loop muted style={{ position: "absolute", right: "0", bottom: "0", minWidth: "100%", minHeight: "100%" }}>
                                <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
                            </video>

                            <div className="content p-0 text-center bg-image" style={{ height: "100vh", position: "relative", bottom: "0", background: "rgba(0, 0, 0, 0.6)", color: "#f1f1f1", width: "100%" }}>
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div className="text-white">
                                        <h1 className="mb-3">Have not visted Before?</h1>
                                        <h4 className="mb-3">Then just go to our Getting Started Page to learn how to use</h4>
                                        <br></br>
                                        <Link className="btn btn-outline-light btn-lg" href="/gettingStarted" role="button">How To Use</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <video autoPlay loop muted style={{ position: "absolute", right: "0", bottom: "0", minWidth: "100%", minHeight: "100%" }}>
                                <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
                            </video>

                            <div className="content p-0 text-center bg-image" style={{ height: "100vh", position: "relative", bottom: "0", background: "rgba(0, 0, 0, 0.6)", color: "#f1f1f1", width: "100%", paddingTop: "56.25%" }}>
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div className='container'>
                                        <div className="text-white" style={{ paddingBottom: "50px" }}>
                                            <h4 className="mb-3">Here is a Teaser of What to Expect</h4>
                                        </div>
                                        <div className="container" style={{ position: "relative", overflow: "hidden", width: "100%", height: "100%" }}>
                                            <iframe width="921" height="518" src="https://www.youtube.com/embed/wnrHCMI1FNs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>*/
}

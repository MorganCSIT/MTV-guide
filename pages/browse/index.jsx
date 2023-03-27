import Header from '../../components/header'
import Footer from '../../components/footer'
import * as React from 'react'
import ScrollCard from '../../components/CardForScroll.js'
import Head from 'next/head'
import { useState } from "react";
import Link from 'next/link'
import BackspaceIcon from '@mui/icons-material/Backspace';
import { TextField, Button } from '@mui/material'

import Banner from '../../public/banner2.webp'


export default function BrowsePage({ videos, categories }) {

  const [videosToShow, setVideosToShow] = useState(6);
  const [searchValue, setSearchValue] = useState("");

  function search() {
    setSearchValue("");
    setVideosToShow(6);
  }


  function renderVideoRow(vidType) {
    const videosToDisplay = videos
      .filter(video => {
        return (
          video.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          video.type === vidType
        );
      })
      .slice(0, videosToShow);

    if (videosToDisplay.length === 0) {
      return null;
    }

    return (
      <div className='container' key={vidType}>
        <h1 style={{ paddingLeft: "3rem", paddingBottom: "0.2rem", background: "#aa1e2d", color: "white", borderRadius: "10px", paddingTop: "5px" }}>{vidType}</h1>
        <div className="container bg-white" style={{ display: "flex", overflowX: "scroll", width: "100%", height: "280px", marginBottom: "10px", borderRadius: "20px" }}>
          {videosToDisplay.map(src => (
            <div
              className="scroll"
              key={src._id}
            >
              <ScrollCard
                title={src.title}
                link={src.youtube}
                thumbnail={src.thumbnail}
                desc={src.desc}
                onView={src._id}
                duration={src.duration}
                location={src.location}
                dOU={src.dateOfUpload}
                player={src.player}
                urlID={src.urlID}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }



  if (!videos) return (
    <div style={{ marginTop: "10vh" }}>
      <p>Videos not found</p>
      <Link href="/browse">Back</Link>
    </div>
  );

  return (
    <main role="main">
      <div>
        <Head>
          <title>VR Tours</title>
          <meta name="description" content="A VR Video Hosting platform" />
        </Head>
      </div>

      <Header />

      <section className="jumbotron text-center" style={{
        marginTop: "10vh",
        position: 'relative',
        height: "55vh",
        // backgroundImage: "url('https://media.istockphoto.com/id/1379108916/vector/metaverse-technology-background.jpg?s=612x612&w=0&k=20&c=BhoTlueNSWAXnanIpiZ6PlXO5ZXOD_eOquQ_NIEuZQk=')",
        // backgroundImage: "url('https://img.freepik.com/premium-photo/metaverse-background-concept-3d-hands-virtual-reality-vr-are-connected-big-data-sphere_90380-3962.jpg')",
        backgroundImage: `url(${Banner.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="content p-0 text-center bg-image" style={{ height: "55vh", top: "0", position: "absolute", background: "rgba(0, 0, 0, 0.4)", width: "100%" }}>

          <div className="container">
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 className="jumbotron-heading" style={{ color: "white", textShadow: "2px 2px 0px black" }}>VR Videos just for you</h1>
            <p className="lead" style={{ color: "white", textShadow: "2px 2px 0px black" }}>
              Browse our collection of VR videos and view them with your full entertainment
            </p>

          </div>

          <br />
          <br />

          <div className="input-group rounded" style={{ padding: "0 15% 0 15%" }}>
            <input type="search" className="form-control rounded" placeholder="Thailand" aria-label="Search" aria-describedby="search-addon" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search" onClick={search}>Clear</i>
            </span>
          </div>

          <div className="rounded col-md-6" style={{ margin: "0 10% 0", background: "white", padding: "5px 0px 10px" }}>
            <div className='row g-0'>
              <TextField type="search" className='col-md-10' label="Search" aria-label="Search" aria-describedby="search-addon" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} variant="standard" style={{ paddingRight: "10px" }} />
              <Button className="border-0 col-md-1" id="search-addon" onClick={search} variant="contained">
                <BackspaceIcon></BackspaceIcon>
              </Button>
            </div>
          </div>


        </div>
      </section>

      <div className="album py-5 bg-light">

        {categories.map(cat => (
          renderVideoRow(`${cat.name}`)
        ))}

      </div>

      <Footer />
    </main>
  )
}

export async function getServerSideProps() {
  const vid = await fetch(`https://auvr.vercel.app/api/browse/videos`)
  const videos = await vid.json()

  const cat = await fetch(`https://auvr.vercel.app/api/browse/categories`)
  const categories = await cat.json()
  return { props: { videos, categories } }
}


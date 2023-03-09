import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import locationIcon from 'public/locationIcon.jpg';
import durationIcon from 'public/durationIcon2.jpg';
import calenderIcon from 'public/calenderIcon.jpg';

//browse/${onView}

function CardTemplate(props) {
    const { title, link, desc, thumbnail, onView, duration, location, dOU } = props
    return (
            <Link href={`/browse/${onView}`} style={{ textDecoration: 'none', color: '#000' }}>
                <div className="card mb-4 box-shadow" >
                    <div className="card-header bg-light" style={{ verticalAlign: "middle" }}>
                        <h5>{title}</h5>
                    </div>
                    <div className="row g-0 " style={{ verticalAlign: "middle", textAlign: "center" }}>
                        <div className="col-md">
                            <div style={{ background: "#eee" }}>
                                <img src={thumbnail} style={{ height: "80%", width: "80%", borderRadius: "1%", padding: "5px" }}></img>
                            </div>
                        </div>
                        <div className="col-md" style={{paddingTop:"5vh"}}>
                            <Image className="rounded mx-auto d-block"
                                src={locationIcon}
                                alt=""
                                width="30"
                                height="30" />
                            <small className="text-muted">{location}</small>

                        </div>
                        <div className="col-md" style={{paddingTop:"4vh"}}>
                            <Image className="rounded mx-auto d-block"
                                src={durationIcon}
                                alt=""
                                width="40"
                                height="40" />
                            <small className="text-muted">{duration} mins</small>
                        </div>
                        <div className="col-md" style={{paddingTop:"5vh"}}>
                            <Image className="rounded mx-auto d-block"
                                src={calenderIcon}
                                alt=""
                                width="30"
                                height="30" />
                            <small className="text-muted">{dOU}</small>
                        </div>
                        <div className="col-md" style={{paddingTop:"5vh", marginBottom:"5vh"}}>
                            <button type="button" className="btn btn-primary">Update</button>
                            <button type="button" className="btn btn-danger" style={{marginLeft:"1vh"}}>Delete</button>
                        </div>
                    </div>
                </div>
            </Link >
    )
}

export default CardTemplate


import React from "react";

import TeamItem from "../elements/TeamItem";

function Team() {
  const team = [
    {
      id: 1,
      name: "Jon-Michael Narvaez",
      image: "about_image.PNG",
      job: "Full-stack Developer",
      social: [
        {
          name: "instagram",
          url: "https://www.instagram.com/jm_cancode",
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/jmcancode",
        },
        {
          name: "twitter",
          url: "https://www.twitter.com",
        },
      ],
    },
    // {
    //   id: 2,
    //   name: "Lipa Bennington",
    //   image: "team2.jpg",
    //   job: "Social Media Expert",
    //   social: [
    //     {
    //       name: "linkedin",
    //       url: "https://www.linkedin.com",
    //     },
    //     {
    //       name: "whatsapp",
    //       url: "https://www.whatsapp.com",
    //     },
    //     {
    //       name: "facebook-messenger",
    //       url: "https://www.facebook.com",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   name: "Juan Hopkins",
    //   image: "team3.jpg",
    //   job: "Fullstack Developer",
    //   social: [
    //     {
    //       name: "linkedin",
    //       url: "https://www.linkedin.com",
    //     },
    //     {
    //       name: "whatsapp",
    //       url: "https://www.whatsapp.com",
    //     },
    //     {
    //       name: "facebook-messenger",
    //       url: "https://www.facebook.com",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   name: "Victoria McKennie",
    //   image: "team4.jpg",
    //   job: "Marketing Specialist",
    //   social: [
    //     {
    //       name: "instagram",
    //       url: "https://www.instagram.com",
    //     },
    //     {
    //       name: "dribbble",
    //       url: "https://www.dribbble.com",
    //     },
    //     {
    //       name: "twitter",
    //       url: "https://www.twitter.com",
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   name: "Charles Guyerre",
    //   image: "team5.jpg",
    //   job: "Art Director",
    //   social: [
    //     {
    //       name: "instagram",
    //       url: "https://www.instagram.com",
    //     },
    //     {
    //       name: "dribbble",
    //       url: "https://www.dribbble.com",
    //     },
    //     {
    //       name: "twitter",
    //       url: "https://www.twitter.com",
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   name: "Anna Donovan",
    //   image: "team6.jpg",
    //   job: "Project Manager",
    //   social: [
    //     {
    //       name: "instagram",
    //       url: "https://www.instagram.com",
    //     },
    //     {
    //       name: "dribbble",
    //       url: "https://www.dribbble.com",
    //     },
    //     {
    //       name: "twitter",
    //       url: "https://www.twitter.com",
    //     },
    //   ],
    // },
  ];
  const displayTeam = team.map((item, index) => (
    <TeamItem
      key={index}
      id={item.id}
      image={item.image}
      name={item.name}
      job={item.job}
      social={item.social}
    />
  ));

  return (
    <section id="sectionTeam">
      <div className="container">
        <div className="row team-row hero-title">
          <div className="col-12">
            <h1 className="section-big-title anim-bot">Meet the team.</h1>
            <p className="anim-bot">
              We are a team sit amet consectetur adipiscing elit <br /> sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {displayTeam}
        </div>
      </div>
    </section>
  );
}

export default Team;

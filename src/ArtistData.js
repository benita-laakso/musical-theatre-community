import valentina from "./images/adriano-goncalves-IeHLttCrsXE-unsplash.jpg";
import director from "./images/toni-hukkanen-GeWnWHgGXls-unsplash.jpg";
import writer from "./images/grigore-ricky-vRkiYoCeN2g-unsplash.jpg";

const data = [
  {
    artistHeading: "Valentina Garcia",
    about:
      " Valentina Garcia is a classical Singer from South of Italy. She is a mezzo soprano with a very expressive voice and performance presence. Because she has many talents and skills she decided to start her own theatre, where she has had numerous roles; actress, singer, composer and choreographer.",
    qualifications:[
      {
        text:"Singer & Actress:",
        type:"job"
      },
      {
        text:"2001 - present",
        type:"year"
      },
      {
        text:"Dancer:",
        type:"job"
      },
      {
        text:"2005 - present",
        type:"year"
      },

      { 
        text:"Composer",
        type:"job"
      },
      {
        text:"2005, 2008, 2009,2018, 2019",
        type:"year"
      },
      {
        text:"Choreographer:",
        type:"job"
      },
      {
        text:"2007, 2010, 2015, 2017",
        type:"year"
      },
    ],
    image:valentina,
    alt: "opera singer",
    className:"picature brighter"
    },

      
    {
      artistHeading: "Peter Isakson",
      about:
        "    Peter Isakson is CosmoChimicas director. He is the sun of actress Filippa Isacsson and composer Paulov Kotenski. Peter started out as a child actor alongside his mother untill he discover directing to be his true calling.",
      qualifications:[
        {
          text:"Director:",
          type:"job"
        },
        {
          text:"2007 - present",
          type:"year"
        },
        {
          text:"Playwright:",
          type:"job"
        },
        {
          text:"2009, 2018, 2020",
          type:"year"
        },
  
        { 
          text:"Composer",
          type:"job"
        },
        {
          text:"1994-1998",
          type:"year"
        },
      ],
      image:director,
      alt: "man looking casual",
      className:"picature brighter"
      },
    {
      artistHeading: "Cassandra Haris",
      about:
        "  Playwright Cassandra Harris travels to different locations around the globe, capturing inspiration from different cultures and history. She spends four months at a given location, then returns to CosmoChimica to test the script with our actors and director. After this the writher spends half a year perfecting the play before handing it over to the the theatre.",
      qualifications:[
        {
          text:"Playwright:",
          type:"job"
        },
        {
          text:"2007 - present",
          type:"year"
        },
        {
          text:"Dancer:",
          type:"job"
        },
        {
          text:"2014, 2019 ",
          type:"year"
        },
  
        { 
          text:"Pianist & Composer:",
          type:"job"
        },
        {
          text:"2015, 2017",
          type:"year"
        },
      ],
      image:writer,
      alt: "picature of woman",
      className:"picature brighter"
      },
];

export default data;

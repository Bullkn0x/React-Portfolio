import Mock from "../mock";

const database = {
  information: {
    name: 'Qi Chen',
    aboutContent: "I am a Data Engineer. I can provide clean code and valuable insight from data.",
    phone: '',
    nationality: 'American/Chinese',
    language: 'English, Mandarin',
    email: '',
    address: 'Brookyln, NY',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/qchen125',
      twitter: 'https://twitter.com/qchen125',
      linkedin: 'https://www.linkedin.com/in/qifchen',
      github: 'https://github.com/swordwielder'
    },
    brandImage: '/images/headshot.jpg',
    aboutImage: '/images/aboutSmall.jpg',
    aboutImageLg: '/images/aboutLarge.jpg',
    cvfile: '/files/Qi_Chen_Resume.pdf'
  },
  services: [
    {
      title: "Server-side Applications",
      icon: 'network',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "API Development",
      icon: 'code',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    },
    {
      title: "Database Design",
      icon: 'database',
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    }
  ],
  reviews: [
    {
      id: 1,
      content: 'MY name jeff',
      author: {
        name: 'Speeros',
        designation: 'THE MOBILE APP COMPANY'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Bobby Chingle',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Derek Dingle',
        designation: 'Upwork Client'
      }
    }
  ],
  skills: [
    {
      title: "JAVA",
      value: 80
    },
    {
      title: "Python",
      value: 80
    },
    {
      title: "C++",
      value: 60
    },
    {
      title: "Bash",
      value: 80
    },
    {
      title: "Linux",
      value: 80
    },
    {
      title: "Hive",
      value: 80
    },
    {
      title: "Hadoop",
      value: 60
    },
    {
      title: "MapReduce",
      value: 50
    },
    {
      title: "Sqoop",
      value: 70
    },
    {
      title: "Oozie",
      value: 60
    },
    {
      title: "AWS",
      value: 70
    },
    {
      title: "VMware",
      value: 70
    },
    {
      title: "API Development",
      value: 70
    },
    {
      title: "Web Scraping",
      value: 75
    },
    {
      title: "Data Visualization",
      value: 70
    },
    {
      title: "Pandas",
      value: 121
    } 
      
  ],
  portfolios: [
    {
      id: 1,
      title: "Coinbase Web Scraper",
      subtitle: "This is a WebScrapper written in Python to Scrape cryptocurrency Coin Data",
      imageUrl: "/images/CoinbaseSmall.png",
      largeImageUrl: ["/images/CoinbaseLarge.jpg"],
      url: 'https://github.com/swordwielder/pythonwebscrapper'
    },
    
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Independent Developer",
        details: "• Created a Discord bot that gives live weather, crypto and stock data"
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Data Engineer",
        company: "Vurteau",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 3,
        year: "2015 - 2018",
        position: "Product Engineer & Content Manager",
        company: "Dahua Tech USA Inc.",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 4,
        year: "2014 - 2015",
        position: "Computer Science Tutor",
        company: "Computer Science Learning Center, University of Memphis",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Data Engineering Bootcamp",
        university: "Platform by Per Scholas (Cognizant)",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      },
      {
        id: 2,
        year: "2011 - 2015",
        graduation: "BS in Computer Science",
        university: "University of Memphis",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "Ecovacs DEEBOT 500 Review",
      imageUrl: "http://chenpost.com/Deebot_500.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    
  ],
  contactInfo: {
    phoneNumbers: ['+1646-598-1337'],
    emailAddress: ['gchen125@gmail.com'],
    address: "Brooklyn, NY"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
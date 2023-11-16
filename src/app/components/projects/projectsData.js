import React from "react";
import BarBer from '../../assets/projects/barber.png'
import Movie from '../../assets/projects/movie.png'
import Dopefolio from '../../assets/projects/developerPortfolio.png'

const projectsData = [
    {
        id: 1,
        name: 'BarBer Web Template',
        img: BarBer,
        subText: 'BarBer is a web template that I created targeting the Barber industry which anyone can use to present their business online.Technologies to build it "HTML,CSS,JAVASCRIPT"',
        GitHubLink: 'https://github.com/zeeshan-ahmed-smit/barber-website-.git',
        LiveLink: 'https://zeeshan-barber.netlify.app/'
    },
    {
        id: 2,
        name: 'Movix Application',
        img: Movie,
        subText: 'This application is pulling movie data from an the TMDB movie API and displaying different categories.It features horizontal sliding and a featured selection.The redux is also being implemented for app - wide state management.Technologies to build it "REACT,REDUX,TMBD API,JAVASCRIPT"',
        GitHubLink: 'https://github.com/zeeshan-ahmed-smit/Movies-website-using-react.js.git',
        LiveLink: 'https://themovix.surge.sh/'
    },
    {
        id: 3,
        name: 'Developer Portfolio',
        img: Dopefolio,
        subText: 'Dopefolio is a successful Open-Source project that I created. Technologies to build it "HTM,CSS,JAVASCRIPT"',
        GitHubLink: 'https://github.com/zeeshan-ahmed-smit/Developer-PortFolio.git',
        LiveLink: 'https://developer-portfolio-2023.netlify.app/'
    },
]

export default projectsData;
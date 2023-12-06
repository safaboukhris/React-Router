import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from 'react';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import StarRating from './StarRating';
import {Routes, Route} from 'react-router-dom';
import Details from './Details';


function App() {
    const [movie,setMovie] = useState([
                /* declaring of our movie list using  useState hook */
        {id:1,
            title:'Mary Queen of Scots',
            description: 'Queen of France at 16 and widowed at 18, Mary Stuart defies pressure to remarry. Instead, she returns to her native Scotland to reclaim her rightful throne. But Scotland and England fall under the rule of the compelling Elizabeth I. Each young Queen beholds her sister in fear and fascination.',
            rating: 4.2,
            poster:'img11.jpg',
            trailer: "https://www.youtube.com/watch?v=wnqjSgMU36U ",
        },
        {id:2,
            title:'Frozen',
            description: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.',
            rating:3,
            poster:'img4.jpeg',
            trailer: "https://www.youtube.com/watch?v=TbQm5doF_Uc"
        },
        {id:3,
            title:` Me Before You`,
            description: `Young and quirky Louisa "Lou" Clark (Emilia Clarke) moves from one job to the next to help her family make ends meet. Her cheerful attitude is put to the test when she becomes a caregiver for Will Traynor (Sam Claflin), a wealthy young banker left paralyzed from an accident two years earlier.`,
            rating:3.5,
            poster:'img14.jpg',
            trailer: "https://www.youtube.com/watch?v=ztA__cx5xDU"
        },
        {id:4,
            title:'Divergent',
            description:  ` In a world divided by factions based on virtues, Tris learns she's Divergent and won't fit in. When she discovers a plot to destroy Divergents, Tris and the mysterious Four must find out what makes Divergents dangerous before it's too late.`,
            rating:2.5,
            poster:'img5.jfif',
            trailer: "https://www.youtube.com/watch?v=gxbwcBlj_dM"
        },
        {id:5,
            title:'The Lion King',
            description: `Set in a kingdom of lions in Africa, The Lion King tells the story of Simba (Swahili for lion), a lion cub who is to succeed his father, Mufasa, as King of the Pride Lands; however, after his paternal uncle Scar kills Mufasa to seize the throne, Simba is tricked into believing he was responsible for his father's death .`,
            rating: 5,
            poster: 'img2.jpg',
            trailer: "https://www.youtube.com/watch?v=lFzVJEksoDY"
        }, 
        {id:6,
            title:` Don't look up`,
            description: ` Two astronomers go on a media tour to warn humankind of a planet-killing comet hurtling toward Earth. The response from a distracted world: Meh. Watch all you want. Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep and Jonah Hill lead a blockbuster cast in this comedy from Adam McKay.`,
            rating:3.5,
            poster:'img9.jpg',
            trailer: "https://www.youtube.com/watch?v=RbIxYm3mKzI"
        },
        {id:7,
            title:'Raya and the last dragon',
            description: ` Walt Disney Animation Studios' Raya and the Last Dragon travels to the fantasy world of Kumandra, where humans and dragons lived together in harmony long ago. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity.`,
            rating:5,
            poster:'img8.jpg',
            trailer: "https://www.youtube.com/watch?v=1VIZ89FEjYI"
        },
        {id:8,
            title:` Devdas`,
            description: `This is the sweeping tale of two soul mates, childhood sweethearts Devdas and Paro, whose love is thwarted by India's rigid class structure. Young Devdas is sent to study in London by his wealthy father. On his return, love blossoms again, but the families oppose the romance.`,
            rating: 2,
            poster:'img10.jpg',
            trailer: "https://www.youtube.com/watch?v=8tuHQWGMQwY"
        },
        {id:9,
            title:'Shrek',
            description: ` A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back. It's the story of a terrifying green ogre by the name of Shrek, who lives in a swamp.`,
            rating: 3.4,
            poster:'img7.jpg',
            trailer: "https://www.youtube.com/watch?v=ooJJX3R42WM"
        },
        {id:10,
            title:'Koğuştaki Mucize',
            description: `  Miracle In Cell Number 7 (Yedinci Kogustaki Mucize 2019): A man with learning difficulties is wrongfully convicted of murdering the young daughter of a Turkish Army Colonel. As it becomes clear that he is innocent, his fellow prisoners, the prison warden and others strive to save him from a death sentence.`,
            rating:3.8,
            poster:'img6.jpg',
            trailer: "https://www.youtube.com/watch?v=z_tgY9Nmo18"
        },
        
    ])
        /* declaring const with hooks for filter title and rate */
    const [filtreTitle,setFiltreTitle] = useState("")
    const [filtreRating,setFiltreRating] = useState(1)
            /* function for the add button */
    const handleAdd = (newMovie) => {
        setMovie([...movie,newMovie]);
    }
            /* function for filter movies with title */
    const filtreData = (filtered) => {
        setFiltreTitle(filtered)
    }
            /* function for to filter movies with rate */
    const filtreRate = (filtRate) => {
        setFiltreRating(filtRate)
    }

            /* root component */
            /* inserting route homepage and /details */
return (
    <div className="App">
        <div className='input-container'>
            <h2 className='title'> MOVIES  LIST</h2>
            <input className='addInput' type='text' placeholder="Enter your movie's name" onChange={(e) => filtreData(e.target.value)}/>
            <StarRating filtreData={filtreData}  filtreRate={filtreRate}/>
            <AddMovie handleAdd={handleAdd}/>
        </div>
            {/* creation 2 path using route component */}
        <Routes>
            <Route  path="/"  element={<MovieList movie={movie.filter((movie) => movie.rating >= filtreRating &&  movie.title.toLocaleLowerCase().includes(filtreTitle.trim().toLowerCase()))}/>}/>
            <Route  path = "/details/:id"  element={<Details movie={movie}/>}/>
        </Routes>
    </div>
);

}

export default App;
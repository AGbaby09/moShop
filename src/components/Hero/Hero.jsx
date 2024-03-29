import { motion } from 'framer-motion'
import './Hero.css'
import bg from '../../assets/jordan.jpg'
import bg1 from '../../assets/adidas.jpg'
import bg2 from '../../assets/sneaker.jpg'
import { useContext } from 'react'
import ContextVariales from '../../context/ContextVariables'

const Hero = () => {

    return (
        <section id="Hero">
            <Screen />
            {/* 
            <Arrival /> */}
        </section>
    )
}

export default Hero;

const Screen = () => {

    return(
        <section id="Screen">
            <Top />
            <Search />
            <div className="rest trans scrollable">
                <Category />
                <Arrival />
            </div>
        </section>
    )
}

const Top = () => {

    return (
        <div className="Top spBtn">
            <button className="center">
                <i className="bx bxs-category-alt"></i>
            </button>
            <div id="logo">
                <p>MOSHOP</p>
            </div>
            <button className="center">
                <i className="bx bxs-bell"></i>
            </button>
        </div>
    )
}

const Search = () => {

    return (
        <form>
            <input type="text" placeholder="What are you looking for?" />
            <i className="bx bx-search"></i>
        </form>
    )
}

const Category = () => {

    return (
        <div id="category">
            <div className="top spBtn">
                <h3>Category</h3>
                <button>See all</button>
            </div>
            <div className="mid spBtn">
                <button className="center">
                    {/* <i className="bx bx-x"></i> */}
                    <img src="https://img.icons8.com/ios-filled/50/nike.png" alt="nike"/>
                </button>
                <button>
                    {/* <i className="bx bx-x"></i> */}
                    <img src="https://img.icons8.com/ios-filled/50/adidas-trefoil.png" alt="adidas-trefoil"/>
                </button>
                <button>
                    {/* <i className="bx bx-x"></i> */}
                    <img src="https://img.icons8.com/ios-filled/50/air-jordan.png" alt="air-jordan"/>
                </button>
                <button>
                    {/* <i className="bx bx-x"></i> */}
                    <img src="https://img.icons8.com/ios-filled/50/army-star.png" alt="army-star"/>
                </button>
                <button>
                    {/* <i className="bx bx-x"></i> */}
                    <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/external-puma-a-german-multinational-company-designs-and-manufactures-athletic-and-casual-footwear-apparel-and-accessories-fashion-bold-tal-revivo.png" alt="external-puma-a-german-multinational-company-designs-and-manufactures-athletic-and-casual-footwear-apparel-and-accessories-fashion-bold-tal-revivo"/>
                </button>
            </div>
            <div className="bottom">
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

const Arrival = () => {
    const {setView} = useContext(ContextVariales)
    const data = [
        {img: bg2, name: 'BW Low Dunks', price: 240},
        {img: bg1, name: 'Green Huarache', price: 180},
        {img: bg, name: 'Airforce 1', price: 360},
        {img: bg2, name: 'BW Low Dunks', price: 240},
        {img: bg1, name: 'Green Huarache', price: 180},
        {img: bg, name: 'Airforce 1', price: 360},
        {img: bg2, name: 'BW Low Dunks', price: 240},
        {img: bg1, name: 'Green Huarache', price: 180},
        {img: bg, name: 'Airforce 1', price: 360},
        {img: bg2, name: 'BW Low Dunks', price: 240},
        {img: bg1, name: 'Green Huarache', price: 180},
        {img: bg, name: 'Airforce 1', price: 360},
    ]

    const container = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
            delayChildren: 0.6,
            staggerChildren: 0.5
            }
        }
    };
      
    const item = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="Arrival">
            <div className="top spBtn">
                <h3>New Arrival</h3>
                <button>See all</button>
            </div>
            <motion.ul className="mid" variants={container} initial="hidden" animate="visible">
                {
                    data && data.map((itemm, index) => (
                        <motion.li key={index} variants={item} className="card" onClick={()=>{setView(true)}}>
                            <div className="img">
                                <img src={itemm.img} alt={itemm.img} />
                            </div>
                            <div className="info">
                                <p>{itemm.name}</p>
                                <h4>{itemm.price}</h4>
                            </div>
                        </motion.li>
                    ))
                }
                <motion.li key={""} variants={item} className="card" onClick={()=>{setView(true)}}>
                    <div className="img">
                        {/* <img src={""} alt={""} /> */}
                    </div>
                    <div className="info">
                        <p>{""}</p>
                        <h4>{""}</h4>
                    </div>
                </motion.li>
                <motion.li key={""} variants={item} className="card" onClick={()=>{setView(true)}}>
                    <div className="img">
                        {/* <img src={""} alt={""} /> */}
                    </div>
                    <div className="info">
                        <p>{""}</p>
                        <h4>{""}</h4>
                    </div>
                </motion.li>
            </motion.ul>
        </section>
    )
}
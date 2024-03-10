import './Hero.css'

const Hero = () => {

    return (
        <section id="Hero">
            <Top />
            <Search />
            <Category />
            <Arrival />
        </section>
    )
}

export default Hero;

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
            <input type="text" placeholder="What are you lokking for?" />
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
                <button>
                    <i className="bx bx-x"></i>
                </button>
                <button>
                    <i className="bx bx-x"></i>
                </button>
                <button>
                    <i className="bx bx-x"></i>
                </button>
                <button>
                    <i className="bx bx-x"></i>
                </button>
                <button>
                    <i className="bx bx-x"></i>
                </button>
            </div>
            <div className="bottom">

            </div>
        </div>
    )
}

const Arrival = () => {

    return (
        <section id="Arrival">
            <div className="top spBtn">
                <h3>New Arrival</h3>
                <button>See all</button>
            </div>
            <div className="mid">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </section>
    )
}
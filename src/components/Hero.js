import hero_img from "../assets/food/greek-salad.webp"
function Hero(){
    return(
        <>
            <main className="hero-main">
                <div className="hero-main-info">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                    <button>Reserve a table</button>
                </div>
                <img src={hero_img} alt="imagen"></img>
            </main>
        </>
    )
}
export default Hero
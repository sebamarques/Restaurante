import food1 from "../assets/food/food1.png"
import food2 from "../assets/food/food2.jpeg"
import food3 from "../assets/food/food3.jpeg"
function Especiales(){
    let descripcion =[
        "The famous greek salad of crispy lettuce,peppers,olives and our Chicago style feta cheese,garnished with crunchy garlic and rosemary croutons.",
        "Our Brushceta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
    ]
    let especiales = [
        {img:food1,alt:"imagen",titulo:"Greek salad",precio:"$12.99",descripcion:descripcion[0]},
        {img:food2,alt:"imagen",titulo:"Brucheta",precio:"$5.99",descripcion:descripcion[1]},
        {img:food3,alt:"imagen",titulo:"Lemon Dessert",precio:"$5.00",descripcion:descripcion[2]},
    ]
    return(
        <div className="inicio">
            <div className="inicio-fila">
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="inicio-especiales">
            {especiales.map(especial =>(
                    <div className="inicio-especial">
                        <img src={especial.img} alt={especial.alt}/>
                        <div className="inicio-especial-info">
                            <div>
                                <h2>{especial.titulo}</h2>
                                <p className="precio">{especial.precio}</p>
                            </div>
                        <p>{especial.descripcion}</p>
                        <button className="button-delivery">Order a delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Especiales
function Footer(){
    let links = [
        {url:"https://instagram.com",nombre:"Instagram"},
        {url:"https://twitter.com", nombre:"Twitter"},
        {url:"https://facebook.com",nombre:"Facebook"}
    ]
    return(
        <>
        <footer>
            <div className="footer">
                <ul>
                    {links.map(link=>(
                        <li><a href={link.url}>{link.nombre}</a></li>
                    ))}
                </ul>
            </div>
        </footer>
        </>
    )
}
export default Footer;
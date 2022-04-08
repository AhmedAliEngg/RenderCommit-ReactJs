const Gallery = () => {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    )
}
const Image =()=>{
    return(
        <img
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="Decoration"
        />
    )
}
export default Gallery;
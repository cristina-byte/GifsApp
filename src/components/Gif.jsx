
function Gif(props){
    return (
         <div className="gifContainer">
            {props.img.height>400 && <h1>{props.type}</h1>}
            <img className="gif-img" src={props.img.url} alt="" />
         </div>)
}

export default Gif
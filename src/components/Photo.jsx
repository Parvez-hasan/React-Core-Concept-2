

export default function Photo ({photo}){
   console.log(photo);
    
   // const {thumbnailUrl,title,url} = Photo;
   return (
        <div className="cart">
            <h3>Foods Name : {photo.strMeal}</h3>
            <p>{photo.strInstructions}</p>
            <img src={photo.strMealThumb} alt="" />
            <video src={photo.strYoutube}></video>
        
        </div>
    )
}
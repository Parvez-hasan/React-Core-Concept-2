import { use } from "react";
import Photo from "./Photo";
export default function Photos ({photoPromise}){
      const allPhoto =  use(photoPromise);
        console.log(allPhoto);
    return(
        <div className="cart">
            <h3>my all post {allPhoto.length}</h3>
            {
                allPhoto.meals.map(photo => <Photo key={allPhoto.meals.index} photo={photo}></Photo>)
            } 
        </div>
    )
}
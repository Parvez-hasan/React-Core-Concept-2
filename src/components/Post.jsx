export default function Post ({post}){
   // console.log(post);
    const {title, body} = post;
    return(
        <div className="cart">

           <h5>{title}</h5>
           <p>{body}</p>

        </div>
        
    )
}
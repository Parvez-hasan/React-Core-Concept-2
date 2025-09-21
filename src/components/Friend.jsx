export default function friend ({friend}){
    //console.log(friend);
    // destracharing
    const {name, phone, email, website} = friend
    
    return (
        <div className="cart">

            {/* <h4>Name : {friend.name} </h4>
            <h5>Phone : {friend.phone}</h5>
            <h5>Email : {friend.email}</h5>
            <p>Website : {friend.website}</p> */}

            <h4>Name : {name} </h4>
            <h5>Phone : {phone}</h5>
            <h5>Email : {email}</h5>
            <p>Website : {website}</p>

        </div>
    )
};
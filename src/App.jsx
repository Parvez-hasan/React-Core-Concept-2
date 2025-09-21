
import './App.css'
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';
import Counter from './components/counter';
import Batsman from './components/Batsman';
import Users from './components/Users';
import { Suspense } from 'react';
import Friends from './components/Friends';
import Posts from './components/Posts';
import Photos from './components/Photos';


const fetchPhotos = async () => {
 const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
 return res.json();
}

// const fetchPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//    return res.json();
// };

  // const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())



  // const fetchFriends = async () => {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //   return res.json();
  // }


function App() {

const photoPromise = fetchPhotos();
//console.log(photoPromise);

//  const friendsPromise = fetchFriends();
 // const postPromise = fetchPosts();



  function headleClick() {
    alert('i am clicked')
  }
  const hrandleClick3 = () => {
    alert("hi clicked 3")
  }

  const headleAdd = (num) => {
    const newNum = num + 10;
    alert(newNum)
  }

  // const actors = ['parvez', 'hasan','salman',"rajjak", 'noyon', 'shakib', 'deav'];
  // const singers = [
  // { id: 1, name: 'Dr. mustak', age: 50},
  // { id: 2, name: 'Dr. mustakim', age: 80},
  // { id: 3, name: 'Mr. mustakimu', age: 30},

  // ];
  // const books = [
  //   {id: 1, name: 'physics', price: 250},
  //   {id: 2, name: 'bangla', price: 260},
  //   {id: 3, name: 'math', price: 280},
  //   {id: 4, name: 'english', price: 350},
  //   {id: 5, name: 'ICT', price: 200},
  // ]


  return (
    <>
      
      <h3>Vite + React</h3>

      <Suspense fallback={<h4> photos comeing soon....</h4>}>
        <Photos photoPromise={photoPromise} ></Photos>
      </Suspense>

      {/* <Suspense fallback={<h4>post are comeing......</h4>}>
             <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>hello my all friend....</h3>}>
        <Friends friendsPromise ={friendsPromise}></Friends>
      </Suspense> */}



      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={headleClick}>Click Me</button>

      <button onClick={hrandleClick3} >Click me 3</button>
      <button onClick={() => alert('a cilck 4')} >Click me 4</button>

      <button onClick={() => headleAdd(8)} >Cilck add</button>

      {/* <Library books={books}></Library> */}

      {/* actors.map(actor => <Actor  actor={actor}></Actor>) */}
      {
        // singers.map(singer => <Singer key={singer.id} singer={singer} ></Singer> )
      }

    </>
  )
}

export default App

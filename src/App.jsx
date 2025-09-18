
import './App.css'
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';
import Counter from './components/counter';

function App() {
  function headleClick(){
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
      <div>
       
      </div>
      <h3>Vite + React</h3>
      <Counter></Counter>

      <button onClick={headleClick}>Click Me</button>

      <button onClick={hrandleClick3} >Click me 3</button>
      <button onClick={() => alert('a cilck 4')} >Click me 4</button>

      <button onClick={ () => headleAdd(8)} >Cilck add</button>

    {/* <Library books={books}></Library> */}

      
        {/* actors.map(actor => <Actor  actor={actor}></Actor>) */}

    
      {
        // singers.map(singer => <Singer key={singer.id} singer={singer} ></Singer> )
     }
      
    </>
  )
}

export default App

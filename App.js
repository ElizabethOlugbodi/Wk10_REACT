import { useState, useEffect } from "react";
import Box from "./box";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("Steve");
  const [photos, setPhotos] = useState([]);

  const arr = [{ name: "Steve" }, { name: "Gary" }, { name: "Tony" }];

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, [user]); //everytime user's value changes, useEffect will ri=un again

  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }

  // codes above, performs the same function as codes below

  // arr.map((item, index) => {
  //   console.log(item);
  // }); // i means index

  // const useState = (initialVal) => {
  //   let stste = initailVal;

  //   const setState = (newVal) => {
  //     state = newVal
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      {/* <img src="https://picsum.photos/200" alt="random picture from LP"></img>  */}
      {/* The code above is replaced with botton below where 'e' is event; */}
      {/* <button onClick={(e) => fetchImages()}>Fetch Photo From LP</button> */}
      {photos.map((item, index) => {
        return (
          <div>
            <h2>{item.author}</h2>
            <img src={item.download_url} />
          </div>
        );
      })}
      {/* <Box name={user} /> */}
      {/* <Box name="Gary" />
      <Box name="Clive" />
      <Box name="Kelvin" /> */}
      {/* instead of writing the above over an over we use  */}
      {/* {arr.map((item, i) => {
        return (
          <div>
            <Box name={item.name} />
          </div>
        );
      })}
      <input onChange={(event) => setUser(event.target.value)} />
      {user && <Box name="Tony" />}
      {user ? <Box name="Jeff" /> : <Box name="Not Jeff" />} */}
    </div>
  );
};

// const fetchImages = async () => {
//   const response = await fetch("https://picsum.photos/v2/list");
//   const data = await response.json();
//   setPhotos(data);
// };

// useEffect(() => {
//   fetchImages();
// }, []);
//every time user's value changes, useEffect will run again

//   return (
//     <div className="App">
//       <SignOrLog setter={setUser} />
//       <h1>{user}</h1>
//       {user &&
//         photos.map((item, i) => {
//           return <Image key={i} author={item.author} url={item.download_url} />;
//         })}
//     </div>
//   );
// };

export default App;

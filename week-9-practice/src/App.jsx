import { useEffect, useState } from "react";
import { PostComponent } from "./post";
import { ProfileCard } from "./profilecard";

function App() {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  function increaseCount(){
    setCount(count => count + 1)
  }

  useEffect(function(){
    const timer = setInterval(increaseCount, 5000)

    return function(){
      clearInterval(timer);
    }
  }, [])

  useEffect(function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
     .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false)
     })
  }, [currentTab])

  const postComponents = posts.map(post =>  <PostComponent
  name={post.name}
  subtitle={post.subtitle}
  image={post.image}
  time={post.time}
  description={post.description}
  />
  )

  function addPost(){
    setPosts([...posts, {
      name: "hrushikesh",
      image:"https://media.istockphoto.com/id/956765438/photo/american-pit-bull-terrier.jpg?s=612x612&w=0&k=20&c=Z_iBdcku8YzDbtwtAvl7FfwemSFb4oa_76RIkPzIZ-A=",
      subtitle:"12k followers",
      time: "3h ago",
      description: "Want to know about dogs... Join the community of 2399+ dog parents"
      }])
  }


  return <div>
      <div style={{ background: "#dfe6e9", height: "100vh", }}>
        <div>
          <button onClick={addPost} style={{ fontSize: 34, margin: 25 }}>Add post</button>
          <img src="https://media.gettyimages.com/id/1270018740/photo/bell-drawing-you-have-a-new-notification.jpg?s=612x612&w=0&k=20&c=jQXUBS2xU-ZsTkm5eYodk0oCRpXNjBDUAKgKxCkZzCY="
            style={{ width: 40 }} />
          <span style={{ background: "red", fontSize: 22, borderRadius: 30, color: "white" }}>{count}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {postComponents}
          </div>
        </div>
          <div style={{}}>
          <button onClick={function(){
            setCurrentTab(1)
          }} style={{fontSize: 32, color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
          <button onClick={function(){
            setCurrentTab(2)
          }} style={{fontSize: 32, color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
          <button onClick={function(){
            setCurrentTab(3)
          }} style={{fontSize: 32, color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
          <button onClick={function(){
            setCurrentTab(4)
          }} style={{fontSize: 32, color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
        </div>
        <p style={{fontSize: 40}}>{loading ? "Loading...." : tabData.title}</p>
      </div>
  </div>
}




export default App

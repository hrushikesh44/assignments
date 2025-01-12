
function App() {

  return (
    <div style={{background: "#dfe6e9", height: "100vh", margin: 0,
       display: "flex",
       justifyContent: "center"
    }}>
      <div style={{marginTop: 10 }}>
        <div>
          <PostComponent/>
        </div>
        <br/>
        <div>
          <PostComponent/>
        </div>
        <br/>
        <div>
          <PostComponent/>
        </div>
      </div>
    </div>
  )
}

const style = { width: 200,display:"flex", borderRadius: 10, borderWidth: 1, borderColor: "gray",  }

function PostComponent(){
  return(
    <div style={{maxWidth: 500, borderRadius: 3 , background: "white",
       borderRadius: 10, padding: 10
    }}>
      <div  style={style}>
        <div>
          <img src={"https://pluspng.com/img-png/pitbull-png-junior-the-pitbull-also-known-as-junior-is-one-of-cesar-millan-s-dogs-that-appears-in-the-dog-whisperer-with-cesar-millan-he-is-the-successor-of-daddy-the-300.png"} 
          style={{width: 70,
            height: 60,
            borderRadius: 20
          }}/>
        </div>
        <div style={{fontSize: 18, }}>
          <b>Hrushikesh</b>
          <div>12000 followers</div>
          <div>13h ago</div>
        </div>
      </div>
      <div style={{fontSize: 24}}>
        Want to know about pitbulls.. join the community of around 10,000 dog parents
      </div>
    </div>
  )
}

export default App

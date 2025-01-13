export function ProfileCard(){
    return(
      <>
        <div style={{background: "white", borderRadius: 15, margin: 15, minWidth: 400, minHeight: 300,
        padding: 25
        }}>
          <div style={{display:"flex"}}>
            <div>
              <img src="https://pluspng.com/img-png/pitbull-png-junior-the-pitbull-also-known-as-junior-is-one-of-cesar-millan-s-dogs-that-appears-in-the-dog-whisperer-with-cesar-millan-he-is-the-successor-of-daddy-the-300.png"
              style={{width: 200,
                height: 150, 
                borderRadius: 100,
                }}
              />
            </div>
            <div style={{fontSize: 20}}>
              <b>Hrushikesh Modupalli</b>
            </div>
          </div>
          <div style={{fontSize: 24}}>
          I like to talk about dogs
          </div>
        </div>
      </>
    )
  }
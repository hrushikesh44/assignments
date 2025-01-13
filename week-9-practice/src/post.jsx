const style = { width: 200,display:"flex", borderRadius: 10, borderWidth: 1, borderColor: "gray",  }


export function PostComponent({name, subtitle, image, description, time}){
    return(
      <div style={{maxWidth: 500, borderRadius: 3 , background: "white",
         borderRadius: 10, padding: 25
      }}>
        <div  style={style}>
          <div>
            <img src={image} 
            style={{width: 60,
              height: 60,
              borderRadius: 100
            }}/>
          </div>
          <div style={{fontSize: 18, }}>
            <b>{name}</b>
            <div>{subtitle}</div>
            <div>{time}</div>
          </div>
        </div>
        <div style={{fontSize: 24}}>
          {description}
        </div>
      </div>
    )
  }
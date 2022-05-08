const users = [
    {url: "assets/img/9gag.svg", user: "9gag"}, {url: "assets/img/meowed.svg", user: "meowed"}, {url: "assets/img/barked.svg", user: "barked"}, {url: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"}, {url: "assets/img/wawawicomics.svg", user: "wawawicomics"}, {url: "assets/img/respondeai.svg", user: "respondeai"}, {url: "assets/img/filomoderna.svg", user: "filomoderna"}, {url: "assets/img/memeriagourmet.svg", user: "memeriagourmet"} ]
  
  function Story (props) {
    return (
        <div class="story">
                <div class="imagem">
                  <img src={props.image} />
                </div>
                <div class="usuario">
                  {props.user}
                </div>
          </div>
    )
  }
  
 export default function Stories () {
    return (
      <div class="stories">
        {users.map(el => (<Story image={el.url} user={el.user} />))}
        <Setinha />
      </div>
      
    )
  }
  
  function Setinha () {
    return (
      <div class="setinha">
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
    ) 
  }
  
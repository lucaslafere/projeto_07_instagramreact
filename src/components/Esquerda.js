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

function Stories () {
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


const postArr = [{userImg: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", commentImg: "assets/img/respondeai.svg", topComment: "respondeai", others: "outras 101.523 pessoas"},{userImg: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", commentImg: "assets/img/adorable_animals.svg", topComment: "adorable_animals", others: "outras 99.159 pessoas"}]

export default function Esquerda () {
  return (
      <div class="esquerda">
        <Stories />
        <Posts /> 
      </div>

  )
}

function Posts () {
  return (
    <div class="posts">
      {postArr.map (el => <Post user={el.user} userImg={el.userImg} content={el.content} commentImg={el.commentImg} topComment={el.topComment} others={el.others} />)}
    </div>
  )
}

function Post (props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.userImg} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div class="conteudo">
        <img src={props.content} />
      </div>
      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="curtidas">
          <img src={props.commentImg} />
          <div class="texto">
          Curtido por <strong>{props.topComment}</strong> e <strong>{props.others}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}








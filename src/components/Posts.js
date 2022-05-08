const postArr = [{userImg: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", commentImg: "assets/img/respondeai.svg", topComment: "respondeai", others: "outras 101.523 pessoas"},{userImg: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", commentImg: "assets/img/adorable_animals.svg", topComment: "adorable_animals", others: "outras 99.159 pessoas"}]

export default function Posts () {
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
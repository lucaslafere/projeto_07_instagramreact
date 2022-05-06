function User () {
  return (
    <div class="usuario">
      <img src="assets/img/catanacomics.svg" />
      <div class="texto">
      <strong>catanacomics</strong>
      Catana
      </div>
    </div>
  )
}

const sugestoesArr = [{img: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você"}, {img: "assets/img/chibirdart.svg", user: "chibirdart", reason: "Segue você"},{img: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram"}, {img: "assets/img/adorable_animals.svg", user: "adorable_animals", reason: "Segue você"}, {img: "assets/img/smallcutecats.svg", user: "smallcutecats", reason: "Segue você"}]

function Sugestao (props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.img} />
        <div class="texto">
          <div class="nome">{props.user}</div>
          <div class="razao">{props.reason}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
  </div>
  )
}

function Sugestoes () {
  return (
    <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>
            {sugestoesArr.map(el => <Sugestao img={el.img} user={el.user} reason={el.reason} />)}
          </div>
  )
}

function Links () {
  return (
    <div class="links">
      Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
    </div>
  )
}

function Copyright () {
  return (
          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
  )
}

export default function Sidebar () {
    return (
        <div class="sidebar">
          <User />
          <Sugestoes />   
          <Links />
          <Copyright />
        </div>
    )
}
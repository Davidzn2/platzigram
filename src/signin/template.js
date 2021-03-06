var yo = require('yo-yo');
var landing = require('../landing')
 var signinForm = yo `<div class="col s12 m7">
    <div class="row">
    <div class="signup-box">
      <h1 class="platzigram">Platzigram</h1>
      <form class="signup-form">
        <h2>Registrate para ver fotos</h2>
        <div class="section">
          <a class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
          <a class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Iniciar sesión </a>
          <div class="divider"></div>
          <div class="section">
            <input type="text" name="username" placeholder="Nombre de usuario">
            <input type="password" name="password" placeholder="Contraseña">
            <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia sesión</button>
          </div>
        </div>
      </form>
    </div>
    </div>
    <div class="row">
      <div class="login-box">
        ¿No tienes una cuenta? <a href="/signup">Registrate</a>
      </div>
    </div>
  </div>`;

  module.exports = landing(signinForm)

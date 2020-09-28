import React from 'react';
import './login.css';

function login() {
    return (
        <div id="container">
            <div id="logo">
                <h1>Short.me</h1>
            </div>
            <div id="form">
                <form action="" method="post">

                    <input type="text" placeholder="Nome de usuário"  autoComplete="false" class="input" name="username" id="input_username"/>

                    <input type="password" placeholder="Palavra-passe"  autoComplete="false" class="input" name="username" id="input_password"/>
                    <br/>
                    <a href="/">Esqueci minha senha, desejo recuperar!</a>
                    
                    <button id="button_login" type="submit" class="blue_button">Entrar</button>

                    <br/>
                    <a href="/">Se não tens uma conta, podes criar agora mesmo.</a>

                    <button id="button_signup" type="submit" class="secundary_button">Cadastra-se agora</button>

                </form>
            </div>
        </div>
    )
}

export default login

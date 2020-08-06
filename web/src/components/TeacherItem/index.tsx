import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';


function TeacherItem(){
    return(
        <article className="teacher-item">
              <header>
                  <img src="https://avatars2.githubusercontent.com/u/56797122?s=460&u=cd8c24f112522c9ae9222d3e7947bbb11d04d7b5&v=4" alt="Igor Delesposti"/>
                  <div>
                      <strong>Igor Delesposti</strong>
                      <span>Aulas de Bateria</span>
                  </div>
              </header>

              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>

              <footer>
                  <p>
                      Preço/hora
                      <strong>R$ 80,00</strong>
                  </p>
                  <button type="button">
                      <img src={whatsappIcon} alt="Whatsapp"/>
                      Entrar em contato
                  </button>
              </footer>
          </article>
    )
}

export default TeacherItem;
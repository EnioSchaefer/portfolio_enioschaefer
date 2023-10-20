import profile_pic from './images/profile_pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <img src={profile_pic} alt="profile_pic" className='profile_pic' />
        <h1 class="name">Enio Schaefer</h1>
        <p className='header-text'>
          Olá! Sinta-se a vontade para olhar meus perfis no <a href='https://www.linkedin.com/in/enioschaefer/' target='blank'>LinkedIn</a> e <a href='https://github.com/EnioSchaefer' target='blank'>GitHub</a> <br></br> ou dê uma olhada em alguns dos meus projetos abaixo!
        </p>
      </header>
      <div className='main_content'>
        <a className='project_link project_1' href='https://github.com/EnioSchaefer/project-csharp-trybe-hotel' target='blank'>
          <h3>Projeto TrybeHotel</h3>
          <p>Uma API .NET para gerenciamento hoteleiro. Possui funcionalidades para autenticação de usuários, gerenciar hotéis e quartos, realizar reservas e procurar hotéis próximos utilizando geolocalização.</p>
        </a>
        <a className='project_link project_2' href='https://github.com/EnioSchaefer/project-gp-fullstack-delivery-app' target='blank'>
          <h3>Projeto Delivery App Full-Stack</h3>
          <p>Uma aplicação full-stack para um serviço de delivery online, com funcionalidades para clientes, vendedores e administradores.</p>
        </a>
        <a className='project_link project_3' href='https://github.com/EnioSchaefer/project-full-backend-trybeFC' target='blank'>
          <h3>Projeto TrybeFC Full-Stack</h3>
          <p>Aplicação sobre futebol onde é possível ver e controlar os resultados das partidas.</p>
        </a>
        <a className='project_link project_4' href='https://github.com/EnioSchaefer/project-react-recipes-app' target='blank'>
          <h3>Projeto Recipes App</h3>
          <p>Aplicação front-end realizada em grupo, para pesquisa e realização de receitas, utilizando principalmente React e React Hooks.</p>
        </a>
        <a className='project_link project_5' href='https://github.com/EnioSchaefer/project-oop-mongodb-car-shop' target='blank'>
          <h3>Projeto Car Shop</h3>
          <p>Aplicação back-end para administração de uma loja de veículos, com um CRUD utilizando Typescript e MongoDB + Mongoose.</p>
        </a>
        <a className='project_link project_6' href='https://github.com/EnioSchaefer/project-csharp-api-de-receitas' target='blank'>
          <h3>Projeto Api de Receitas</h3>
          <p>Uma API .NET que permite salvar e recuperar receitas, além de possuir criação e administração de contas de usuário e um sistema de comentários nas receitas.</p>
        </a>
      </div>
    </div>
  );
}

export default App;

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=15C3D6&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=15C3D6&labelColor=000000">
</p>

<br>

<h1 align="center">
  Smarkio App
</h1>
<h3>
  Uma aplicação simples, que transcreve textos em áudio.
</h3>

## 🚀 Tecnologias utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:
- [Nodejs v14.15.4](https://nodejs.org/en/)
- [MySQL 8.0.23](https://www.mysql.com/) & [MariaDB v10.5.8](https://mariadb.org/)
- [Watson - text-to-speech](https://www.ibm.com/br-pt/cloud/watson-text-to-speech)
- [React v17.0.1](https://reactjs.org)
- [Material UI](https://material-ui.com/)

## Indice
* [Screenshots](#screenshots)
* [Requisitos](#requisitos)
* [Instalação](#instalando)
* [Configurando](#configurando)
* [Uso](#uso)

# Screenshots
Click to expand.<br>
<div>
<img src="https://i.imgur.com/RPCDOhV.png" width="20%" height="20%" />
</div>
<div>
<img src="https://i.imgur.com/xHaYCs1.png" width="20%" height="20%" />
</div>

# Requisitos
1. Crie uma conta na [IBM Cloud account](https://cloud.ibm.com/registration/).
2. Crie uma instância do serviço 'Text to Speech':
    - Vá até a instância do serviço criado, [Text to Speech](https://cloud.ibm.com/catalog/services/text-to-speech) 
      na pagina de catálogo de serviços('IBM Cloud Catalog').
    - Logue-se com sua conta IBM Cloud.
    - Clique em **Create**.
    - Clique em **Show** para ver as credênciais do seu serviço.
    - Copie os dados nos campos `apikey` e `url`.
3. Faça um clone do projeto para sua máquina, acesse a pasta Server abra o arquivo index.js com seu editor de texto favorito e substitua os seguintes campos,
'apikey' e 'serviceUrl' com suas credênciais:
    <div>
      <img src="https://i.imgur.com/qajPYON.png" width="20%" height="20%" />
    <div>

# Instalando
1. Com o projeto clonado em sua máquina, é necessário ter instalado o NodeJS em sua versão 10+ em sua máquina e o MySQL 5.3.
Caso não tenha você pode baixa-los e configura-los acessando:
  - [NodeJS](https://nodejs.org/en/), aqui você poderá baixar o Node em sua versão mais recente e compatível com seu 
sistema operacional.
  - [MySQL](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/mysql-installer.html), aqui você poderá baixar e configurar o MySQL de acordo com seu 
sistema operacional.

2. Após instalar e configurar o Node e o MySQL, é necessário que você baixe as dependências do projeto, para isto, basta você acessar a pasta do projeto 'smarkio-app',
que foi clonada para sua máquina, acessar a pasta Client e rodar o seguinte comando no terminal:

```
$ npm install
```
Depois acesse a pasta Server e execute o mesmo comando acima.

# Configurando
1. Com o MySQL instalado. Acesse a pasta Server, abra o arquivo index.js com seu editor de texto favorito e substitua os seguintes campos, 'host', 'user' e 'password'
pelos seus respectivos dados de acesso ao MySQL, configurados no passo de [instalação](#instalando):
  <div>
    <img src="https://i.imgur.com/Q5aJKPG.png" width="20%" height="20%" />
  <div>
2. Para que a aplicação funcione corretamente é estritamente necessário criar o banco de dados que será utilizado na aplicação,
para isso você pode acessar o MySQL instalado e configurado anteriormente e rodar as seguintes query:

Criando o banco:
```
CREATE DATABASE smarkioDB;
```

Selecionando o banco:
```
USE smarkioDB;
```

Criando tabelas:
```
CREATE TABLE IF NOT EXISTS `smarkioDB`.`comments` (
  `id_comments` int(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `comments` TEXT NOT NULL,
  `post_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
```

# Uso
Após as configurações, é necessário rodar a aplicação e para isso basta você acessar a pasta Server, e no terminal rodar o comando:

```
node index.js
```

Obs: E necessário iniciar o MySQL antes para que o backend da aplicação possa se conectar com o banco de dados.

Feito isso, navegue até a pasta Client, e execute o seguinte comando no terminal:
```
npm start
```

No campo de texto, escreva o texto que deseja transcrever, clique em 'CADASTRAR' e atualize a página (F5).
Para ouvir o texto transcrito, clique em 'OUVIR' e aguarde 3 segundos.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

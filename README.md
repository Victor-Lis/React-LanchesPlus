
# React Laches+

Esse é o primeiro projeto na qual integrei mais de uma aplicação ao mesmo banco de dados, no caso foi um App e um Site, sendo esse o site. O projeto em si consiste em um WebApp para uma loja de comidas / fast-food.



## Desafios

Acredito que meus principais desafios nesse projeto foram:
- Utilizar pela primeira vez a lib "react-router-dom".
- Uma das primeiras vezes usando ternary operator.
- Uma das primeiras vezes fazendo um sistema de login na web (trabalhando com LocalStorage).
- Criação de um QR Code usando uma API e passando valores em JSON (QR Code pode ser lido no App de Admin).




## Aprendizados

Por final aprendi algumas coisas interessantes como: 



#### Usar a lib "react-router-dom"
Na época não conhecia o useContext(), então setava os dados "manualmente" para cada componente e para cada filho de cada componente.
```javascript

<BrowserRouter>     
  <div className="container">
    <Nav userID={userID}/>
    <Routes>
      <Route path="/" element={<Home userID={userID} datas={produtos != null?produtos : ""}/>}/>
      <Route path="/menu" element={<Menu datas={produtos != null?produtos : ""}/>}/>
      <Route path="/produto/:id" element={<Product datas={produtos != null?produtos : ""} userID={userID}/>}/>
      <Route path="/carrinho" element={<Carrinho userID={userID}/>}/>
      <Route path="/login" element={<Login userID={userID} setUserID={setUserID}/>}/>
      <Route path="/cadastro" element={<Cadastro userID={userID} setUserID={setUserID}/>}/>
      <Route path="/dados" element={<UserDatas userID={userID} setUserID={setUserID} />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
  </div>
</BrowserRouter>
```

#### Utizar Ternary Operator
Uma das primeiras vezes utilizando Ternary Operator, prática muito mais comum para mim hoje em dia.

```javascript
{showPassword? <FiEye/>: <FiEyeOff/>}
```

#### Usar useEffect() + localStorage para sistema de login

```javascript
useEffect(() => {
  let userId = localStorage.getItem("@useruid")
  setUserID(userId)

  getDatas(userId)
}, [])
```

#### Gerar um QR Code usando uma API

```javascript
async function finish(){

  const objetoString = JSON.stringify(produtos)

  const objetoCodificado = btoa(objetoString)

  const url = `https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=${objetoCodificado}`;

  setImg(url)

  setShowQRCode(true)

}

```
# Screenshots

![Banner](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/Home%20Banner.png)

![Home Pedidos](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/Home%20Pedidos.png)

![Pedidos Icons](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/Pedidos%20Icons.png)

![Pedidos Secoes](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/Pedidos%20Secoes.png)

![Carrinho](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/Carrinho.png)

![User](https://github.com/Victor-Lis/React-LanchesPlus/blob/master/src/ScreenShots/User.png)

## Outros

 - [App para Administradores](https://github.com/Victor-Lis/Adm-App-for-LanchesPlus)


## Autores

- [@Victor-Lis](https://github.com/Victor-Lis)


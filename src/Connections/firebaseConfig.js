import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBoRVeP8zoNJo-BTQB2kuGt7mfWWNgyFzk",
    authDomain: "lanches-website.firebaseapp.com",
    databaseURL: "https://lanches-website-default-rtdb.firebaseio.com",
    projectId: "lanches-website",
    storageBucket: "lanches-website.appspot.com",
    messagingSenderId: "985383985789",
    appId: "1:985383985789:web:6713e954352c6fa44b4714",
    measurementId: "G-R58NM39WQE"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const auth = getAuth(app);

let userID;

async function cadastrar(email, password, setUserID, nome) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Obter o objeto do usuário criado
        const user = userCredential.user;
        userID = userCredential.user.uid;
        localStorage.setItem("@useruid", userID)
        // console.log(userID)
        setUserID(userID)

        const usuario = {
          nome: nome,
          email: user.email,
          carrinho: '',
          compras: 0,
          senha: password,
          cargo: "Cliente"
        };

        const usuarioRef = ref(database, `usuarios/${userID}`);
        set(usuarioRef, usuario)
          .then(() => {
            // alert("Usuário registrado com sucesso!");
            
          })
          .catch((error) => {
            alert(error)
          });
        })
      .catch((error) => {
          alert(error)
      });
        
}  


async function logar(email, password, setUserID){

    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      userID = userCredential.user.uid;
      localStorage.setItem("@useruid", userID)
      setUserID(userID)
      // console.log("Usuário logado com sucesso");
    })
    .catch((error) => {
      alert("Erro ao fazer login: "+error);
    });

}
  

async function getUserDatas(useruid){

  const database = getDatabase(app);
  const productsRef = ref(database, `usuarios/${useruid}`);
  let userData

  await get(productsRef).then((snapshot) => {
    
    if(snapshot.exists()){
      userData = snapshot.val()
    }

  })
  
  return userData;

}

async function getProductsDatas(){

  const userRef = ref(database, `produtos/`);
  let userData;

  await get(userRef).then((snapshot) => {

    userData = Object.values(snapshot.val())

  })

  return userData;

}

async function addRequest(useruid, data){

  const carrinhoRef = ref(database, `usuarios/${useruid}/carrinho`);

  await push(carrinhoRef, data)

}

async function getProduct(useruid){

  const carrinhoRef = ref(database, `usuarios/${useruid}/carrinho`);
  let datas;

  await get(carrinhoRef).then((snapshot) => {
    
    if(snapshot.exists()){
      datas = Object.values(snapshot.val())
    }

  })

  return datas

}

async function deleteAtributte(index, useruid){

  const carrinhoRef = ref(database, `usuarios/${useruid}/carrinho`);
  let data;

  const snapshot = await get(carrinhoRef);
  if (snapshot.exists()) {
    data = Object.values(snapshot.val());
  } else {
    data = [];
  }

  let datas = data.splice(index, 1)[0];
  await set(carrinhoRef, data);
  return datas;

}

async function deleteAll(useruid){

  const userRef = ref(database, `usuarios/${useruid}/carrinho`);
  let userData = [];

  await set(userRef, userData).then("Item deletado!")

}

export { firebaseConfig, cadastrar, logar, getUserDatas, addRequest, deleteAtributte, getProductsDatas, deleteAll, getProduct };
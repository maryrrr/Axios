const getbtn=document.getElementById('getBtn')
const globBtn=document.getElementById('globBtn')
const container_name=document.getElementById('post_name')
const cont_var=document.getElementById('conteiner_var')
let dataUser=[]

axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    const { data } =res
    dataUser=data
})
.catch((err) => console.error(err));


function imprimir_varglobal (){
    const {id,name,username}= dataUser
    console.log(dataUser);
    dataUser.forEach(element =>{
        console.log(element);
        cont_var.innerHTML += `
        <h2>${element.username}</h2>`
})
}

globBtn.addEventListener('click',imprimir_varglobal)



function imprimir_usuarios (){
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) =>{
        const { data} =res
        data.forEach(post => {
            container_name.innerHTML+=`
            <h2>${post.name}</h2>`
        console.log(post.name);
    });
        console.log(data)
})
.catch((err) => console.error(err))

}

getbtn.addEventListener('click',imprimir_usuarios)


// axios.get("https://dog.ceo/api/breeds/list/all")

// .then((res) => console.log(res.data.message))

// .catch((err) => console.error(err));
const btn =document.getElementById('getBtn')
const conteiner_posts= document.getElementById('posts')
const razaBtn=document.getElementById('razaBtn')
const container_Image=document.getElementById('img_post')
const allImgBtn=document.getElementById('allImg')
const contanier_AllImg=document.getElementById('contanier_AllImg')


let var_global=[]
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res) =>{
    const { data } =res
    var_global = data
})
.catch((err) => console.error(err));



function imprimir_usuarios (){
    axios
        .get(" https://dog.ceo/api/breeds/list/all ")
        .then((res) =>{
        const {data} =res
        console.log(res)
        
    
        Object.entries(data.message).forEach(post => {
            console.log(post)
            conteiner_posts.innerHTML +=`
            <p>${post}</p>`
   })
})
.catch((err) => console.error(err))
}


async function return_image (){
    try {
        const rand_image = await axios.get('https://dog.ceo/api/breeds/image/random')
        console.log(rand_image.data)
        container_Image.innerHTML=`<img src=${rand_image.data.message} />`
    } catch (error) {
        console.log(error)
    }
    

}

async function return_Allimage (){
    try{
        const allimage= await axios.get('https://dog.ceo/api/breed/hound/images ')
        console.log(allimage.data.message);
        allimage.data.message.forEach(element =>{
            console.log(element);
            contanier_AllImg.innerHTML+=`<img src=${element} />`
            console.log(contanier_AllImg);
        })

    } catch (error){
        console.log (error)
    }
}
btn.addEventListener('click',imprimir_usuarios)
razaBtn.addEventListener('click',return_image)
allImgBtn.addEventListener('click',return_Allimage)

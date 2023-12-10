async function getRandomDog(){
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(res.data);
    const img = document.getElementById('dog');
    img.src = res.data.message;
}

async function getDogByBreed(breed){
    try {

    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.getElementById('dog');
    img.src = res.data.message;

    } catch (e){
        alert('BREED NOT FOUND!')
        getRandomDog();
    }
    
}

const form = document.getElementById('searchform');
const input = document.getElementById('search');

form.addEventListener("submit", (e)=>{

    e.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
    

} )



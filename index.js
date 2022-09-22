const country = document.querySelector('.country')
const array = [];
const filterSearch = document.querySelector('.search')
const countrydp = document.querySelector('#countrydropdown')

const getcountry = async ()=>{
   const getApi = await fetch('https://restcountries.com/v3.1/all')
   const getData = await getApi.json()
   console.log(getData)
   

   country.innerHTML =''
    getData.forEach(e => {
        let li = document.createElement('li')
        array.push(li)
        console.log(array)
        li.innerHTML=`
        <div class="sec">
        
          <img src="${e.flags.svg}" alt="">
    
            <div class="sec2">
                <h4>${e.name.common}</h4>
                <p>population:${e.population}</p>
                <p>region:${e.subregion}</p>
                <p>capital:${e.capital}</p>
            </div>
        </div>
        `
        // li.classList.add('images')

        country.appendChild(li) 
    })
}
// getcountry();

// filtercountry
filterSearch.addEventListener('keyup',(e)=>{
    e.preventDefault()
    array.filter((h) => {
        if(h.innerText.toLowerCase().includes(e.target.value.toLowerCase().trim())){
            h.classList.remove('check')
        }else{
            h.classList.add('check')
        }
    })

})

// dropdown

const getcountrybyregion = async ()=>{
    const getApi = await fetch(`https://restcountries.com/v3.1/region/${countrydp.value}`)
    const getData = await getApi.json()
   console.log(getData)
   

   country.innerHTML =''
    getData.forEach(e => {
        let li = document.createElement('li')
        array.push(li)
        console.log(array)
        li.innerHTML=`
        <div class="sec">
        
          <img src="${e.flags.svg}" alt="">
    
            <div class="sec2">
                <h4>${e.name.common}</h4>
                <p>population:${e.population}</p>
                <p>region:${e.subregion}</p>
                <p>capital:${e.capital}</p>
            </div>
        </div>
        `
        // li.classList.add('images')

        country.appendChild(li) 
    })
    
}
// getcountrybyregion()
document.addEventListener('DOMContentLoaded',getcountry())
countrydp.addEventListener('click',()=>{
    if(countrydp.value === ""){
        getcountry()
    }else{
        getcountrybyregion()
    }
});


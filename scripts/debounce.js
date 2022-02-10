let bomb;
let nameInp=document.getElementById("nameInp");
    nameInp.addEventListener("keyup",function(){
       debounce(getname,300);
    })
    function debounce(func,delay) {
    clearTimeout(bomb);
    bomb=setTimeout(function(){
        func()
    },delay);
  }
  async function getname(){
      debounceBox.innerHTML=null;
    nameInp=nameInp.value;
    console.log(nameInp);
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nameInp}`;
    let response= await fetch(url);
    let data=await response.json();
    if(data.meals==null){
        console.log('No Food found');
        debounceBox.innerHTML=null;
    }else{
        console.log('data;',data.meals);
        // showData(data);
            data.meals.map( a => {
                
                let searchResBox = document.createElement("div");
                searchResBox.classList = "hem";
                searchResBox.innerHTML = `${a.strMeal}`;
                searchResBox.addEventListener("click",() =>{
                    document.getElementById("nameInp").value = `${a.strMeal}`; 
                })
                debounceBox.append(searchResBox)
            })
    }
    //console.log('data:',data);
}
export {debounce,getname}
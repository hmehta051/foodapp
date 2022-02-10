async function showData(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    } catch(err){
        console.log('err:',err);
    }
}

function appendData(data,location){
    catalog.innerHTML=null
    data.forEach((el)=>{
        let div = document.createElement('div');
        div.id="png";
        let img = document.createElement('img')
        img.src = el.strMealThumb
       
        let div1 = document.createElement('div');
        div1.id="detail";
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        h2.innerText=el.strMeal
        p.innerText=el.strArea
        p1.innerText=el.strInstructions
        div.append(img)
        div1.append(h2,p,p1)

        location.append(div,div1)
    })
}

export {showData,appendData}
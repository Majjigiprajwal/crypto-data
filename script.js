async function Getdata(){
    const api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    const res=await fetch(api);

    const data=res.json();

 
    return data
    
}


async function getOutPut()
{
   let ans="";
    const result=await Getdata();
    let n=result.length;
    let image=document.querySelectorAll('img');

    let name=document.querySelectorAll('.name');
    let simb=document.querySelectorAll('.symbol');
    let price=document.querySelectorAll('.cr-Price');
    let volume=document.querySelectorAll('.volume');
    let percent=document.querySelectorAll('.percent');
    let markCap=document.querySelectorAll('.markUp');

      for(var i=0;i<n;i++)
    {
  
        let img=result[i].image;
        image[i].src=img;
        name[i].innerHTML=result[i].name;
        simb[i].innerHTML=result[i].symbol.toUpperCase();
        price[i].innerHTML=`$${result[i].current_price}`;
        volume[i].innerHTML=`$${result[i].total_volume}`;
        let val=result[i].price_change_percentage_24h+"";

         percent[i].innerHTML=val.substring(0,5)+"%";

        markCap[i].innerHTML=`Mkt.Cap: $${result[i].market_cap}`;
   
    }
    for(var i=0;i<n;i++){
        if(percent[i].innerHTML.charAt(0)=='-')
        {
            percent[i].style.color="red"
        }
    }


    
    console.log(result);
  
    
}
getOutPut();

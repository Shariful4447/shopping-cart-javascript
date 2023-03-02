document.getElementById("case-increase").addEventListener("click",function(){
    
    
   
    var caseInput = document.getElementById("case-count");
    var caseCount = parseInt(caseInput.value);
    var caseNewCount = caseCount+1;
    caseInput.value = caseNewCount;

    // const price = document.getElementById("price").innerText;
    // const mobilePrice = parseInt(price);
    const totalPrice = caseNewCount * 1219;
    document.getElementById("mobile-price").innerText=totalPrice;

    



   
    
    

})

document.getElementById("case-decrease").addEventListener("click",function(){
    
    
   
    var caseInput = document.getElementById("case-count");
    var caseCount = parseInt(caseInput.value);
    var caseNewCount = caseCount-1;
    caseInput.value = caseNewCount;

    // var price = document.getElementById("price").innerText;
    // var totalPriceN =  parseInt(price);
    const newTotalPrice= caseNewCount * 1219;
    document.getElementById("mobile-price").innerText=newTotalPrice;
    



   
    
    

})




// document.getElementById("case-increase-case").addEventListener("click",function(){
    
//    handleChange(true); 
   
// })

// document.getElementById("case-decrease-case").addEventListener("click",function(){
    
    
//    handleChange(false);
    
// })
function handleChange(isIncrease){
    var caseInput = document.getElementById("case-count-case");
    var caseCount = parseInt(caseInput.value);
    let caseNewCount=caseCount;
    if(isIncrease == true){
        caseNewCount = caseCount + 1;
    }
    if(isIncrease == false && caseCount>0){
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;

    // var price = document.getElementById("price").innerText;
    // var totalPriceN =  parseInt(price);
    const newTotalPrice= caseNewCount * 59;
    document.getElementById("case-price").innerText=newTotalPrice;

}










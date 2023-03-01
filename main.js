document.getElementById("case-increase").addEventListener("click",function(){
    
    
   
    var caseInput = document.getElementById("case-count");
    var caseCount = parseInt(caseInput.value);
    var caseNewCount = caseCount+1;
    caseInput.value = caseNewCount;

    const price = document.getElementById("price").innerText;
    const mobilePrice = parseInt(price);
    const totalPrice = caseNewCount * mobilePrice;
    document.getElementById("price").innerText=totalPrice;
    



   
    
    

})


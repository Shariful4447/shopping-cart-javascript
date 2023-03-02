function handleProductChange(product, isIncrease){
    var productInput = document.getElementById(product + '-count');
    var productCount = parseInt(productInput.value);
    let productNewCount=productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount>0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    //const newTotalPrice= productNewCount * 59;
    let productTotal=0;
    if(product == 'phone'){
        productTotal=productNewCount*1219;
    }
    if(product == 'case'){
        productTotal=productNewCount*59;
    }
    document.getElementById(product + '-total').innerText=productTotal;

}


// document.getElementById("case-increase").addEventListener("click",function(){
    
    

//     handlePhoneChange(true);
   
//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount+1;
//     caseInput.value = caseNewCount;

//     // const price = document.getElementById("price").innerText;
//     // const mobilePrice = parseInt(price);
//     const totalPrice = caseNewCount * 1219;
//     document.getElementById("mobile-price").innerText=totalPrice;

    



   
    
    

// })

// document.getElementById("case-decrease").addEventListener("click",function(){
    
    
//     handlePhoneChange(false);


//     var caseInput = document.getElementById("case-count");
//     var caseCount = parseInt(caseInput.value);
//     var caseNewCount = caseCount-1;
//     caseInput.value = caseNewCount;

  
//     const newTotalPrice= caseNewCount * 1219;
//     document.getElementById("mobile-price").innerText=newTotalPrice;
    



   
    
    

// })






// document.getElementById("case-increase-case").addEventListener("click",function(){
    
//    handleChange(true); 
   
// })

// document.getElementById("case-decrease-case").addEventListener("click",function(){
    
    
//    handleChange(false);
    
// })
// function handlePhoneChange(isIncrease){
//     var phoneInput = document.getElementById("case-count");
//     var phoneCount = parseInt(phoneInput.value);
//     let phoneNewCount=phoneCount;
//     if(isIncrease == true){
//         phoneNewCount = phoneCount + 1;
//     }
//     if(isIncrease == false && phoneCount>0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;

   
//     const newTotalPhonePrice= phoneNewCount * 1219;
//     document.getElementById("mobile-price").innerText=newTotalPhonePrice;

// }


// function handleChange(isIncrease){
//     var caseInput = document.getElementById("case-count-case");
//     var caseCount = parseInt(caseInput.value);
//     let caseNewCount=caseCount;
//     if(isIncrease == true){
//         caseNewCount = caseCount + 1;
//     }
//     if(isIncrease == false && caseCount>0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;

    
//     const newTotalPrice= caseNewCount * 59;
//     document.getElementById("case-price").innerText=newTotalPrice;

// }










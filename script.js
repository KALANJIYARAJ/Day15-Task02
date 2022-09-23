


function foo(){
    let name=document.getElementById("name").value;
    let name1=document.getElementById("name1").value;
    let address=document.getElementById("address").value;
    
    let pincode=document.getElementById("pincode").value;
    pincode=+pincode;
    if(pincode!== +pincode){
        window.alert("Enter valid number of pincode");
    }
    
    let gender=document.querySelector('input[name="gender"]:checked').value;
    

    let food=document.querySelectorAll('input[type="checkbox"]:checked');
    for (var checkbox of food) {let a=checkbox.value}
    console.log(checkbox);
   

    let state=document.getElementById("state").value;
    let country=document.getElementById("country").value;
   

    let tableBody=document.getElementById("tbody");

    let tr =document.createElement("tr");

    let td1 =document.createElement("td");
    td1.innerHTML=`${name}`;

    let td2 =document.createElement("td");
    td2.innerHTML=`${name1}`;

    let td3 =document.createElement("td");
    td3.innerHTML=`${address}`;

    let td4 =document.createElement("td");
    td4.innerHTML=`${pincode}`;

    let td5 =document.createElement("td");
    td5.innerHTML=`${gender}`;

    let td6 =document.createElement("td");
    td6.innerHTML=`${checkbox.value}`;

    let td7 =document.createElement("td");
    td7.innerHTML=`${state}`;

    let td8 =document.createElement("td");
    td8.innerHTML=`${country}`;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tableBody.append(tr);


    document.getElementById("name").value="";
    document.getElementById("name1").value="";
    document.getElementById("address").value="";
    document.getElementById("pincode").value="";
    document.getElementById("female").value.checked=false;
    document.getElementById("male").value.checked=false;
    document.querySelector('input[name="gender"]:checked').value.checked=false;
    document.getElementById("state").value="";
    document.getElementById("country").value="";

}






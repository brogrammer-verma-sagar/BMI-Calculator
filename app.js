window.onload =() => {
    const button = document.getElementById('btn');
    button.addEventListener('click',()=>{
        console.log("Clicked");
        calculateBMI();
    });
}


// function to calculate the bmi
function calculateBMI(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');

    


    if(!height || isNaN(height) || height<0){
        result.innerText = "Invalid Height";
        return;
    }
    else if(!weight || isNaN(weight) || weight<0){
        result.innerText = "Invalid Weight";
        return;
    }

    const bmi = (weight/ ((height*height)/10000)).toFixed(2);

    if(bmi<18.5){
        result.innerText = `Underweight : ${bmi}`;
    }
    else if(bmi>=18.5 && bmi<24.9){
        result.innerText = `Normal : ${bmi}`;
    }
    else if(bmi>=25 && bmi<29.9){
        result.innerText =`Overweight : ${bmi}`;
    }
    else if(bmi>=30 && bmi<34.9){
        result.innerText =`Obesity (class I) : ${bmi}`;
    }
    else if(bmi>=35 && bmi<39.9){
        result.innerText =`Obesity (class II) : ${bmi}`;
    }
    else{
        result.innerText=`Extreme Obesity : ${bmi}`;
    }
}
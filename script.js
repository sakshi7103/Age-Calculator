function calculateAge(){
    const input=document.getElementById('date').value;
    const result=document.getElementById('result');
    const error=document.getElementById('error');

    if(!input){
        error.textContent='Please Enter A Valid Birthdate';
        return;
    }
    error.textContent='';

    const dob=new Date(input);
    const today=new Date();

    let year=today.getFullYear()-dob.getFullYear();
    let month=today.getMonth()-dob.getMonth();
    let day=today.getDate()-dob.getDate();

    if(month < 0 || (month === 0 && day < 0))
    {
        year--;
        month+=12;
    }
    if(day < 0){
        const lastmonth=new Date(today.getFullYear(),today.getMonth(),0);
        day += lastmonth.getDate();
        month--;
    }
    result.textContent=`You are ${year} Year,${month} Month,${day} Day Old🎉🎊`; 
}
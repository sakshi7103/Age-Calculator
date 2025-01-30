function calculateAge(){
    const input=document.getElementById('date').value;
    const result=document.getElementById('result');
    const error=document.getElementById('error');

    result.textContent='';
    error.textContent='';

    if(!input){
        error.textContent='Please Enter A Valid Birthdate';
        return;
    }

    const dob=new Date(input);
    const today=new Date();
    if(dob > today){
        error.textContent='The Date Cannot be in the Future';
        return;
    }

    let year=today.getFullYear()-dob.getFullYear();
    let month=today.getMonth()-dob.getMonth();
    let day=today.getDate()-dob.getDate();

    if(month < 0 || (month === 0 && day < 0))
    {
        year--;
        month += 12;
    }
    
    result.textContent=`You are ${year} Year,${month} Month,${day} Day Old🎉🎊`; 
}
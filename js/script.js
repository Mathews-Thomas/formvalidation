// function validate()
// {
//     if(document.getElementById('inputbox1').value=='')
// {
//     document.getElementById('invalidtext1').innerHTML="* please enter your name."
// }
// else if(document.getElementById('inputbox2').value=='')
// {
//     document.getElementById('invalidtext2').innerHTML="* please enter your email."
//     document.getElementById('invalidtext1').innerHTML=""
// }
// else if(document.getElementById('inputbox3').value=='')
// {
//     document.getElementById('invalidtext3').innerHTML="* please enter your password"
//     document.getElementById('invalidtext2').innerHTML=""
// }
// else if(document.getElementById('inputbox4').value==''){
    
//     document.getElementById('invalidtext4').innerHTML="* please enter your address"
//     document.getElementById('invalidtext3').innerHTML=""
// }
// else if(document.getElementById('inputbox5').value=='')
//     {
//         document.getElementById('invalidtext5').innerHTML="* please enter your username"
//         document.getElementById('invalidtext4').innerHTML=""
//     }
//     else if(document.getElementById('inputbox6').value=='')
//     {
//         document.getElementById('invalidtext6').innerHTML="* please enter your number"  
//         document.getElementById('invalidtext5').innerHTML=""
//     }
//     else if(document.getElementById('inputbox7').value=='')
//     {
//         document.getElementById('invalidtext6').innerHTML="* please confirm your password" 
//         document.getElementById('invalidtext5').innerHTML=""
//     }
//     else{
//         document.getElementById('formsub').submit()
//     }
function validate()
{
    var genders =document.getElementsByName('gender');
    if(document.getElementById('inputbox1').value=='')
{
    document.getElementById('invalidtext1').innerHTML="* please enter your name."
    return false
}
else if(document.getElementById('inputbox2').value=='')
{
    document.getElementById('invalidtext2').innerHTML="* please enter your email."
    document.getElementById('invalidtext1').innerHTML=""
    return false
}
else if(document.getElementById('inputbox3').value=='')
{
    document.getElementById('invalidtext3').innerHTML="* please enter your password"
    document.getElementById('invalidtext2').innerHTML=""
    return false 
}
else if(document.getElementById('inputbox4').value==''){
    
    document.getElementById('invalidtext4').innerHTML="* please enter your address"
    document.getElementById('invalidtext3').innerHTML=""
    return false
}
else if(document.getElementById('inputbox5').value=='')
    {
        document.getElementById('invalidtext5').innerHTML="* please enter your username"
        document.getElementById('invalidtext4').innerHTML=""
        return false
    }
    else if(document.getElementById('inputbox6').value=='')
    {
        document.getElementById('invalidtext6').innerHTML="* please enter your number"  
        document.getElementById('invalidtext5').innerHTML=""
        return false
    }
    else if(document.getElementById('inputbox7').value=='')
    {
        document.getElementById('invalidtext6').innerHTML="* please confirm your password" 
        document.getElementById('invalidtext5').innerHTML=""
        return false
    }
    else if(genders[0].checked == false && genders[1].checked == false){
        document.getElementById('invalidtext8').innerHTML=" * please confirm your gender"
        document.getElementById('invalidtext7').innerHTML=""
        return false
    }
    else{
        return true
    }
}
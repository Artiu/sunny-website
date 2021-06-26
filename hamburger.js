document.querySelector('.navbar__hamburger').addEventListener('click',()=>{
    let currentStatus = document.querySelector('.navbar__mobile').style.display;
    if(currentStatus=="none" || currentStatus=="")
    {
        document.querySelector('.navbar__mobile').style.display = "block";
    }
    else
    {
        document.querySelector('.navbar__mobile').style.display = "none";
    }
})
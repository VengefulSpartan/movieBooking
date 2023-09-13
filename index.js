$(".icon").on("click",(e)=>{
    //var selected=$("#mov").children("option:selected").value;
    if(Number($('select').val())===0){
        alert("Please Select a movie first")
    }else{
        $(e.target).toggleClass("blue");
        $(e.target).toggleClass("ab");    
        var bill=document.querySelectorAll(".ab");
        bill=bill.length;  
        $(".seats").text(bill);
        var money=$("select").val();
        money=money*bill;
        $(".money").text(money);
    }
})

//var noofseats=document.querySelectorAll(".ab").length;
//totaling



function confirmation(){
    if(Number($("select").val())===0){
        alert("Please Select a movie to continue.");
    }else{
        var bill=document.querySelectorAll(".ab");
        bill=bill.length;
        var money=$("select").val();
        money=money*bill;  
        alert(`Congrats, you have confirmed ${bill} seats for $${money} only. Enjoy the show.` );
    }
    
}
$(document).ready(function(){
    console.log("Jquery is loaded");
    $(".burger-btn").on("click", function(){
        const id =$(this).val();

        $.ajax({
            url: "/api/burgers/" + id,
            method: "PUT"
        }).then(function(data){
            location.reload();
        })
    });
})

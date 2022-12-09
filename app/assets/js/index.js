//const { $where } = require("../../server/model/model");


$("#add_textbook").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_textbook").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();

    $.map(unindexed_array,function(n,i){
        data[n['textbook']] = n['value']
    })

    console.log(data);

    var request = {
        "url" : 'http://localhost:3000/api/textbook/' + data.id,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!")
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : ('http://localhost:3000/api/textbook/' + id),
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this textbook?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!")
                location.reload()
            })
        }

    })
}
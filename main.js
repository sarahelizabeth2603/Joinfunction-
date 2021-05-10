name_of_student_array=[];
var display_student_array=[];


function submit(){
    for (var j=1 ; j<=4 ; j++){
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_student_array.push(name_of_the_student);

 
    }
    console.log(name_of_student_array);

    var length_of_array=name_of_student_array.length;
    console.log(length_of_array);


    for(var k =0; k<length_of_array;k++){

        display_student_array.push("<h4>Name - "+name_of_student_array[k]+"</h4>");
        console.log(display_student_array);


    }
document.getElementById("display_name_with_commas").innerHTML=display_student_array;

var remove_coma=display_student_array.join(" ");
console.log(remove_coma);
document.getElementById("display_name_without_commas").innerHTML=remove_coma;

document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}

function sorting(){

    name_of_student_array.sort();
    console.log(name_of_student_array);

    var display_student_array_sorting=[];

    var length_of_array_sorting=name_of_student_array.length;
    console.log(length_of_array_sorting);

    for(var k=0;k<length_of_array_sorting;k++){
display_student_array_sorting.push("<h4>Name - "+name_of_student_array[k]+"</h4>");

    }
console.log(display_student_array_sorting);

document.getElementById("display_name_with_commas").innerHTML=display_student_array_sorting;

var remove_coma=display_student_array_sorting.join(" ");
console.log(remove_coma);
document.getElementById("display_name_without_commas").innerHTML=remove_coma;

}
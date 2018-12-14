 function myFunction() 
        {

                var name = document.getElementById("name").value;
                var birth = document.getElementById("dob").value;
                var hobb = document.getElementById("hobbie").value;
                var today = new Date();
                var birthDate = new Date(birth);
                var preage = today.getFullYear() - birthDate.getFullYear();
     var minmaj = " ";
     document.getElementById("age").value = preage;
     if (preage < 18) {
         document.getElementById("minmaj").value = "minor";
         minmaj = "minor";
     }
     else {
         document.getElementById("minmaj").value = "major";
         minmaj = "major";
     } 
                        
                var personalDetails = {name, birth: birth, age: preage, adolscence: minmaj, hobbies: hobb};
                console.log(personalDetails, '333');
                
                document.getElementById("flname").innerHTML = personalDetails.name;
                document.getElementById("fldob").innerHTML= personalDetails.birth;
                document.getElementById("flage").innerHTML = personalDetails.age;
                document.getElementById("flminor").innerHTML = personalDetails.adolscence;
                document.getElementById("flhobb").innerHTML = personalDetails.hobbies;
                document.getElementById("finald1").style.display = "block";
        }
             function ageDone()
             {
                 
                 var birth = document.getElementById("dob").value;
                 var today = new Date();
                 var birthDate = new Date(birth);
                 var preage = today.getFullYear() - birthDate.getFullYear();
                 document.getElementById("age").value = preage;
                 var minmaj = " ";
                 if (preage < 18) {
                     document.getElementById("minmaj").value = "minor";
                     minmaj = "minor";
                 }
                 else {
                     document.getElementById("minmaj").value = "major";
                     minmaj = "major";
                 } 
             }
                function myBlock()
                {

                    document.getElementById("first1").style.display="block";
                }
                
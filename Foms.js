 <script>
 
        function sub(){
       
       var x1=document.getElementById("select1").value;
       var x2=document.getElementById("fname").value;
       
       var x3=document.getElementById("mail").value;
       var x4=document.getElementById("num").value;
       
       var x5=document.getElementById("select2").value;
       
       var x6=document.getElementById("date1").value;
       
       var x7=document.getElementById("date2").value;
       var x8=document.getElementById("radio1").value;
       
       var x9=document.getElementById("radio2").value;
       var x10=document.getElementById("radio3").value;
       
       if (slect1.value == "" || fname.value == ""|| mail.value == "" || num.value == "" || select2.value == ""|| date1.value == "" || date2.value == "" || radio1.value == ""|| radio2.value == ""|| radio3.value == "")
       
       swal({
         title: "Fields Empty",
         text: "Please check the missing details",
         icon: "warning",
         button: "ok",
       });
       
       else {
        
        swal({
        title: "Successfuly Submitted",
        
        icon: "success",
        button: "yes!",
       });
         
        
        }
       }
       


    <style>


      
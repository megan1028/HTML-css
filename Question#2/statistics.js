
 var input=0,repeat=true,num=0,result="",even=0,odd=0,i=0;
   while(repeat){
  input=prompt("Enter numerical data,and enter -1 to end.");
   if(isNaN(input)||input=="")
    {
	  repeat=true;
	  alert("Enter a number");
	}
   else if(input!=-1){
   repeat=true;
    if(input%2==0)
	 even++;
	else
	 odd++;
    result+=input+"<br>";
	}
    else
    {
	  repeat=!repeat;
	  document.getElementById("statsOut").innerHTML =" You have entered below mentioned numbers<br>"+result+"You have entered "+even+"even numbers and "+odd+" odd numbers";
	}
	}
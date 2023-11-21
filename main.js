function celsuisTofahrenheit(){
    let cel = document.getElementById("celsius").value;
    if(cel==""){
      alert("Please! enter any celsius value to convert");
    }else{
      let fah = (cel * 9/5) + 32;
      document.getElementById("fahrenheit").value = fah;
    }
  }
  function kilogramTopound(){
    let kilogram = document.getElementById("kg").value;
    if(kilogram==""){
      alert("Please! enter any kilogram value to convert");
    }else{
      let pound = kilogram * 2.2;
      document.getElementById("pounds").value = pound;
    }
  }
  function kilometerTomiles(){
    let kilometer = document.getElementById("km").value;
    if(kilometer==""){
      alert("Please! enter any kilometer value to convert");
    }else{
      let mile = kilometer * 0.62137;
      document.getElementById("miles").value = mile;
    }
  }

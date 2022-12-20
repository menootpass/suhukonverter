class convertSuhu{
  constructor(suhu, nilai){
    this.suhu = suhu;
    this.nilai = nilai;
  }

  toFahrenheit(){
    if (this.suhu === 'c' || this.suhu === 'C'){
      return document.getElementById("warning").innerHTML = ((this.nilai*9/5)+32);
    }
    else if(this.suhu === 'k' || this.suhu === 'K'){
      return document.getElementById("warning").innerHTML = (this.nilai*9/5)-459.67;
    }
    else if(this.suhu === 're' || this.suhu === 'Re'){
      return document.getElementById("warning").innerHTML = this.nilai*2.2500 + 32.000;
    }
    return document.getElementById("warning").innerHTML = "tidak bisa mengkonvert suhu yang sama, suhu : "+this.suhu;
  }

  toCelcius(){
    if (this.suhu === 'f' || this.suhu === 'F'){
      return document.getElementById("warning").innerHTML = (this.nilai-32)*5/9;
    }
    else if(this.suhu === 'k' || this.suhu === 'K'){
      return document.getElementById("warning").innerHTML = (this.nilai-273.15)*5/5;
    }
    else if(this.suhu === 're' || this.suhu === 'Re'){
      return document.getElementById("warning").innerHTML = this.nilai*5/4;
    }
    return document.getElementById("warning").innerHTML = "tidak bisa mengkonvert suhu yang sama, suhu : "+this.suhu;
  }

  toReamur(){
    if (this.suhu === 'f' || this.suhu === 'F'){
      return document.getElementById("warning").innerHTML = (this.nilai-32)*4/9;
    }
    else if(this.suhu === 'k' || this.suhu === 'K'){
      return document.getElementById("warning").innerHTML = (this.nilai-273.15)*4/5;
    }
    else if(this.suhu === 'c' || this.suhu === 'C'){
      return document.getElementById("warning").innerHTML = this.nilai*4/5;
    }
    return document.getElementById("warning").innerHTML = "tidak bisa mengkonvert suhu yang sama, suhu : "+this.suhu;
  }

  toKelvin(){
    if (this.suhu === 'f' || this.suhu === 'F'){
      return document.getElementById("warning").innerHTML = (this.nilai+459.67)*5/9;
    }
    else if(this.suhu === 're' || this.suhu === 'Re'){
      return document.getElementById("warning").innerHTML = (this.nilai*5/4)+273.15;
    }
    else if(this.suhu === 'c' || this.suhu === 'C'){
      return document.getElementById("warning").innerHTML = (this.nilai*5/5)+273.15;
    }
    return document.getElementById("warning").innerHTML = "tidak bisa mengkonvert suhu yang sama, suhu : "+this.suhu;
  }

}


function hasil(){
  var nilaiMasuk = document.getElementById("input").value;
  var keSuhu = document.getElementById("keSuhu").value;
  var inputSuhu = document.getElementById("suhu").value;
  return ngitung(inputSuhu,nilaiMasuk,keSuhu);
}

function ngitung(inputSuhu,nilaiMasuk,keSuhu){
    var suhu = inputSuhu;
    var nilai = nilaiMasuk;
    var keSuhu = keSuhu;

    const hasil = new convertSuhu(suhu, nilai);

    if (keSuhu == 'c'){
      console.log(hasil.toCelcius());
    }
    else if(keSuhu == 'f'){
      console.log(hasil.toFahrenheit());
    }
    else if(keSuhu == 'k'){
      console.log(hasil.toKelvin());
    }
    else if(keSuhu == 're'){
      console.log(hasil.toReamur());
    }
    else{
      document.getElementById("warning").innerHTML = "Kesalahan dalam menginput nilai atau suhu";
    }
  
}

function tampilkan(){
  var x = document.getElementById("input").value;
  document.getElementById("warning").innerHTML = "Menampihan value = " + x;
}
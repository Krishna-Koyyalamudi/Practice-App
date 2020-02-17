function Grandtotal()
{
     let Total=parseFloat(document.querySelector('#total').value)
     let TipRate=parseFloat(document.querySelector('#tiprate').value)
         
     let Tip=Total*(TipRate/100)
     let TaxRate=Total*(5.50/100)
     let GrandTotal=Total+Tip+TaxRate;

     document.getElementById("Tip").innerHTML = Tip.toFixed(2);
     document.getElementById("Tax").innerHTML = TaxRate.toFixed(2);
     document.getElementById("GrandTotal").innerHTML = GrandTotal.toFixed(2);
     
}
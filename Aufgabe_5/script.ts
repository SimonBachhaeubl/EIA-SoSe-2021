var Europe2008: number = 4965.7;
var Europe2018: number = 4209.3;
var NorthAmerica2008: number = 3300.4;
var NorthAmerica2018: number = 6035.6;
var SouthAmerica2008: number = 1132.6;
var SouthAmerica2018: number = 1261.5;
var Africa2008: number = 1028;
var Africa2018: number = 1235.5;
var Asia2008: number = 12954.7;
var Asia2018: number = 16274.1;
var Australia2008: number = 1993;
var Australia2018: number = 2100.5;

var total2018: number = Africa2018 + SouthAmerica2018 +Europe2018 + NorthAmerica2018 +Asia2018 + Australia2018;

var totalEurope2018 = Math.round(Europe2018 * 100 / total2018)
var totalNorthAmerica2018 = Math.round(NorthAmerica2018 *100 / total2018);
var totalSouthAmerica2018 = Math.round(SouthAmerica2018 *100 / total2018);
var totalAfrica2018 = Math.round(Africa2018 *100/ total2018);
var totalAsia2018 = Math.round(Asia2018 *100 / total2018);
var totalAustralia2018 = Math.round(Australia2018 *100/ total2018);

var Europe2008_18 = Math.round (( Europe2018 - Europe2008 ) *100 / Europe2008);
var NorthAmerica2008_18 = Math.round (( NorthAmerica2018 - NorthAmerica2008 ) *100 / NorthAmerica2008);
var SouthAmerica2008_18 = Math.round (( SouthAmerica2018 - SouthAmerica2008 ) *100 /SouthAmerica2008);
var Africa2008_18 = Math.round ((Africa2018 - Africa2008 ) *100 / Africa2008);
var Asia2008_18 = Math.round (( Asia2018 - Asia2008 ) *100 / Asia2008);
var Australia2008_18 = Math.round ((Australia2018 - Australia2008) *100 / Australia2008);

var Europe2008_18_kg = Math.round (Europe2018 - Europe2008);
var NorthAmerica2008_18_kg = Math.round (NorthAmerica2018 - NorthAmerica2008);
var Southamerica2008_18_kg = Math.round (SouthAmerica2018 - SouthAmerica2008);
var Africa2008_18_kg = Math.round(Africa2018 - Africa2008);
var Asia2008_18_kg = Math.round (Asia2018 - Asia2008);
var Australia2008_18_kg = Math.round(Australia2018 - Australia2008);

console.log ("Die Emission von Europa ist " + Europe2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Europa damit " + totalEurope2018 + " %" )
console.log ("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + Europe2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + Europe2008_18_kg + " kg CO2")

console.log ("Die Emission von Nordamerika ist " + NorthAmerica2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + totalNorthAmerica2018 + " %" )
console.log ("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + NorthAmerica2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + NorthAmerica2008_18_kg + " kg CO2")

console.log ("Die Emission von Südamerika ist " + SouthAmerica2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + totalSouthAmerica2018 + " %" )
console.log ("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + SouthAmerica2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + Southamerica2008_18_kg + " kg CO2")

console.log ("Die Emission von Africa ist " + Africa2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + totalAfrica2018 + " %" )
console.log ("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + Africa2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + Africa2008_18_kg + " kg CO2")

console.log ("Die Emission von Asien ist " + Asia2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Asien damit " + totalAsia2018 + " %" )
console.log ("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + Asia2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " + Asia2008_18_kg + " kg CO2")

console.log ("Die Emission von Australien ist " + Australia2018 + " kg CO2")
console.log ("Relativ zur Gesamtemission der Welt verursacht Australien damit " + totalAustralia2018 + " %" )
console.log ("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + Australia2008_18 + " % verändert")
console.log ("2018 im Vergleich zu 2008 sind das " +  Australia2008_18_kg + " kg CO2")


const measure = Number(process.argv[2]);
const unit = String(process.argv[3]);

switch (unit) {
  case "feet":
    console.log("Inches = ",measure * 12);
    console.log("Meter = ",Math.round((measure * 0.3048)*100)/100)
    break
  case "inch":
    console.log("Feet = ",Math.round((measure/12)*100)/100);
    break
  case "meter":
    console.log("Meter = ",Math.round((measure/0.3048)*100)/100)
    break
  default:
    console.log("Enter valid measurement")
}

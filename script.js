import { name } from "./modules/localStorageData/store.js";
console.log(name())
let table = document.querySelector(".worktable")
let displayText = document.querySelector(".display_text")
let MonthName = document.getElementById("monthName").value
let year = Date().split(' ')[3]



let date = Date().split(' ')[2]
let hour = Date().split(' ')[4].split(':')[0]
let minute = Date().split(' ')[4].split(':')[1]
let currentMonth = Date().split(' ')[1]
let shortMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Novr','Dec']
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let monthsInMyanmar = ['ဇန်နဝါရီ','ဖေဖော်ဝါရီ','မတ်','ဧပြီ','မေ','ဇွန်','ဇူလိုင်','သြဂုတ်','စက်တင်ဘာ','အောက်တိုဘာ','နိုဝင်ဘာ','ဒီဇင်ဘာ']
let currentMonthIndex = (date < 15 ? shortMonths.findIndex((x=>x==currentMonth))-1 : shortMonths.findIndex((x=>x==currentMonth)))
currentMonth = shortMonths[currentMonthIndex]
// currentMonth = shortMonths.find((mon) => {
//     return mon == currentMonth
// });
console.log(currentMonth)
MonthName = currentMonth;

function constructTable(){
    
    let month = MonthName;
    console.log(month)
    if(month === "Sep" || month === 'Apr' || month === "Jun" || month === "Nov" ){
        totalDaysInmonth = 30
    }else if(month === "Feb"){
        if(year%4 === 0){
            totalDaysInmonth = 29
        }else{
            totalDaysInmonth = 28
        }
    }else{ 
        totalDaysInmonth = 31
    }
    console.log(totalDaysInmonth)
    let htmlTags = ``;
    for(let i = 0; i <= totalDaysInmonth-1; i++){
        let trForOneday = `<tr class=""><td class="bg-white text-green-500 py-1 pl-5 pr-4 border-2 border-green-500"> ${i+1} </td>
                   <td class="bg-white text-green-500 py-1 border-2 border-green-500">
                    <select onchange="Calculate()" name="" id="day${i+1}Start" class="rounded-lg focus-visible:bg-gray-700 focus-visible:border-collapse text-center">
                        <!-- <option value="06:00">06:00</option> -->
                        <option value="06:30">06:30</option>
                        <option value="07:00" selected>07:00</option>
                        <option value="07:30">07:30</option> 
                        <!-- <option value="08:00">08:00</option>
                        <option value="08:30">08:30</option> -->
                        <option class="text-purple-500" value="0:0">Absent Work</option>
                    </select>
                   </td>
                   <td class="bg-white text-green-500 py-1 border-2 border-green-500">
                    <select onchange="Calculate()" id="day${i+1}End" name="" class="rounded-lg focus-visible:bg-gray-700 focus-visible:border-collapse text-center">
                        <option class="text-blue-500" value="11:30">11:30</option>
                        <option class="text-green-500" value="16:30">16:30</option>
                        <option class="text-green-500" value="17:00">17:00</option>
                        <option class="text-green-500" value="17:30">17:30</option>
                        <option class="text-green-500" value="18:00">18:00</option>
                        <option class="text-green-500" value="18:30">18:30</option>
                        <option class="text-green-500" value="19:00">19:00</option>
                        <option class="text-green-500" value="19:30">19:30</option>
                        <option class="text-green-500" value="20:00" selected>20:00</option>
                        <option class="text-green-500" value="20:30">20:30</option>
                        <option class="text-orange-400" value="21:00">21:00</option>
                        <option class="text-orange-400" value="21:30">21:30</option>
                        <option class="text-orange-400" value="22:00">22:00</option>
                        <option class="text-orange-400" value="22:30">22:30</option>
                        <option class="text-orange-400" value="23:00">23:00</option>
                        <option class="text-orange-400" value="23:30">23:30</option>
                        <option class="text-rose-500 value="24:00">00:00(24:00)</option>
                        <option class="text-rose-500" value="24:30">00:30(24:30)</option>
                        <option class="text-rose-500" value="25:00">01:00(25:00)</option>
                        <option class="text-rose-500" value="25:30">01:30(25:30)</option>
                        <option class="text-rose-600" value="26:00">02:00(26:00)</option>
                        <option class="text-rose-600" value="26:30">02:30(26:30)</option>
                        <option class="text-rose-600" value="27:00">03:00(27:00)</option>
                        <option class="text-rose-600" value="27:30">03:30(27:30)</option>
                        <option class="text-rose-600" value="28:00">04:00(28:00)</option>
                        <option class="text-rose-600" value="28:30">04:30(28:30)</option>
                        <option class="text-rose-600" value="29:00">05:00(29:00)</option>
                        <option class="text-rose-600" value="29:30">05:30(29:30)</option>
                        <option class="text-rose-600" value="30:00">06:00(30:00)</option>
                        <option class="text-rose-600" value="30:30">06:30(30:30)</option>
                        <option class="text-rose-600" value="31:00">07:00(31:00)</option>
                        <option class="text-rose-600" value="31:30">07:30(31:30)</option>
                        <option class="text-rose-600" value="32:00">08:00(32:00)</option>
                        <option class="text-rose-600" value="32:30">08:30(32:30)</option>
                        <option class="text-rose-600" value="33:00">09:00(33:00)</option>
                        <option class="text-rose-600" value="33:30">09:30(33:30)</option>
                        <option class="text-rose-600" value="34:00">10:00(34:00)</option>
                        <option class="text-rose-600" value="34:30">10:30(34:30)</option>
                        <option class="text-rose-600" value="35:00">11:00(35:00)</option>
                        <option class="text-rose-600" value="35:30">11:30(35:30)</option>
                        <option class="text-purple-500" value="0:0">Absent Work</option>
    
    
                    </select>
                   </td>
                   <td class="bg-white text-green-500 py-1 border-2 border-green-500 "><input onchange="Calculate()" class="w-14 rounded-lg focus-visible:bg-gray-700 focus-visible:border-collapse text-center" id="day${i+1}ExtraOT" step="0.5" min="0" value="0" type="number" placeholder="extra OT" class="rounded-lg focus-visible:bg-gray-700 focus-visible:border-collapse text-center"></td></tr>`
                   htmlTags+= trForOneday;
                }
                table.innerHTML = htmlTags;
               
                
}
constructTable()

let totalday = 0;
console.log(totalday)
function Calculate(){
    let TotalWorkingHourForWholeMonth = 0
    let TotalOTForWholeMonth = 0
    for(let i =0; i <= totalDaysInmonth-1; i++){
        function startWorkHour(){
            let hour = parseInt(document.getElementById(`day${i+1}Start`).value.split(':')[0])
        let minute = parseInt(document.getElementById(`day${i+1}Start`).value.split(':')[1])
        let hourMinute = hour + minute/60
        return hourMinute;
        }

        function stopWorkHour(){
            let hour = parseInt(document.getElementById(`day${i+1}End`).value.split(':')[0])
        let minute = parseInt(document.getElementById(`day${i+1}End`).value.split(':')[1])
        let hourMinute = hour + minute/60
        return hourMinute;
        }

    let extraOT = parseFloat(document.getElementById(`day${i+1}ExtraOT`).value)

    let regularTotalWorkingHour = stopWorkHour()-startWorkHour()-1.5
    // 400 baht for 8 hours of working and 50 baht per hour for OT before 6:30 PM

    let regularWorkingHour = regularTotalWorkingHour >= 10 ? 10 : regularTotalWorkingHour
    let regularOT = regularTotalWorkingHour > 10 ? regularTotalWorkingHour - 10 : 0

    // 400 baht for 8 hours of working and 60 baht per hour for OT after 8 hours of daily working
    // let regularWorkingHour = regularTotalWorkingHour >= 8 ? 8 : regularTotalWorkingHour
    // let regularOT = regularTotalWorkingHour > 8 ? regularTotalWorkingHour - 8 : 0


    let totalOT = regularOT + extraOT
    TotalWorkingHourForWholeMonth += regularWorkingHour
    TotalOTForWholeMonth += totalOT
    }
    console.log(TotalWorkingHourForWholeMonth,TotalOTForWholeMonth)
    let DayWorkPricePerOneHour = 50
    let OTPricePerOneHour = parseFloat(document.querySelector(".OT_price").value)

    let salary = TotalWorkingHourForWholeMonth * DayWorkPricePerOneHour + TotalOTForWholeMonth * OTPricePerOneHour
    console.log(salary)
    let displaySalary = document.querySelector(".salary")
    displaySalary.innerHTML = salary
    console.log(OTPricePerOneHour)
     // display Text
     displayText.innerHTML = `${MonthName} အတွက် လစာ = ${salary} `
} 




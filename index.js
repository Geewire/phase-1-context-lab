/* Your Code Here */

function createEmployeeRecord(employeeInfo) {
    return {
       firstName: employeeInfo[0],
       familyName: employeeInfo[1],
       title: employeeInfo[2],
       payPerHour: employeeInfo[3],
       timeInEvents: [],
       timeOutEvents: [],
       
     }
   }
   

function createEmployeeRecords(employeeInfo){
       return employeeInfo.map(createEmployeeRecord)
       
}
   

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}  


function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
  
    return this

}
   
function hoursWorkedOnDate (workDate){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === workDate
    })
  
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === workDate
    })
  
    return (outEvent.hour - inEvent.hour) / 100
  }

   
function wagesEarnedOnDate(workdate){
       const hours = hoursWorkedOnDate.call(this, workdate)
       this.payPerHour
       return parseFloat(hours.toString())
  }
   
let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
    }

let calculatePayroll = function(arrayOfEmployeeRecords){
        return arrayOfEmployeeRecords.reduce(function(memo, rec){
            return memo + allWagesFor.call(rec)
        }, 0)
      }

//this was given in the lab
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


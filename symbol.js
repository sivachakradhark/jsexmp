let eid=symbol('uid')
let emp={
    'eid':101,
    [eid]:5001
}
    
console.log("employee id",emp.eid)
console.log("user id",emp[eid])
for(property in emp) {
    console.log(property)

}
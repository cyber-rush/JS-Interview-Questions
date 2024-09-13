var fullName = "Ujjawal Joshi"
var obj = {
    fullName: "Hacker Ujjawal",
    getFullNameV2: () => this.fullName,
    getFullNameV3: (function () {
        return this.fullName
    })()
}
console.log(obj.getFullNameV2())
console.log(obj.getFullNameV3())
const Employee = require("./Employee")
// officeNumber

// getRole() // Overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}
module.exports = Manager;
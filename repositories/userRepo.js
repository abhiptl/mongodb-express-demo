/**
 * Created by AbhishekPatel on 7/30/2017.
 */

let createUser = (user) => {
    console.log("First Name :"+ user.firstname);
    console.log("Last Name :"+ user.lastname);
    console.log("Gender :"+ user.gender);
    return 101;
}

module.exports = {
    createUser
}

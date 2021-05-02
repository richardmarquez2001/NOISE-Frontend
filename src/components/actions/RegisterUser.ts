import axios from "axios";

export default class RegisterUser {
  postUsers(fields: any) {
    if (fields.password !== fields.verifypassword) {
      console.log("L");
    }

    console.log(fields.verifypassword);
    console.log(`reached`);
    console.log(fields);
    let insertData = {
      name: `${fields.firstName} ${fields.lastName}`,
      email: fields.email,
      city: fields.city,
      password: fields.password,
    };
    console.log(insertData);

    // let data = JSON.stringify(fields);

    // axios.post(`https://ruhack-noise.herokuapp.com/users`, JSON.parse(data))
    //     .then( res => {
    //         console.log(`success!`);
    //         console.log(res);
    //     })
    //     .catch(res =>{
    //         console.log(`failed OMEGALUL`);
    //     });
  }
}

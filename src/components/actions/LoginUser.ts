import axios from 'axios';

export default class LoginUser{

    postUsers(fields: Object){
        console.log(`reached`);
        console.log(fields);
        let data = JSON.stringify(fields);

        axios.post(`https://ruhack-noise.herokuapp.com/users/login`, JSON.parse(data))
            .then( res => {
                console.log(`success!`);
                console.log(res);
            })
            .catch(res =>{
                console.log(`failed OMEGALUL`);
            });
    }
}

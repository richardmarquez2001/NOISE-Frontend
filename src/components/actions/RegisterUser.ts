import axios from 'axios';

export default class RegisterUser{
    
    postUsers(fields: Object){
        console.log(`reached`);
        console.log(fields);
        let data = JSON.stringify(fields);

        axios.post(`http://localhost:8012/users`, JSON.parse(data))
            .then( res => {
                console.log(`success!`);
                console.log(res);
            })
            .catch(res =>{
                console.log(`failed OMEGALUL`);
            });
    }
}

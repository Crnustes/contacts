import axios from 'axios';

export class ContactService {
    static serverURL = 'http://localhost:9000';

    static getAllContacts (){
        let dataURL = 'http://localhost:9000/contacts';
        return axios.get(dataURL);
    }
}
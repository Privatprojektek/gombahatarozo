import axios from "axios";
export default class DataService {
    constructor() {
        console.log("DataService");
        axios.defaults.baseURL = "http://localhost:3001/";
    }
    getData(vegpont, callback) {
        axios
            .get(vegpont)
            .then(function (response) {
             
                console.log(response.data);
                callback(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    postData(vegpont, data) {
        console.log(data)
        console.log(vegpont)
        axios
            .post(vegpont,data,{
                headers: {
                  'Content-Type': 'application/json'
                }})
            .then(function (resp) {
               console.log("sikeres küldés")
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    putData(vegpont,id,  data) {
        console.log(data)
        console.log(vegpont + "/" + id)
        axios
            .put(vegpont + "/" + id,data,{
                headers: {
                  'Content-Type': 'application/json'
                }})
            .then(function (resp) {
               console.log("sikeres küldés")
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    deleteData(vegpont, id) {
        axios
            .delete(vegpont + "/" + id)
            .then(function (resp) {
                console.log("sikeres törlés")
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
}

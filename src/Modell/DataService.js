import axios from "axios";
export default class DataService {
    constructor() {
        console.log("DataServise");
        axios.defaults.baseURL=""
    }
    getData(vegpont, callback) {
        axios
            .get(vegpont)
            .then(function (response) {
                // handle success
                /*   console.log(response);
          console.log(response.data);
          console.log(response.data.irok); */
          console.log(response.data)
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

    postData() {}

    putData() {}

    deleteData(vegpont, id, callback) {
        axios
            .delete(vegpont + "/" + id)
            .then(function (response) {
                callback(response);
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

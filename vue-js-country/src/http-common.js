import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    'Access-Control-Allow-Headers':"*",
    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJleHAiOjE2Mzg2NDM1ODd9.ElZWManySJkZcEyiT8rHtwQe9IxEMj3GXiIsfKEtK-Y"
  }
});
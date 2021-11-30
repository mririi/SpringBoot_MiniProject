import http from "../http-common";

class DataService {
  getAll() {
    return http.get("/country/api/all");
  }

  getAllContinents() {
    return http.get("/country/api/continent/all");
  }

  get(id) {
    return http.get(`/country/api/${id}`);
  }

  create(data) {
    return http.post("/country/api/", data);
  }

  update(id, data) {
    return http.put(`/country/api/${id}`, data);
  }

  delete(id) {
    return http.delete(`/country/api/${id}`);
  }

  deleteAll() {
    return http.delete(`/country/api/`);
  }

  findByName(title) {
    return http.get(`/?title=${title}`);
  }
}

export default new DataService();
<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="country.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="nb_states">Number of States</label>
        <input
          class="form-control"
          id="nb_states"
          required
          v-model="country.nbStates"
          name="nb_states"
        />
      </div>
      <div class="form-group">
        <label for="founded_in">Founded In</label>
        <input
          class="datepicker form-control"
          id="founded_in"
          type="date"
          pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
          required
          v-model="country.foundedIn"
          name="founded_in"
        />
      </div>
      <div class="form-group">
       <label for="continent">Continent</label>
       <select name="continent" id="continent" v-model="country.continent">
         <option v-for="con in continents" :key="con.id" :value="con">{{ con.name }}</option>
       </select>
      </div>
      <!--<div class="form-group">
        <label for="continent_id_continent">Continent</label>
        <input
          class="form-control"
          id="continent_id_continent"
          required
          v-model="country.continent"
          name="continent_id_continent"
        />
      </div> -->

      <button @click="saveCountry" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <a class="btn btn-success"
          :href="'/'"
        >
          LIST
        </a>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "AddCountry",
  data() {
    return {
      country: {
        name: "",
        nbStates: "",
        foundedIn: "",
        continent: ""
      },
      continents: [],
      submitted: false
    };
  },
  methods: {
    retrieveContinents() {
      DataService.getAllContinents()
        .then(response => {
          this.continents = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e+"44444");
        });
    },

    saveCountry() {
      var data = {
        name: this.country.name,
        nbStates: this.country.nbStates,
        foundedIn:this.country.foundedIn,
        continent:this.country.continent
      };

      DataService.create(data)
        .then(response => {
          this.country.idCountry = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newCountry() {
      this.submitted = false;
      this.country = {};
    },
    
  
},
mounted() {
    this.retrieveContinents();
  },
}
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
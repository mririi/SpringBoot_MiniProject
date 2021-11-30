<template>
<div>
  <div class="list row">
    
    <div class="col-md-8">
    <!--  <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Name"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div> 
      -->
    </div>
    <div class="col-md-6">
      <h4>Countries List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(country, index) in countries"
          :key="index"
          @click="setActiveCountry(country, index)"
        >
          {{ country.name }}
        </li>
      </ul>
      <a class="m-3 btn btn-success"
          :href="'/add/'"
        >
          Add
        </a>

      <!--<button class="m-3 btn btn-sm btn-danger" @click="removeAllCountries">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentCountry">
        <h4>Country</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentCountry.name }}
        </div>
        <div>
          <label><strong>Number of States:</strong></label> {{ currentCountry.nbStates }}
        </div>
        <div>
          <label><strong>Founded in:</strong></label> {{ currentCountry.foundedIn }}
        </div>
        <div>
          <label><strong>Continent:</strong></label> {{ currentCountry.continent.name }}
        </div>

        <a class="btn btn-success"
          :href="'/countries/' + currentCountry.idCountry"
        >
          Edit
        </a>
        <button class="m-3 btn btn-danger" @click="removeCountry(currentCountry)">
          Delete
        </button>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Country...</p>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "CountriesList",
  data() {
    return {
      countries: [],
      continents: [],
      currentCountry: null,
      currentIndex: -1,
      name: ""

    };
  },
  methods: {
    retrieveCountries() {
      DataService.getAll()
        .then(response => {
          this.countries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveContinents() {
      DataService.getAllContinents()
        .then(response => {
          this.continents = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveCountries();
      this.currentCountry = null;
      this.currentIndex = -1;
    },

    setActiveCountry(country, index) {
      this.currentCountry = country;
      this.currentIndex = index;
    },

    removeCountry(currentCountry) {
      DataService.delete(currentCountry.idCountry)
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchName() {
      DataService.findByName(this.Name)
        .then(response => {
          this.countries = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCountries();
    this.retrieveContinents();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
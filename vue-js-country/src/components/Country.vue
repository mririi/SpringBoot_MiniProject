<template>
  <div v-if="currentCountry" class="edit-form">
    <h4>Country</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentCountry.name"
        />
      </div>
      <div class="form-group">
        <label for="nb_states">Number of States</label>
        <input type="text" class="form-control" id="nb_states"
          v-model="currentCountry.nbStates"
        />
      </div>

      <div class="form-group">
        <label for="founded_in">Founded In</label>
        <input type="date" class="form-control" id="founded_in"
          v-model="currentCountry.foundedIn"
        />
      </div>
      <div class="form-group">
        <label for="continent_id_continent">Continent</label>
        <input type="text" class="form-control" id="continent_id_continent"
          v-model="currentCountry.continent.name"
        />
      </div>
    </form>


    <button class="btn btn-danger"
      @click="deleteCountry"
    >
      Delete
    </button>

    <button type="submit" class="btn btn-primary"
      @click="updateCountry"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Country...</p>
  </div>
</template>

<script>
import DataService from "../services/DataService";

export default {
  name: "Country",
  data() {
    return {
      continents: [],
      currentCountry: null,
      message: '',
    };
  },
  methods: {
    getCountry(id) {
      DataService.get(id)
        .then(response => {
          this.currentCountry = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateCountry() {
      DataService.update(this.currentCountry.idCountry, this.currentCountry)
        .then(response => {
          console.log(response.data);
          this.message = 'The Country was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteCountry() {
      DataService.delete(this.currentCountry.idCountry)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "countries" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCountry(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
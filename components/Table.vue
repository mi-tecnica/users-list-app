<template>
  <div>
    <b-row>
      <b-table striped bordered hover :items="items"></b-table>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      rows: 0,
      perPage: 10
    };
  },
  created: function() {
    this.fetchData(1);
  },
  watch: {
    currentPage: function() {
      this.fetchData(this.currentPage);
    }
  },
  methods: {
    fetchData: function(page) {
      var self = this;
      axios
        .get("/users_list/" + page)
        .then(function(response) {
          // handle success
          console.log(response.data);
          self.items = response.data.users;
          self.rows = response.data.count;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
};
</script>


</script>

<style>
</style>

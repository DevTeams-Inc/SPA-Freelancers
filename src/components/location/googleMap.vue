<template>
  <div class="mt-5">
    <div class="large-12 medium-12 small-12 cell">
      <label>
        File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 0, lng: 0 },
      file: "",
      markers: [
        {
          position: { lat: 10.0, lng: 10.0 }
        },
        {
          position: { lat: 18.456145, lng: -69.706671 }
        }
      ]
    };
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      let formData = new FormData();
      formData.append("file", this.file);
      axios
        .post("http://192.168.1.139:45455/api/freelancers", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(function() {
          console.log("SUCCESS!!");
        })
        .catch(function() {
          console.log("FAILURE!!");
        });
    }
  }
};
</script>
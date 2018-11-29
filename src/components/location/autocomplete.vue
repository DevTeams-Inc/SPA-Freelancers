<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br/>
{{markers}}
    </div>
    <br>
    <div v-loading="loading">
    <gmap-map
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 400px;"

    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      zoom: 12,
      loading: true
    };
  },

  created() {
    this.geolocate();
  },
  updated(){
      this.loading = false;
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        if(this.markers == null){
        this.markers.push({ position: marker });
        }else{
            this.markers.shift()
              this.markers.push({ position: marker });
              this.zoom = 15;

        }
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let p = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          }
        this.markers.push({position:p})
      });
    }
  }
};
</script>
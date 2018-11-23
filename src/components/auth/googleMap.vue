<template>
  <div class="mt-5">
      <el-row>
        <el-col :span="24" :offset="6">
            <gmap-map
                :center="center"
                :zoom="15"
                style="width:50%;  height: 400px;"
            >
            <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position"
            ></gmap-marker>
            </gmap-map>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 18.4855, lng: -69.8731 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
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
      });
    }
  }
};
</script>
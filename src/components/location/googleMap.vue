<template>
  <div class="mt-5">
      <el-row>
        <el-col >
            <Gmap-map
                :center="center"
                :zoom="10"
                style="height: 300px;"
            >
            <Gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                 :clickable="true"
                :draggable="false"
                @click="center=m.position"
                >
                </Gmap-marker>
            </Gmap-map>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 0, lng: 0 },
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
    }
  }
};
</script>
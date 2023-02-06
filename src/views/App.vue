<template>
<navBar />
</template>
<script>
import navBar from "@/components/NavBar.vue"
export default {
  data() {
    return {
        idEmployee:"",
        infoEmployee:{},
    }
  },
  components: {
    navBar
  },
  methods: {
  },
  async mounted(){
      await this.getIdEmployee()
      await this.getInfoEmployee()
    }
}
</script>
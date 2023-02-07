<template>
  <navBar />
  
</template>
<script>
import navBar from "@/components/NavBar.vue"
import axios from "axios"
export default {
  data() {
    return {

    }
  },
  components: {
    navBar
  },
  methods: {
    async getProduct(){
        const req = await axios.post("http://localhost/48h_back/getProducts.php",JSON.stringify({
            "id": "connerie"
        }))
        const res = await req.data
    }
  },
  async mounted(){
    await this.getProduct()
    }
}
</script>

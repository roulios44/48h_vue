<template>
    <NavBar />
    <SellerPanel />
</template>


<script>
import NavBar from "@/components/NavBar.vue"
import SellerPanel from '@/components/SellerPanel.vue';
export default {
  data(){
    return{
      
    }
  },
  components:{
    SellerPanel,
    NavBar,
  }
}
</script>
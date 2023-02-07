<template>
    <navBar />
    <AdminPanel></AdminPanel>
</template>
<script>
    import navBar from "@/components/NavBar.vue"
    import AdminPanel from "@/components/AdminPanel.vue"
    export default {
      data() {
        return {
            
        }
      },
      components: {
        navBar,
        AdminPanel
      },
      methods: {
      },
      async mounted(){
    
        }
    }
    </script>
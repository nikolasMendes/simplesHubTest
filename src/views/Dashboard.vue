<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gray-100 bg-opacity-50"
  >
    <Clients />
  </div>
</template>
<script>
import Clients from "../components/Clients.vue";
export default {
  name: "Dashboard",
  components: {
    Clients,
  },
};
</script>
<style></style>

<template>
  <div class="border shadow-lg w-max px-8 py-8 bg-white rounded-2xl">
    <p class="mb-5 text-2xl font-semibold">Clientes</p>
    <div class="flex gap-8 justify-between">
      <div
        class="border rounded-2xl gap-2 flex flex-col justify-center px-4 py-8 bg-green-50 bg-opacity-50"
      >
        <p class="text-base font-medium mr-16">Clientes cadastrados</p>
        <div class="flex justify-start items-center gap-2">
          <i class="pi pi-warehouse"></i>

          <p class="text-xl font-semibold">{{ clientsTotal }}</p>
          <p
            class="text-green-500 font-bold text-sm mb-1"
            v-if="positiveCliente"
          >
            +1
          </p>
          <p
            class="text-red-500 font-bold text-sm mb-1 ml-1"
            v-if="negativeClient"
          >
            -1
          </p>
        </div>
      </div>
      <div class="border rounded-2xl bg-gray-200 gap-2 flex flex-col px-4 py-6">
        <div
          class="p-2 rounded-xl bg-white w-max flex items-center justify-center"
        >
          <i class="pi pi-user-plus text-gray-500 text-xl mr-0.5"></i>
        </div>
        <div
          class="flex justify-between items-center cursor-pointer"
          v-on:click="addClient()"
        >
          <p class="text-base font-semibold text-gray-500 w-max">
            Adicionar cliente
          </p>

          <i class="pi pi-chevron-right text-gray-400 text-xs ml-20"></i>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <p class="mb-5 text-lg text-gray-600 font-semibold">
        Certificados digitais
      </p>
      <div class="flex gap-8 justify-between">
        <div
          class="border rounded-2xl gap-2 flex flex-col p-4 bg-green-50 bg-opacity-50"
        >
          <div class="flex items-center gap-4">
            <div class="bg-green-500 rounded-full w-2 h-2"></div>
            <p class="mr-20"><b>118</b> integrados</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-yellow-500 rounded-full w-2 h-2"></div>
            <p class=""><b>36</b> vencem em breve</p>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-red-500 rounded-full w-2 h-2"></div>
            <p class=""><b>3</b> vencidos</p>
          </div>
        </div>
        <div
          class="justify-center border rounded-2xl bg-gray-200 gap-2 flex flex-col p-4"
        >
          <div
            class="p-2 rounded-xl bg-white w-max flex items-center justify-center"
          >
            <i class="pi pi-user-minus text-gray-500 text-xl mr-0.5"></i>
          </div>
          <div
            class="flex justify-between items-center cursor-pointer"
            v-on:click="removeClient()"
          >
            <p class="text-base font-semibold text-gray-500 w-max">
              Remover cliente
            </p>

            <i class="pi pi-chevron-right text-gray-400 text-xs ml-20"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../firebaseConfig.js";
import { collection, query, doc, getDocs, updateDoc } from "firebase/firestore";

export default {
  name: "Clients",
  data() {
    return {
      clientsTotal: 0,
      clientId: "",
      negativeClient: undefined,
      positiveCliente: undefined,
    };
  },
  mounted() {
    this.getTotalClients();
  },
  methods: {
    async getTotalClients() {
      let q = query(collection(db, "clients"));
      let docsget = await getDocs(q);
      docsget.forEach((doc) => {
        this.clientsTotal = doc.data().total;
        this.clientId = doc.id;
      });
    },
    removeClient() {
      try {
        const docRef = doc(db, "clients", this.clientId);

        updateDoc(docRef, {
          total: this.clientsTotal - 1,
        }).then((res) => res);
        console.log("Dado atualizado com sucesso!");
        this.getTotalClients();
        this.negativeClient = true;
        this.positiveCliente = false;
      } catch (error) {
        console.error("erro");
      }
    },
    addClient() {
      try {
        const docRef = doc(db, "clients", "w1H1CDEV7kP5d2lY0gCq");

        updateDoc(docRef, {
          total: this.clientsTotal + 1,
        }).then((res) => res);
        console.log("Dado atualizado com sucesso!");
        this.getTotalClients();
        this.negativeClient = false;
        this.positiveCliente = true;
      } catch (error) {
        console.error("erro");
      }
    },
  },
};
</script>
<style></style>

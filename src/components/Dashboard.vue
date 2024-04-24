<template>
  <div class="menu-spacer"></div>
  <div id="container-table">
    <table id="burger-table">
      <Message :msg="msg" v-show="msg" />
        <thead>
          <tr id="burger-heading">
            <th class="order-id">CÓDIGO</th>
            <th>CLIENTE</th>
            <th>PÃO</th>
            <th>CARNE</th>
            <th>OPCIONAIS</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody id="burger-rows">
          <tr class="burger-row" v-for="burger in burgers" :key="burger.id">
            <td class="order-number">{{ burger.id }}</td>
            <td>{{ burger.nome }}</td>
            <td>{{ burger.pao }}</td>
            <td>{{ burger.carne }}</td>
            <td>
              <ul v-for="(opcional, index) in burger.opcionais" :key="index">
                <li class="opcionais">{{ opcional }}</li>
              </ul>
            </td>
            <td class="actions">
              <select name="status" class="status" @change="updateBurger($event, burger.id)">
                <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burger.status == s.tipo">
                  {{ s.tipo }}
                </option>
              </select>
              <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
            </td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
    import Message from './Message.vue';

    export default {
    name: 'Dashboard',
    data() {
      return {
        burgers: null,
        burger_id: null,
        status: [],
        msg: null
      }
    },
    components: {
        Message
    },
    methods: {
      async getPedidos() {
        try {
          const req = await fetch('http://localhost:3000/burgers');

          if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
          }

          const data = await req.json();

          this.burgers = data;

          this.getStatus();
        } catch (error) {
          this.msg = `Falha ao buscar pedidos: ${error.message}`
        }
      },
      async getStatus() {
        try {
          const req = await fetch('http://localhost:3000/status');

          if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
          }
          const data = await req.json();

          this.status = data;
        } catch (error) {
          this.msg = `Falha ao buscar status: ${error.message}`
        }
      },
      async deleteBurger(id) {
        try {
          const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: 'DELETE'
          });

          if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
          }
          const res = await req.json();

          this.msg = `Pedido N° ${res.id} removido com sucesso!`

          this.getPedidos();

        } catch (error) {
          this.msg = `Falha ao remover o pedido: ${error.message}`
        }
      },
      async updateBurger(event, id) {
        try {
          const option = event.target.value;

          const dataJson = JSON.stringify({status: option});

          const req = await fetch(`http://localhost:3000/burgers/${id}`, {
            method: 'PATCH',
            headers: { "Content-Type" : "application/json" },
            body: dataJson
          });

          if (!req.ok) {
            throw new Error(`HTTP error! status: ${req.status}`);
          }

          const res = await req.json();
          
          this.msg = `Status do pedido N° ${res.id} foi atualizado para ${res.status}!`
        } catch (error) {
          this.msg = `Falha ao atualizar o status do pedido: ${error.message}`
        }
      }
    },
    mounted() {
        this.getPedidos();
    }
}
</script>

<style>
    @import '/public/css/dashboard.css';
</style>
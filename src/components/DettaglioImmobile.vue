  <template>
    <div class="container mt-4">
      <h1>{{ immobile.title }}</h1>
      <img :src="'http://127.0.0.1:8000/storage/' + immobile.portrait" alt="Immobile" class="img-fluid mb-3">
      <p>{{ immobile.description }}</p>
      <p>Indirizzo: {{ immobile.address }}, {{ immobile.city }}</p>
      <p>Prezzo: €{{ immobile.price }} al mese</p>
      <p>Camere: {{ immobile.rooms }}</p>
      <p>Bagni: {{ immobile.bathrooms }}</p>
      <p>Letti: {{ immobile.beds }}</p>
      <p>Metri quadrati: {{ immobile.square_meter }} mq</p>
  
      <div class="mt-4">
        <h2>Contatta l'affittuario</h2>
        <form @submit.prevent="sendMessage">
          <div class="form-group">
            <label for="message">Messaggio:</label>
            <textarea id="message" v-model="message" class="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Invia Messaggio</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        immobile: {},
        message: ''
      };
    },
    created() {
      const id = this.$route.params.id;
      // Simulazione del recupero dei dettagli dell'immobile
      // Sostituisci questo con una chiamata API per ottenere i dettagli reali
      const immobili = [
        {
          id: 1,
          title: "Appartamento in centro",
          description: "Luminoso appartamento nel centro della città, vicino a tutti i servizi.",
          address: "Via Roma 1",
          city: "Milano",
          price: 1200,
          rooms: 3,
          bathrooms: 2,
          beds: 4,
          square_meter: 100
        },
        // Aggiungi altri immobili come esempi
      ];
      this.immobile = immobili.find(imm => imm.id == id);
    },
    methods: {
      sendMessage() {
        // Aggiungi qui la logica per inviare il messaggio
        alert(`Messaggio inviato: ${this.message}`);
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .img-fluid {
    width: 100%;
    height: auto;
  }
  </style>
  
  
  <style scoped>
  form {
    margin-top: 20px;
  }
  form div {
    margin-bottom: 10px;
  }
  form label {
    display: block;
    margin-bottom: 5px;
  }
  form input, form textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  form button:hover {
    background-color: #0056b3;
  }
  </style>

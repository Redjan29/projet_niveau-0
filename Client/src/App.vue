<script setup>
// Les imports non nécessaires sont supprimés pour le moment
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div id="app">
    <header class="app-header">
      <h1>Bienvenue dans l'application</h1>
    </header>

    <main>
      <!-- Affiche le contenu de la route actuelle -->
      <router-view />
    </main>
  </div>
</template>

<style scoped>
/* Style vert */
body {
  font-family: Arial, sans-serif;
  background-color: #e6ffe6; /* Vert clair pour le fond */
  color: #006600; /* Texte vert foncé */
}

h1, h2, h3 {
  color: #009900; /* Titres en vert */
}

button {
  background-color: #33cc33; /* Fond des boutons en vert */
  color: white; /* Texte blanc */
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #28a745; /* Un vert plus foncé au survol */
}

input, textarea {
  border: 2px solid #33cc33; /* Bordure verte */
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 10px 0;
}

header {
  text-align: center;
  padding: 20px;
  background-color: #99ff99; /* Vert plus doux pour le fond de l'en-tête */
}

main {
  padding: 20px;
  background-color: #f2fff2; /* Fond léger pour le contenu principal */
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #99ff99; /* Fond du pied de page en vert doux */
}

.wrapper {
  padding: 20px;
  background-color: #e6ffe6; /* Conserver le fond vert clair pour les sections */
}

a {
  color: #33cc33; /* Liens en vert */
}

a:hover {
  color: #009900; /* Liens en vert plus foncé au survol */
}
</style>

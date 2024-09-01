<template>
  <div class="c-levelOne-container">
    <p class="description">Hi.. I'm..</p>
    <h1 class="description name">Gayashan Gamage</h1>
    <h3 class="description position">SOFTWARE ENGINEER</h3>
    <p class="description short-description">
      I love build logical stuff using code lines and my fingers to get easier
      business task and daily life
    </p>
    <div class="c-levelTwo-container buttons">
      <button class="action-button" @click="downloadcv">
        <span class="button-name">Download CV</span>
        <span class="button-icon material-icons">download</span>
      </button>
      <button class="action-button" @click="openLinkedIn">
        <span class="button-name">LinkedIn</span>
        <span class="button-icon material-icons">group_add</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const downloadcv = () => {
  window.open(
    "https://drive.google.com/uc?export=download&id=1N1wJE5aPCbiF_sIZzeFY8s3whJrUyI2W"
  );
};
const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/gayashangamage/");
};
</script>

<style scoped>
.c-levelOne-container {
  /* border: 1px solid black; */
  margin: 20vh 3vw;
}
.description {
  color: var(--font-color);
  font-size: 2rem;
}
.name {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 0.6em;
}
.position {
  margin-bottom: 0.6em;
}
.short-description {
  margin-bottom: 1em;
}
.buttons {
  display: flex;
}
.action-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: none;
  outline: none;
  margin-right: 20px;
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  background-color: var(--button-background-color);
  color: aliceblue;
}
.button-name {
  padding: 13px 40px;
}
.button-icon {
  padding: 13px;
  color: aliceblue;
  background-color: var(--button-background-color);
}
.action-button:hover {
  background-color: #4644cb;
}
</style>

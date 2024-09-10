<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <h3 class="container-title">PROJECTS</h3>
      <div class="project-container">
        <div class="project">
          <div class="project-image"></div>
          <h3 class="project-title">Sigiri Price</h3>
          <p class="project-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            possimus temporibus id illum! Dolore est vero fuga maxime provident
            hic ipsam beatae, culpa nostrum, officia
          </p>
          <div class="button-container">
            <button class="more-button">More</button>
          </div>
        </div>
        <div class="project">
          <div class="project-image"></div>
          <h3 class="project-title">DFernando.lk</h3>
          <p class="project-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            possimus temporibus id illum! Dolore est vero fuga maxime provident
            hic ipsam beatae, culpa nostrum, officia
          </p>
          <div class="button-container">
            <button class="more-button">More</button>
          </div>
        </div>
        <div class="project">
          <div class="project-image"></div>
          <h3 class="project-title">CurryHut.lk</h3>
          <p class="project-discription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            possimus temporibus id illum! Dolore est vero fuga maxime provident
            hic ipsam beatae, culpa nostrum, officia
          </p>
          <div class="button-container">
            <button class="more-button">More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.level-one-container {
  height: 1040px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-two-container {
  width: 600px;
  height: 100%;
}
.container-title {
  margin: 80px 0px;
  text-align: center;
  color: #0b2f9f;
  font-family: Inter;
  font-size: 24px;
  font-weight: 900;
  text-decoration-line: underline;
  text-transform: uppercase;
}
.project {
  height: 224px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    "img title"
    "img description"
    "img button";
}
.project-image {
  grid-area: img;
  background-color: #0b2f9f;
  margin: 10px;
  border-radius: 4px;
}
.project-title {
  margin: 25px 0px 8px 20px;
  color: #0b2f9f;
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
}
.project-discription {
  margin: 0px 15px 0px 20px;
  color: #0b2f9f;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
}
.button-container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 19px 16px 0;
}
.more-button {
  padding: 0px 30px;
  margin-right: 15px;
  background-color: #0b2f9f;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 4px;
  border: 2px solid #0b2f9f;
}
.more-button:hover {
  color: #0b2f9f;
  border: 2px solid #0b2f9f;
  background-color: #f5f5f5;
}
</style>

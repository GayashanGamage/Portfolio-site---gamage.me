<template>
  <div class="level-one-container">
    <div class="level-two-container">
      <div class="level-three-container title">
        <h3 class="title">Tec stack</h3>
      </div>
      <div class="level-three-container back-end">
        <h4 class="sub-title">Back end</h4>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>Python</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>FastAPI</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>Django</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>B.soup</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>MongoDB</p>
        </div>
      </div>
      <div class="level-three-container front-end">
        <h4 class="sub-title">Front end</h4>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>JavaScript</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>VueJS</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>HTML</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>CSS</p>
        </div>
      </div>
      <div class="level-three-container other">
        <h4 class="sub-title">Other</h4>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>GIT</p>
        </div>
        <div class="level-four-container">
          <span class="icon"></span>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.level-one-container {
  height: 586px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.level-two-container {
  display: grid;
  width: 600px;
  height: 426px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 10fr;
  grid-template-areas: "title title title" "backend frontend other";
  margin: 80px 0px;
}
.level-four-container {
  background-color: #0b2f9f;
  color: #ffffff;
  height: 37px;
  margin-bottom: 19px;
  width: 185px;
  border-radius: 4px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
}
.title {
  grid-area: title;
  text-align: center;
  color: #0b2f9f;
  font-family: Inter;
  font-size: 24px;
  font-weight: 900;
  text-decoration-line: underline;
  text-transform: uppercase;
}
.backend {
  grid-area: back-end;
}
.frontend {
  grid-area: front-end;
}
.other {
  grid-area: other;
}
.sub-title {
  margin-bottom: 20px;
  color: #d8d8d8;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.icon {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: 2px 10px 2px 4px;
}
</style>

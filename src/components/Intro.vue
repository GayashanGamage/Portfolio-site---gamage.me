<template>
  <div class="level-one-container" id="introduction">
    <div class="level-two-container">
      <h1 class="title">GAYASHAN GAMAGE</h1>
      <p class="description">
        I love buil logical stuff using code line and my fingers to get easier
        business task and daily life
      </p>
      <div class="profil-links">
        <div class="profile-link-item">
          <div class="image"></div>
          <br />
          <a href="" class="link">GitHub</a>
        </div>
        <div class="profile-link-item">
          <div class="image"></div>
          <br />
          <a href="" class="link">Leetcode</a>
        </div>
        <div class="profile-link-item">
          <div class="image"></div>
          <br />
          <a href="" class="link">Medium</a>
        </div>
        <div class="profile-link-item">
          <div class="image"></div>
          <br />
          <a href="" class="link">LinkedIn</a>
        </div>
        <div class="profile-link-item">
          <div class="image"></div>
          <br />
          <a href="" class="link">Resume</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setupe></script>

<style scoped>
.level-one-container {
  height: 639px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.level-two-container {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  color: #0b2f9f;
  font-size: 52px;
  font-weight: 900;
}
.description {
  margin-top: 27px;
  color: #0b2f9f;
  text-align: center;
  font-family: Inter;
  font-size: 23px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
}
.profil-links {
  margin-top: 113px;
  display: flex;
  width: 600px;
  justify-content: space-between;
}
.profile-link-item {
  width: auto;
  height: auto;
}
.image {
  width: 85px;
  height: 85px;
  background-color: black;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.link {
  margin-top: 50px;
  margin-left: 12px;
  text-decoration: none;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.profile-link-item:hover {
  text-decoration: underline;
}
</style>

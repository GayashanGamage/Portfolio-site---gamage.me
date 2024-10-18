<template>
  <div class="level-one-container" id="project">
    <div class="level-two-container">
      <h3 class="container-title">PROJECTS</h3>
      <div class="project-container">
        <div class="project" v-for="item in projectData" :key="item.id">
          <div class="project-image">
            <img
              :src="item.image"
              alt="site-image"
              class="project-image-file"
            />
          </div>
          <h3 class="project-title">{{ item.name }}</h3>
          <p class="project-discription">{{ item.discription }}</p>
          <div class="button-container">
            <button class="more-button" @click="openWindow(item.id)">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- bluered popup window -->
    <div class="popup-box" v-if="popup">
      <!-- popup window -->
      <div class="popup-window">
        <!-- popup header -->
        <div class="popup-header">
          <h3 class="popup-title">{{ selected.name }}</h3>
          <button id="close-button" @click="close">Close</button>
        </div>
        <div class="popup-content">
          <!-- <div class="intro-video sub-part">
            <h3 class="sub-hedding">What this is ?</h3>
            <iframe
              :src="selected.video"
              class="video-fram"
              frameborder="0"
              width="560px"
              height="300px"
            ></iframe>
          </div> -->
          <div class="features sub-part">
            <h3 class="sub-hedding">Features</h3>
            <ol>
              <li
                v-for="item in selected.feature"
                :key="item"
                class="list-item"
              >
                {{ item }}
              </li>
            </ol>
          </div>
          <div class="technology sub-part">
            <h3 class="sub-hedding">Tec stack</h3>
            <ul>
              <li
                v-for="item in selected.technology"
                :key="item"
                class="list-item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="links sub-part">
            <h3 class="sub-hedding">Project links</h3>
            <!-- link buttons -->
            <a
              target="_blank"
              v-for="item in selected.link"
              :key="item"
              :href="item.link"
            >
              <button class="link-button">
                {{ item.btn_name }}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const popup = ref(false);
const selected = ref(null);
const projectData = [
  {
    id: 0,
    name: "sigiriprice.me",
    discription:
      "price fluctuation is regular thing in sri lanka now a days. this webapp allow you to track price on 'sinhagiri.lk' store. if your tracked product price change you will get an e-mail notification",
    image:
      "https://drive.google.com/thumbnail?id=1EGfg0HiR9cn5-NO-2EtJxwL4oeeFQ9m_",
    // video: "https://www.youtube.com/embed/aViuBgbokmI?autoplay=1&controls=0",
    feature: [
      "authonticate as a user",
      "book a date and timeslot",
      "popspond selected time slot",
      "cancel a booking and ask for refund",
    ],
    technology: ["FastAPI", "mongoDB", "VueJS", "HTML", "CSS"],
    link: [
      {
        btn_name: "Live project",
        link: "https://sigiriprice.gamage.me/",
      },
      {
        btn_name: "API Documentation",
        link: "https://api-sigiriprice.gamage.me/docs#/",
      },
      {
        btn_name: "API - GitHub",
        link: "https://github.com/GayashanGamage/sinha.price-backend",
      },
      {
        btn_name: "Frontend - GitHub",
        link: "https://github.com/GayashanGamage/sigiri-price",
      },
    ],
  },
  // {
  //   id: 1,
  //   name: "dfernando.lk",
  //   discription: "online mentoring session booking platform",
  //   image:
  //     "https://drive.google.com/thumbnail?id=1nATXQn6EVbXzK8PAFLOFPL1x4rATg92P",
  //   video: "https://www.youtube.com/embed/aViuBgbokmI?autoplay=1&controls=0",
  //   feature: [
  //     "authonticate as a user",
  //     "book a date and timeslot",
  //     "postpone selected time slot",
  //     "cancel a booking and ask for refund",
  //     "admin site for manage users and session time",
  //     "payment gateway",
  //     "video conferencing using zoom API",
  //   ],
  //   technology: [
  //     "FastAPI",
  //     "mongoDB",
  //     "VueJS",
  //     "HTML",
  //     "CSS",
  //     "ZOOM API for video conferencing",
  //   ],
  //   link: [
  //     {
  //       btn_name: "Live project",
  //       link: "https://dineshfernando.netlify.app",
  //     },
  //     {
  //       btn_name: "API Documentation",
  //       link: "https://api.gamage.me/docs",
  //     },
  //     {
  //       btn_name: "API - GitHub",
  //       link: "https://github.com/GayashanGamage/coaching-backend",
  //     },
  //     {
  //       btn_name: "Frontend - GitHub",
  //       link: "https://github.com/GayashanGamage/Dr.Dinesh-frontend",
  //     },
  //     {
  //       btn_name: "Admin pannel - GitHub",
  //       link: "https://df-backoffice.netlify.app",
  //     },
  //   ],
  // },
  {
    id: 1,
    name: "curryhut.lk - ongoin real project",
    discription:
      "online food odering webapp for curryhut restaurent in Narahenpita",
    image:
      "https://drive.google.com/thumbnail?id=1vxuA_ncfWS3e9FQUI6xEbdvM2Rp4WvI-",
    // video: "https://www.youtube.com/embed/aViuBgbokmI?autoplay=1&controls=0",
    feature: [
      "authonticate users",
      "role base access - admin & customers",
      "fully managable category - product and menu of the day",
      "integrate with mobile message for ordering process and delivery",
      "mobile optimization",
      "online payment integration with payheree",
    ],
    technology: [
      "FastAPI",
      "mongoDB",
      "VueJS",
      "HTML",
      "CSS",
      "notify.lk - message API",
      "transactional email API : brevo",
      "payhere.lk - payment gatway",
      "digitalocean.com - space - object storage",
    ],
    link: [
      {
        btn_name: "API Documentation",
        link: "http://api-curryhut.gamage.me/docs",
      },
      {
        btn_name: "API - GitHub",
        link: "https://github.com/GayashanGamage/curryhut-API",
      },
      {
        btn_name: "admin - GitHub",
        link: "https://github.com/GayashanGamage/curryhut-admin",
      },
      { btn_name: "Admin pannel", link: "https://admin-curryhut.gamage.me" },
      {
        btn_name: "Figma file",
        link: "https://www.figma.com/design/oHJfgEMeF7Jjp12QrgE2NE/CurryHut.lk?node-id=173-823&m=dev",
      },
    ],
  },
];

const close = () => {
  popup.value = false;
  selected.value = null;
  document.body.style.overflow = "";
};

const openWindow = (item) => {
  popup.value = true;
  selected.value = projectData[item];
  document.body.style.overflow = "hidden";
};
watch(popup, (current, past) => {
  if (current === true) {
    document.getElementById("project").style.overflow = "hidden";
  } else {
    console.log("popup is close");
  }
});
</script>

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
.popup-box {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-window {
  width: 600px;
  background-color: #f5f5f5;
  border-radius: 6px;
}
.popup-content {
  max-height: 400px;
  overflow: scroll;
}
#close-button {
  margin: 0px 20px;
  color: #fff;
  padding: 6px 10px;
  background-color: #0b2f9f;
  border-radius: 6px;
  border: 1px solid #fff;
}
#close-button:hover {
  background-color: #f5f5f5;
  color: #0b2f9f;
  border: 1px solid #0b2f9f;
}
.video-fram {
  border-radius: 6px;
}
.sub-part {
  margin: 20px;
}
.project-image-file {
  width: 100%;
  height: 100%;
}
.popup-header {
  border: 1px solid black;
  height: 60px;
  position: sticky;
  top: 0;
  background-color: #0b2f9f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px 6px 0px 0px;
}
.popup-title {
  color: #f5f5f5;
  margin-left: 24px;
  text-transform: uppercase;
  font-weight: 900;
}
.sub-hedding {
  color: #0b2f9f;
  font-family: Inter;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 15px;
  text-decoration: underline;
  text-transform: uppercase;
}
.list-item {
  color: #0b2f9f;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
.link-button {
  margin: 5px;
  padding: 5px 10px;
  background-color: #0b2f9f;
  color: #f5f5f5;
  border: 1px solid #0b2f9f;
  border-radius: 4px;
}
.link-button:hover {
  background-color: #fff;
  color: #0b2f9f;
  border: 1px solid #0b2f9f;
  border-radius: 4px;
}
</style>

<template>
  <div class="profile-content" style="text-align: center">
    <div class="container">
      <div class="row">
        <div class="col-md-12 ml-auto mr-auto">
          <div class="profile">
            <div class="avatar">
              <img
                src="/user_profile_picture.png"
                width="300"
                height="300"
                alt="Circle Image"
                class="img-raised rounded-circle img-fluid"
              />
            </div>
            <br />
            <div class="name">
              <h3 class="title" style="color: black">
                {{ `${userData.firstname} ${userData.surname}` }}
              </h3>
              <i v-if="isLoadingData" class="fas fa-spinner fa-pulse"></i>
              <h3 style="font-weight: 300; color: black" v-if="!isLoadingData">
                {{ currentStatus }}
              </h3>
            </div>
            <br />

            <div
              style="
                overflow: hidden;
                display: flex;
                justify-content: space-around;
              "
              v-if="!isLoadingData"
            >
              <div v-for="(o, index) in unlocked_badges" v-bind:key="index">
                <div>
                  <figure>
                    <img v-bind:src="'/badges/' + o.img + '.png'" />
                    <figcaption>{{ o.description }}</figcaption>
                  </figure>
                </div>
              </div>
              <div v-for="(o, index) in locked_badges" v-bind:key="index">
                <div>
                  <figure>
                    <img v-bind:src="'/badges/' + o.img + '.png'" />
                    <figcaption>{{ o.description }}</figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />

  <div class="header" style="text-align: center" v-if="!isLoadingData">
    <h6 class="m-0 font-weight-bold text-primary">
      <span v-if="!chaptersCompleted">{{
        `Complete ${nextChallenge.chapter} to become ${
          nextChallenge.status == "Amateur" ? "an" : "a"
        } ${nextChallenge.status} !`
      }}</span>
      <span v-else>Thank you for using my platform! 😊</span>
    </h6>
  </div>
  <ProgressBarVue
    v-if="!isLoadingData"
    :checkpoints="formattedChaptersData"
  ></ProgressBarVue>
</template>
<script>
import ProgressBarVue from "../../components/dashboard/stats/ProgressBar.vue";
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      userData: {},
      formattedChaptersData: [],
      currentStatus: "Newcomer",
      statusBageMapper: {
        Newcomer: "newcomer",
        Pro: "pro",
        Learner: "learner",
        Novice: "novice",
        Amateur: "amateur",
        Enthusiast: "enthusiast",
      },
      statusChapterMapper: {
        Learner: 0,
        Novice: 1,
        Amateur: 2,
        Enthusiast: 3,
        Pro: 4,
      },
      locked_badges: [],
      unlocked_badges: [],
      unlocked_statuses: [],
      nextChallenge: {
        status: "",
        chapter: "",
      },
      statusesAvailable: [
        "Newcomer",
        "Learner",
        "Novice",
        "Amateur",
        "Enthusiast",
        "Pro",
      ],
      rawChapterData: [],
      isLoadingData: false,
      chaptersCompleted:false,
    };
  },
  mounted() {
    this.userData = this.$store.getters["authStore/getUserDetails"];
    this.loadDashboardData();
  },
  components: {
    ProgressBarVue,
  },
  setup() {},
  methods: {
    ...mapActions({
      getDashboardData: "dashboardStore/getDashboardData",
    }),
    async loadDashboardData() {
      this.isLoadingData = true;
      const dashBoardData = await this.getDashboardData();
      this.rawChapterData = dashBoardData;
      this.formatDashBoardData();
      this.isLoadingData = false;
    },
    formatDashBoardData() {
      const chapter1Done = this.rawChapterData[0].perc_done == 100;
      const chapter2Done = this.rawChapterData[1].perc_done == 100;
      const chapter3Done = this.rawChapterData[2].perc_done == 100;
      const chapter4Done = this.rawChapterData[3].perc_done == 100;

      this.chaptersCompleted = chapter1Done && chapter2Done && chapter3Done && chapter4Done;

      this.unlocked_statuses.push("Newcomer");

      if (chapter1Done) {
        this.currentStatus = "Learner";
        this.unlocked_statuses.push("Learner");
      }
      if (chapter2Done) {
        this.currentStatus = "Novice";
        this.unlocked_statuses.push("Novice");
      }
      if (chapter3Done) {
        this.currentStatus = "Amateur";
        this.unlocked_statuses.push("Amateur");
      }
      if (chapter4Done) {
        this.currentStatus = "Enthusiast";
        this.unlocked_statuses.push("Enthusiast");
      }

      if(this.chaptersCompleted) {
        this.currentStatus = "Pro";
        this.unlocked_statuses.push("Pro");
      }

      for (const unlockedId in this.unlocked_statuses) {
        const unlocked_status = this.unlocked_statuses[unlockedId];
        this.unlocked_badges.push({
          img: `badge_${this.statusBageMapper[unlocked_status]}_unlocked`,
          description: `${this.statusBageMapper[unlocked_status]} badge`,
        });
      }

      for (const statusId in this.statusesAvailable) {
        const status = this.statusesAvailable[statusId];
        if (!this.unlocked_statuses.includes(status)) {
          this.locked_badges.push({
            img: `badge_${this.statusBageMapper[status]}_locked`,
            description: `${this.statusBageMapper[status]} badge`,
          });
          if (
            this.nextChallenge.status == "" &&
            this.nextChallenge.chapter == ""
          ) {
            this.nextChallenge.status = status;

            if (status == "Pro") {
              this.nextChallenge.chapter = " all chapters ";
            } else {
              this.nextChallenge.chapter =
                this.rawChapterData[
                  this.statusChapterMapper[status]
                ].chapter_name;
            }
          }
        }
      }
      this.formattedChaptersData.push({
        title: "Learner",
        /*
        description: `${
          chapter1Done ? "" : "Complete chapter 1 to become a Learner!"
        }`,
        */
        description: "",
        completed: chapter1Done,
      });

      this.formattedChaptersData.push({
        title: "Novice",
        /*
        description: `${
          chapter2Done ? "" : "Complete chapter 2 to become a Novice!"
        }`,
        */
        description: "",

        completed: chapter2Done,
      });

      this.formattedChaptersData.push({
        title: "Amateur",
        /*
        description: `${
          chapter3Done ? "" : "Complete chapter 3 to become a Amateur!"
        }`,
        */
        description: "",

        completed: chapter3Done,
      });

      this.formattedChaptersData.push({
        title: "Enthusiast",
        /*
        description: `${
          chapter4Done ? "" : "Complete chapter 4 to become a Enthusiast!"
        }`,
        */
        description: "",

        completed: chapter4Done,
      });

      this.formattedChaptersData.push({
        title: "Pro",
        /*
        description: `${
          chapter1Done && chapter2Done && chapter3Done && chapter4Done
            ? ""
            : "Complete all chapters to become a Pro!"
        }`,
        */
        description: "",

        completed: this.chaptersCompleted,
      });
    },
  },
};
</script>

<style scoped>
.img-raised {
  box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
    0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.inline-block {
  display: inline-block;
}
</style>>


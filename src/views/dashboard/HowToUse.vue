<template>
  <div class="container-fluid">
    <h1 class="h3 mb-4 text-gray-800">
      About RenderLingo <span style="font-size: 23px">🐳</span>
    </h1>
    <div class="row">
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              What is RenderLingo?
            </h6>
          </div>
          <div class="card-body" style="color: black">
            <b class="text-primary">RenderLingo</b> (in short
            <b class="text-primary">RELI</b>) is a protoype online learning
            platform that aims to help people with different backgrounds to
            develop an algorithmic thinking mind using the action of
            translating/rendering a word problem (story).
            <b class="text-primary">RELI</b> currently supports the
            <b>JavaScript</b> programming language.
            <b class="text-primary">RELI</b> is also my thesis project.
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Who am I?</h6>
          </div>
          <div class="card-body" style="color: black">
            My name is Andrei Popa and I am a third year computer science
            student that aims to graduate BSc Computer Science💻 at University
            Of Southampton. <br />
            For feedback/further details about this project you can contact me
            at
            <a href="mailto:andrei.popabd@gmail.com">andrei.popabd@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              How to use RenderLingo?
            </h6>
          </div>
          <div class="card-body" style="color: black">
            ✍️ There are 4 chapters and each chapter has 5 challenges. <br />
            Whenever you complete a challenge you will get 3 variables:
            <b class="text-primary">P1</b>, <b class="text-primary">P2</b>, and
            <b class="text-primary"> C</b>. <br />A challenge is considered
            complete when <b class="text-primary"> C</b> is at least 80%.
            <br /><br />
            To access a challenge you can either navigate to:
            <ul>
              <li>
                <b class="text-primary">Solve a new challenge tab</b>: Which
                will get the first uncompleted challenge
              </li>
              <li>
                <b class="text-primary">Challenges Roadmap tab</b> : If you
                click a specific challenge you will get the details of that
                challenge.
              </li>
            </ul>
            ✅ Whenever you complete a chapter you will
            <b class="text-primary">level up</b> and earn a new
            <b class="text-primary">title</b> and
            <b class="text-primary">badge</b>. <br />
            You can always check your
            <b class="text-primary">profile badges</b> and
            <b class="text-primary">current title</b> if you go to the
            <b class="text-primary">Profile page</b>(top right corner).
            <br /><br />
            ℹ️ In the <b class="text-primary">Dashboard tab</b> there are 3
            graphs:
            <ul>
              <li>
                a <b class="text-primary">progress bar</b> that tracks your
                completed chapters
              </li>
              <li>
                a <b class="text-primary">line chart</b> that tracks your P1, P2
                and C values
              </li>
              <li>
                a <b class="text-primary">doughnut chart</b> that tracks your
                completed, untried and failed challenges
              </li>
            </ul>
            🆘 If you are stuck on a challenge you can always
            <b class="text-primary">see the solution</b> of that
            challenge(situated at the
            <b class="text-primary">bottom of the challenge description</b>).
            ⚠️However, if you do this, your progress on that challenge will not
            be tracked in the line chart from the dashboard.
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">
              What are P1, P2 and C?
            </h6>
          </div>
          <div class="card-body" style="color: black">
            ⚙️ Once you submit a challenge solution,
            <b class="text-primary">RELI</b> will evaluate your solution and
            give you 3 values, <b class="text-primary">P1</b>,
            <b class="text-primary">P2</b>,<b class="text-primary"> C</b>
            alongside with the tests failed and passed. <br />
            In short, <b class="text-primary">P1</b> is a % of how
            <b class="text-primary"> similar is your solution to mine</b> for
            that challenge, <b class="text-primary">P2</b> is a % of how
            <b class="text-primary"> many tests your solution passed</b> and
            <b class="text-primary">C</b> is a value calculated as
            <b class="text-primary">C = 20%P1 + 80%P2</b>. <br /><br />
            If you are interested, <b class="text-primary">P1</b> is determined
            by <b class="text-primary">comparing the ASTs</b>(short for Abstract
            Syntax Trees) generated by
            <b class="text-primary">your solution</b> and
            <b class="text-primary">my solution</b> using the following distance
            algorithms <b class="text-primary">The Levenshtein distance</b>,
            <b class="text-primary">Longest Common Subsequence(LCS)</b>,
            <b class="text-primary">Metric Longest Common Subsequence(MLCS)</b>
            and <b class="text-primary">Cosine similarity</b> .
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blue {
  color: blue;
}
</style>
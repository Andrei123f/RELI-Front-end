<div id="top"></div>


[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Andrei123f/RELI-Front-end">
    <img src="https://github.com/Andrei123f/RELI-Front-end/blob/main/public/reli-logo.jpg" alt="Logo" width=400 height=300>
  </a>

  <h3 align="center">RenderLingo - Front End</h3>

  <p align="center">
    E-learning platform that evaluates the solution using ASTs(Abstract Syntax Trees) comparisons and unit testing.
    <br />
    <a href="https://reli-front-end.vercel.app/">View Demo</a> <br />
    <a href="https://github.com/Andrei123f/RELI-Front-end/issues">Report Bug</a><br />
    <a href="https://github.com/Andrei123f/RELI-Front-end/issues">Request Feature</a> <br />
    **For the demo you can use these creds user: test1234, pass: 12345678 or make a new fresh account.**
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#how-does-it-work">How Does RenderLingo work</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
RenderLingo (in short RELI) is a protoype online learning platform build with the Vue ecosystem that aims to help people with different backgrounds to develop an algorithmic thinking mind using the action of translating/rendering a word problem (story). RELI currently supports the JavaScript programming language. RELI is also my thesis project.

Why should you use RELI?<br />
Here's why:
* If you are a beginning programmer that wants to learn or just want to strenghten your knowledge, doing this should be fun and interactive.
* RELI does not follow the traditional programming teaching methods.
* RELI's avatar name is RI and she's the coolest beluga :smile:
<p align="right">(<a href="#top">back to top</a>)</p>


### How Does RenderLingo work

<div id="how-does-it-work"></div>
⚙️ Once you submit a challenge solution, RELI's API will evaluate your solution and give you 3 values, P1, P2, C alongside with the tests failed and passed.
In short, P1 is a % of how similar is your solution to mine for that challenge, P2 is a % of how many tests your solution passed and C is a value calculated as C = 20%P1 + 80%P2. 
<br />
<br />
P1 is determined by comparing the ASTs(short for Abstract Syntax Trees) generated by your solution and my solution using the following distance algorithms The Levenshtein distance, Longest Common Subsequence(LCS), Metric Longest Common Subsequence(MLCS) and Cosine similarity.


### Built With
The major frameworks that I used: <br />
* <a href="https://vuejs.org/"><img src="https://img.icons8.com/color/344/vue-js.png" alt="Vue logo" width=20 height=20>Vue.js</a> 
* <a href="https://vuejs.org/"><img src="https://img.icons8.com/color/344/vue-js.png" alt="Vuex logo" width=20 height=20>Vuex</a> 
* <a href="https://vuejs.org/"><img src="https://img.icons8.com/color/344/vue-js.png" alt="Vue-router logo" width=20 height=20>Vue-router</a> 
* <a href="https://vuejs.org/"><img src="https://img.icons8.com/color/344/vue-js.png" alt="Vue-router logo" width=20 height=20>Vite</a> 
* <a href="https://vuejs.org/"><img src="https://img.icons8.com/color/344/bootstrap.png" alt="Bootstrap logo" width=20 height=20>Bootstrap</a> 

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- GETTING STARTED -->
## Getting Started
You will need npm and nodejs. You can get them from <a href="https://nodejs.org/en/download/">here</a>.

### Prerequisites

After installing npm and node you may run
  ```sh
  npm install npm@latest -g
  ```
to get the latest version of npm

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Andrei123f/RELI-Front-end.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a .env file and place the following value there
   ```js
   VITE_API_URL=https://reli-back-end.vercel.app/
   ```
   
   
4. Run the following command to start the project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage
Anyone who wants to learn the basics of JavaScript, including Variables, Functions, Arrays and Objects, Classes, Object-oriented programming(OOP) can learn the fundamentals of these concepts in a unique and interesting way by translating a story to code.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andrei Popa - [@andreispkpd](https://twitter.com/andreispkpd) - andrei.popabd@gmail.com

Project Link: [https://github.com/Andrei123f/RELI-Front-end](https://github.com/Andrei123f/RELI-Front-end)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Andrei123f/RELI-Front-end.svg?style=for-the-badge
[contributors-url]: https://github.com/Andrei123f/RELI-Front-end/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Andrei123f/RELI-Front-end.svg?style=for-the-badge
[forks-url]: https://github.com/Andrei123f/RELI-Front-end/network/members
[stars-shield]: https://img.shields.io/github/stars/Andrei123f/RELI-Front-end.svg?style=for-the-badge
[stars-url]: https://github.com/Andrei123f/RELI-Front-end/stargazers
[issues-shield]: https://img.shields.io/github/issues/Andrei123f/RELI-Front-end.svg?style=for-the-badge
[issues-url]: https://github.com/Andrei123f/RELI-Front-end/issues
[license-shield]: https://img.shields.io/github/license/Andrei123f/RELI-Front-end.svg?style=for-the-badge
[license-url]: https://github.com/Andrei123f/RELI-Front-end/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andrei-popa-563916192
[product-screenshot]: https://github.com/Andrei123f/RELI-Front-end/blob/main/public/cosmin_try.png

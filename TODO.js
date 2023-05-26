/**
 * TODO
 * * leaderboard xx
 * * spotlight xx
 * * metaverse xx
 * * AI for generating caption for video xx
 * * videos created by a user xx
 * * likes gotten by a user  xx
 * * validation and aleart and loaders etc xx
 * * account settings - social xx
 * * work on the verify badge
 * * upload form - video upload
 * * search page xx
 * * work on the follow button on all the pages xx
 * * anywhere there is a social media replace with what is comming from the database xx
 * * check for mobile view xx
 * * handle authentication very well xx
 * * dashboard for user video -- edit and delete xx
 * * vidiisAI page xx
 * * work on footer and links xx
 * * a very rich documentation (white paper) add link to footer xx

 *
 *
 *
 * demo video
 * work on go live
 * community chat using moralis and personal chat
 * fake notification
 * NFT coming soon
 *
 *
 *
 */

// how creators make money - the app reward creators when the surpase 1000 views

// SCRIPT FOR VIDISPARK
/*

Intro
---
In a world where video streaming has become ubiquitous,
a new challenge arises. The traditional models are plagued with limitations, 
stifling creativity and hindering the potential for groundbreaking experiences.
But fear not, for Vidispark is here to bridge the gap between imagination and reality.

problem statement
---
[Background music playing]

Voice Over: In today's digital landscape, content creators face a pressing challenge: censorship. Traditional video streaming platforms often impose restrictions, stifling the freedom of expression and limiting the ability of creators to share their authentic voices with the world. Additionally, creators struggle to monetize their content effectively, inhibiting their ability to sustain their craft and thrive.

[Visually engaging scenes depicting limitations and frustrations faced by creators]

Voice Over: At Vidispark, we believe in empowering content creators by providing them with a platform that transcends censorship barriers. We envision a world where creators have the freedom to express themselves fully, without fear of suppression or silencing.

[Imagery illustrating creators overcoming censorship barriers]

Voice Over: Our mission is to democratize the streaming industry, breaking down the walls that inhibit artistic expression. We strive to create an inclusive environment where creators can share their unique perspectives, challenge societal norms, and spark meaningful conversations.

[Captivating animations showcasing creators breaking free from censorship]

Voice Over: But that's not all. We also recognize the pressing need for creators to monetize their content effectively. Traditional models often leave creators struggling to earn a sustainable income from their passion and hard work. Vidispark aims to change that.

[Imagery illustrating creators benefiting from monetization opportunities]

Voice Over: By leveraging innovative monetization models, Vidispark empowers creators to unlock their full potential. We provide a platform where creators can monetize their content directly, connect with their audience on a deeper level, and build sustainable careers doing what they love.

[Visual transitions showcasing creators monetizing their content]

Voice Over: At Vidispark, we believe that creativity should be celebrated and rewarded. We strive to create an ecosystem that enables creators to flourish and thrive, breaking free from the limitations imposed by traditional platforms.

why the need for vidispark
---

But Vidispark is not just for creators; it's for viewers who crave fresh and engaging content. It's for those who are tired of being served cookie-cutter videos and long for a platform that celebrates originality, diversity, and innovation.

[Imagery illustrating viewers seeking unique and engaging content]

Voice Over: We need Vidispark because we believe in empowering both creators and viewers. By offering a decentralized and community-driven platform, we give the power back to the people, ensuring that their voices are heard and their visions are realized.



tech architecture
---



demo
---


outro
---
team introduction
shoutouts
*/

const generateSubarray = (arr) => {
  const giantArray = [];
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length; index++) {
      giantArray.push(new Array(arr[index], arr[j + 1]));
    }
  }
  console.log(giantArray);
};

generateSubarray([34, -50, 42, 13, -5, 86]);
// runningMedian();

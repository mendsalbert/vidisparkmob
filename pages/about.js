import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState("1st");
  const onClick = (value) =>
      activeFaq === value ? setActiveFaq("") : setActiveFaq(value),
    classNameChange = (value) => (value === activeFaq ? "" : "show");
  return (
    <Layouts>
      {/* <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"> */}

      <div class="tw-flex tw-items-center tw-justify-center tw-min-h-screen tw-bg-white dark:tw-bg-green-400 tw-py-48">
        <div class="tw-flex tw-flex-col">
          <div class="tw-flex tw-flex-col tw-mt-8">
            <div class="tw-container tw-max-w-7xl tw-px-4">
              <div class="tw-flex tw-flex-wrap tw-justify-center tw-text-center tw-mb-24">
                <div class="tw-w-full tw-lg:w-6/12 tw-px-4">
                  <h1 class="tw-text-gray-900 tw-text-4xl tw-font-bold tw-mb-8">
                    Mission and Vision of Vidispark
                  </h1>

                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    Our mission at Vidispark is to revolutionize the world of
                    video streaming by providing a decentralized and inclusive
                    platform that empowers creators, engages viewers, and
                    fosters a vibrant community. We strive to connect talented
                    artists, content creators, and brands with their passionate
                    audience while embracing the innovative capabilities of Web3
                    technologies.
                  </p>
                  <br />
                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    Vision: Our vision is to create a dynamic metaverse where
                    creative expression knows no bounds. We envision a future
                    where Vidispark becomes the go-to platform for artists of
                    all mediums to showcase their talents, share their stories,
                    and connect with their fans on a deeper level. By leveraging
                    decentralized video streaming, NFT-based creations, social
                    tokens, and gamification, we aim to redefine the streaming
                    experience, promote authenticity, and cultivate a thriving
                    ecosystem where artists and viewers alike can thrive.
                  </p>
                  <br />
                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    Through our platform, we aim to empower creators by
                    providing them with new avenues for monetization,
                    collaboration opportunities with brands, and direct
                    engagement with their fanbase. We envision a
                    community-driven platform that celebrates diversity,
                    encourages innovation, and supports the growth and success
                    of creators from all backgrounds.
                  </p>
                  <br />
                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    At Vidispark, we are committed to pushing the boundaries of
                    what's possible in the world of video streaming, embracing
                    emerging technologies, and creating a seamless and immersive
                    experience for our users. Together, we are building a
                    metaverse where creativity thrives, connections are forged,
                    and artistry knows no limits.
                  </p>
                </div>
              </div>

              <div class="tw-flex tw-flex-wrap tw-justify-center tw-text-center tw-mb-24">
                <div class="tw-w-full tw-lg:w-6/12 tw-px-4">
                  <h1 class="tw-text-gray-900 tw-text-4xl tw-font-bold tw-mb-8">
                    Meet the Team
                  </h1>

                  <p class="tw-text-gray-700 tw-text-lg tw-font-light">
                    The brains behind vidispark
                  </p>
                </div>
              </div>

              <div class="tw-flex tw-flex-row sm:tw-flex-col">
                <div class="tw-w-full tw-md:w-6/12 tw-lg:w-3/12 tw-mb-6 tw-px-6 tw-sm:px-6 tw-lg:px-4">
                  <div class="tw-flex tw-flex-col">
                    <a href="#" class="tw-mx-auto">
                      <img
                        class="tw-rounded-2xl tw-drop-shadow-md tw-hover:drop-shadow-xl tw-transition-all tw-duration-200 tw-delay-100"
                        src="/img/mends.png"
                      />
                    </a>

                    <div class="tw-text-center tw-mt-6">
                      <h1 class="tw-text-gray-900 tw-text-xl tw-font-bold tw-mb-1">
                        Mends Albert{" "}
                      </h1>

                      <div class="tw-text-gray-700 tw-font-light tw-mb-2">
                        Founder & Chief Technology Officer{" "}
                      </div>
                      <div class="tw-text-gray-700 tw-font-bold  tw-mb-2">
                        mendsalbert@gmail.com
                      </div>

                      <div
                        class="tw-flex tw-items-center tw-justify-center tw-opacity-50 tw-hover:opacity-100
                                tw-transition-opacity tw-duration-300"
                      >
                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-indigo-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-linkedin tw-text-indigo-500 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-blue-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-twitter tw-text-blue-300 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-orange-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-instagram tw-text-orange-400 tw-mx-auto tw-mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tw-w-full tw-md:w-6/12 tw-lg:w-3/12 tw-mb-6 tw-px-6 tw-sm:px-6 tw-lg:px-4">
                  <div class="tw-flex tw-flex-col">
                    <a href="#" class="tw-mx-auto">
                      <img
                        class="tw-rounded-2xl tw-drop-shadow-md tw-hover:drop-shadow-xl tw-transition-all tw-duration-200 tw-delay-100"
                        src="/img/eva.png"
                      />
                    </a>

                    <div class="tw-text-center tw-mt-6">
                      <h1 class="tw-text-gray-900 tw-text-xl tw-font-bold tw-mb-1">
                        Eva Mariwa
                      </h1>

                      <div class="tw-text-gray-700 tw-font-light tw-mb-2">
                        Co-Founder & Technical Writer{" "}
                      </div>
                      <div class="tw-text-gray-700 tw-font-bold  tw-mb-2">
                        evaakosuamariwa@gmail.com
                      </div>

                      <div
                        class="tw-flex tw-items-center tw-justify-center tw-opacity-50 tw-hover:opacity-100
                                tw-transition-opacity tw-duration-300"
                      >
                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-indigo-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-linkedin tw-text-indigo-700 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-blue-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-twitter tw-text-blue-400 tw-mx-auto tw-mt-2"></i>
                        </a>

                        <a
                          href="#"
                          class="tw-flex tw-rounded-full tw-hover:bg-orange-50 tw-h-10 tw-w-10"
                        >
                          <i class="mdi mdi-instagram tw-text-orange-400 tw-mx-auto tw-mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};
export default Faq;

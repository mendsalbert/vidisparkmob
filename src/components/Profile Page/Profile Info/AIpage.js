import React, { useState, useEffect, useContext } from "react";
import { useUser } from "../../../services/user";
import { Web3Storage } from "web3.storage";
import { v4 as uuidv4 } from "uuid";
import { Configuration, OpenAIApi } from "openai";

const AIpage = () => {
  const { updateUser, userInfo } = useUser();
  const [userPrompt, setUserPrompt] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [res, setRes] = useState("");
  const configuration = new Configuration({
    organization: "org-iW0tOES3m75oHB2cx9IxyB8I",
    apiKey: process.env.GREETING,
  });

  const openai = new OpenAIApi(configuration);
  //   console.log(process.env.OPEN_AI_KEY);
  //   console.log(process.env.GREETING);
  //   console.log(process.env.GREETING);

  const generateContent = async () => {
    setisLoading(true);
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${userPrompt}`,
      temperature: 1.4,
      top_p: 0.7,
      max_tokens: 120,
    });
    setRes(completion.data.choices[0].text);
    setisLoading(false);
    return completion.data.choices[0]?.text;
  };
  return (
    <div className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Vidispark AI</div>

      <div className="form-field ">
        <label htmlFor="message">
          Generate your video caption with vidispark AI
        </label>
        <textarea
          id="message"
          name="message"
          className="comment-form message"
          cols={30}
          rows={10}
          value={userPrompt}
          onChange={(e) => {
            setUserPrompt(e.target.value);
          }}
          data-val="\S"
          data-val-msg="* Please, type a message."
          data-val-msg-id="textareaMessage"
          required=""
          //   defaultValue={userInfo[0]?.data?.bio}
        />
        <span className="input_error-message" id="textareaMessage" />
      </div>
      {res && (
        <p
          htmlFor="name"
          className="tw-mb-8 tw-ring-2 tw-rounded-2xl tw-ring-gray-400 tw-p-3"
        >
          {res && res}{" "}
        </p>
      )}

      <button
        onClick={() => {
          //   console.log(process.env.OPEN_AI_KEY);
          generateContent();
          //   onUpdateUserDataHandler();
        }}
        className="btn btn-wide btn-dark tw-mt-3"
      >
        {isLoading ? (
          <div className="tw-flex  tw-flex-row tw-items-center  tw-space-x-2">
            <div
              class="tw-inline-block tw-mr-2 tw-h-6 tw-w-6 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span class="tw-!absolute tw!-m-px tw!h-px tw!w-px tw!overflow-hidden tw!whitespace-nowrap tw!border-0 tw!p-0 tw![clip:rect(0,0,0,0)]"></span>
            </div>
            Generating...
          </div>
        ) : (
          "Generate"
        )}
      </button>
    </div>
  );
};

export default AIpage;

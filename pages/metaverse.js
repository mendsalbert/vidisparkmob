import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Layouts from "../src/layouts/Layouts";

const ProfilePageTabsCreated = () => {
  return (
    <Layouts>
      <div className="page-title-section tw-mx-4 tw-mt-4">
        <h2 className="tw-text-xl">
          Metaverse
          <span className="gradient-text"> from voxels.com </span>
        </h2>
      </div>
      <div className="featured-box grid-4-columns tw-mx-4 tw-mt-4">
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="featured-item-image">
                {" "}
                <Link href="https://www.voxels.com/play?coords=NE@634E,328S,20.5U">
                  <a>
                    <img
                      src="https://i.ibb.co/pXHXTpS/proton-towner.jpg"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="https://www.voxels.com/play?coords=NE@634E,328S,20.5U">
                    <a>415 Proton Tower</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-text-white tw-px-5 tw-py-2 tw-rounded-full ">
                    <Link href="https://www.voxels.com/play?coords=NE@634E,328S,20.5U">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="featured-item-image">
                {" "}
                <Link href="https://www.voxels.com/play?coords=N@813E,528S">
                  <a>
                    <img
                      src="https://i.ibb.co/8Xtq9hZ/turkenstrasee.jpg"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="https://www.voxels.com/play?coords=N@813E,528S">
                    <a>7 Turkenstrasse</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-text-white tw-px-5 tw-py-2 tw-rounded-full ">
                    <Link href="https://www.voxels.com/play?coords=N@813E,528S">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>

        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="featured-item-image">
                <Link href="https://www.voxels.com/play?coords=SE@815E,534S">
                  <a>
                    <img
                      src="https://i.ibb.co/xLDDxv3/womp-1684476203215-282962ae50c45a66274246039f068236.jpg"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="https://www.voxels.com/play?coords=SE@815E,534S">
                    <a>13 Turkenstrasse</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-text-white tw-px-5 tw-py-2 tw-rounded-full ">
                    <Link href="https://www.voxels.com/play?coords=SE@815E,534S">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="featured-item-image">
                {" "}
                <Link href="https://www.voxels.com/play?coords=SW@634E,319S,20.5U">
                  <a>
                    <img
                      src="https://i.ibb.co/qsH5Rq9/womp-1684474662484-b0398a29b418673f7889f28a777196e4.jpg"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="https://www.voxels.com/play?coords=SW@634E,319S,20.5U">
                    <a>415 Proton Tower</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-text-white tw-px-5 tw-py-2 tw-rounded-full ">
                    <Link href="https://www.voxels.com/play?coords=SW@634E,319S,20.5U">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>
        <div className="featured-item">
          <div className="featured-item-wrapper">
            <div className="featured-item-content">
              <div className="featured-item-image">
                {" "}
                <Link href="https://www.voxels.com/play?coords=NE@584E,313S">
                  <a>
                    <img
                      src="https://i.ibb.co/ccwPJHC/womp-1684475028009-f4239d61be3d059de955f208d0af2f25.jpg"
                      alt=""
                    />
                  </a>
                </Link>{" "}
              </div>
              <div className="featured-item-info">
                <div className="featured-countdown">
                  {/*  */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-cardboards"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z"></path>
                    <path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                    <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                  </svg>
                </div>
                <div className="title">
                  {" "}
                  <Link href="https://www.voxels.com/play?coords=NE@584E,313S">
                    <a>39 Proton</a>
                  </Link>{" "}
                </div>
                <div className="item-meta">
                  <button className="tw-bg-green-600 tw-text-white tw-px-5 tw-py-2 tw-rounded-full ">
                    <Link href="https://www.voxels.com/play?coords=NE@584E,313S">
                      View
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="featured-item-post-content"></div>
          </div>
        </div>
      </div>
    </Layouts>
  );
};

export default ProfilePageTabsCreated;

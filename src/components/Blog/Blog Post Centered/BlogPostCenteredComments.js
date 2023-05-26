import Link from "next/link";
import React from "react";
const BlogPostCenteredComments = () => {
  return (
    <>
      <h3 className="content-heading">Comments</h3>
      <ul className="comments-list">
        <li className="comment-item has-children">
          <div className="comment-item-wrapper">
            <div className="avatar-block">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </Link>{" "}
              </div>
              <div className="avatar-meta">
                <div className="avatar-title">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>Dexter Stark</a>
                  </Link>{" "}
                </div>
                <div className="avatar-meta">@dexterstark</div>
              </div>
            </div>
            <div className="comment-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco...
            </div>
            <div className="comment-meta">
              <div className="publish-date">2 hours ago</div>
              <div className="reply">
                {" "}
                <a href="#">Reply</a>
              </div>
            </div>
          </div>
          <ul className="children">
            <li className="comment-item">
              <div className="comment-item-wrapper">
                <div className="avatar-block">
                  <div className="avatar box-42">
                    {" "}
                    <Link href="/08-profile-page">
                      <a>
                        <img src="img/avatar-2.png" alt="avatar" />
                        <span className="verified">
                          <svg className="crumina-icon">
                            <use xlinkHref="#check-icon" />
                          </svg>
                        </span>
                      </a>
                    </Link>{" "}
                  </div>
                  <div className="avatar-meta">
                    <div className="avatar-title">
                      {" "}
                      <Link href="/08-profile-page">
                        <a>Jackie Jones</a>
                      </Link>{" "}
                    </div>
                    <div className="avatar-meta">@JackieJ</div>
                  </div>
                </div>
                <div className="comment-body">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque.
                </div>
                <div className="comment-meta">
                  <div className="publish-date">46 minutes ago</div>
                  <div className="reply">
                    {" "}
                    <a href="#">Reply</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="comment-item has-children">
          <div className="comment-item-wrapper">
            <div className="avatar-block">
              <div className="avatar box-42">
                {" "}
                <Link href="/08-profile-page">
                  <a>
                    <img src="img/avatar-15.png" alt="avatar" />
                    <span className="verified">
                      <svg className="crumina-icon">
                        <use xlinkHref="#check-icon" />
                      </svg>
                    </span>
                  </a>
                </Link>{" "}
              </div>
              <div className="avatar-meta">
                <div className="avatar-title">
                  {" "}
                  <Link href="/08-profile-page">
                    <a>Crimson Ray</a>
                  </Link>{" "}
                </div>
                <div className="avatar-meta">@crimsonray</div>
              </div>
            </div>
            <div className="comment-body">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur.
            </div>
            <div className="comment-meta">
              <div className="publish-date">5 hours ago</div>
              <div className="reply">
                {" "}
                <a href="#">Reply</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default BlogPostCenteredComments;

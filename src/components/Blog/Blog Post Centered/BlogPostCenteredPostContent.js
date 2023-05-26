import Link from "next/link";
import React from "react";
const BlogPostCenteredPostContent = () => {
  return (
    <div className="post-content">
      <p>
        Ethereum was proposed in 2013 by programmer Vitalik Buterin. In 2014,
        development was crowdfunded, and the network went live with an initial
        supply of 72 million coins on 30 July 2015. The platform allows
        developers to build and operate decentralized applications that users
        can interact with. Decentralized finance (DeFi) applications provide a
        broad array of financial services without the need for typical financial
        intermediaries, such as brokerages, exchanges, or banks, allowing
        cryptocurrency users to borrow against their holdings or lend them out
        for or lend them out for interest. Ethereum also allows for the creation
        and exchange of NFTs, which are non-interchangeable tokens connected to
        digital works of art or other real-world items and sold as unique
        digital property. Additionally, many other cryptocurrencies operate as
        ERC-20 tokens on top of the Ethereum blockchain and have utilized the
        platform for initial coin offerings. Ethereum has started implementing a
        series of upgrades called Ethereum 2.0, which includes a transition to
        proof of stake and aims to increase transaction throughput using
        sharding.
      </p>
      <h4 className="content-heading">Uploading your Artwork</h4>
      <p>
        A non-fungible token (NFT) is a unit of data stored on a digital ledger,
        called a blockchain, that certifies a digital asset to be unique and
        therefore not interchangeable. NFTs can be used to represent items such
        as photos, videos, audio, and other types of digital files. Access to
        any copy of the original file, however, is not restricted to the buyer
        of the NFT. While copies of these digital items are available for anyone
        to obtain, NFTs are tracked on blockchains to provide the owner with a
        proof of ownership that is separate from copyright.
      </p>
      <blockquote>
        <p>
          <span className="colored">{`"`}</span>
          {`I uploaded my first artwork 2 months ago and it’s really easy to do!`}
          <span className="colored">{`"`}</span>
        </p>
        <div className="quote-author">Dexter Stark</div>
      </blockquote>
      <p>
        NFTs function like cryptographic tokens, but unlike cryptocurrencies
        such as Bitcoin, are not mutually interchangeable, in other words, not
        fungible (e.g. one bitcoin is equivalent to any other bitcoin while
        every NFT may represent a different underlying asset and thus have a
        different value). NFTs are created when blockchains string records of
        cryptographic hash, a set of characters identifying a set of data, onto
        previous records therefore creating a chain of identifiable data blocks.
        This cryptographic transaction process ensures the authentication of
        each digital file by providing a digital signature that is used to track
        NFT ownership. However, data links that point to details like where the
        art is stored can die. The unique identity and ownership of an NFT is
        verifiable via the blockchain ledger
      </p>
      <figure>
        <img src="img/content/single-post/image-2.png" alt="" />
        <figcaption>
          {`“Lost in Illustration” artwork by`}{" "}
          <Link href="/08-profile-page">
            <a>@noirArtks</a>
          </Link>{" "}
        </figcaption>
      </figure>
      <p>
        Digital art was an early use case for NFTs, because of the ability of
        blockchain technology to assure the unique signature and ownership of
        NFTs.
      </p>
      <h4 className="content-heading">Selling Here: Lists</h4>
      <p>
        The unique identity and ownership of an NFT is verifiable via the
        blockchain ledger. Ownership of the NFT is often associated with a
        license to use the underlying digital asset, but generally does not
        confer copyright to the buyer: some agreements only grant a license for
        personal, non-commercial use, while other licenses also allow commercial
        use of the underlying digital asset.
      </p>
      <div className="list-block">
        <ul className="bullet-list list-line-height">
          <li>
            <svg className="crumina-icon bullet-icon">
              <use xlinkHref="#circle-icon" />
            </svg>
            Valorization of your artwork
          </li>
          <li>
            <svg className="crumina-icon bullet-icon">
              <use xlinkHref="#circle-icon" />
            </svg>
            Supporting other artists
          </li>
          <li>
            <svg className="crumina-icon bullet-icon">
              <use xlinkHref="#circle-icon" />
            </svg>
            Funding new art techniques
          </li>
        </ul>
        <ol className="list-line-height">
          <li>Valorization of your artwork</li>
          <li>Supporting other artists</li>
          <li>Funding new art techniques</li>
        </ol>
      </div>
      <p>
        Thanks again for reading and we hope that this post was useful! If you
        have any other questions, please check our FAQs section, or leave a
        comment down here.
      </p>
      <div className="post-author-box">
        <div className="author-heading">
          <div className="avatar-block">
            <div className="avatar box-42">
              {" "}
              <Link href="/08-profile-page">
                <a>
                  <img src="img/avatar-7.png" alt="avatar" />
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
                  <a>Marina Valentine</a>
                </Link>{" "}
              </div>
              <div className="avatar-meta">@mvalentine</div>
            </div>
          </div>
          <ul className="social-icons-list">
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#link-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#facebook-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitter-icon" />
                </svg>
              </a>
            </li>
            <li className="social-icon icon-border">
              {" "}
              <a href="#">
                <svg className="crumina-icon">
                  <use xlinkHref="#twitch-icon" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco...
        </p>
      </div>
    </div>
  );
};

export default BlogPostCenteredPostContent;

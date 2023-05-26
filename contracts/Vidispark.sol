// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Vidispark {

    // NFT-based Creations
    struct NFT {
        string name;
        string image;
        uint256 price; // Add price field
    }
    mapping(uint256 => NFT) public nfts;
    uint256 public totalSupply; // Add totalSupply variable
    // Social Tokens
    string public constant TOKEN_NAME = "VDP Token";
    string public constant TOKEN_SYMBOL = "VDP";
    uint8 public constant TOKEN_DECIMALS = 18;
    uint256 public constant INITIAL_SUPPLY = 1000000 * 10**uint256(TOKEN_DECIMALS);
    mapping(address => bool) public whitelist;

    // Sponsorship Marketplace
    struct Sponsorship {
        address brand;
        address creator;
        string sponsorshipType;
        string description;
        uint256 startDate;
        uint256 endDate;
        uint256 amount;
        string status;
    }

    Sponsorship[] public sponsorships;

    // Gamified Experience
    struct Achievement {
        uint256 id;
        string name;
        string description;
        uint256 points;
        uint256 threshold;
    }
    mapping(address => uint256) public points;
    Achievement[] public achievements;

    // Contract Owner
    address public owner;

    constructor() {
        owner = msg.sender;
        nfts[0] = NFT("", "", 0); // Initialize NFT with zero values
    }

    // Only Owner Modifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    // Override _mint function
    function _mint(address to, uint256 tokenId, uint256 amount) internal {
        points[to] += amount;
        nfts[tokenId] = NFT("", "", 0); // Initialize NFT with zero values
    }

    // NFT-based Creations
    function mintNFT(string memory name, string memory image, uint256 price) public {
        uint256 tokenId = totalSupply + 1;
        _mint(msg.sender, tokenId, price);
        nfts[tokenId] = NFT(name, image, price);
    }

    // Social Tokens
    function addToWhitelist(address account) public onlyOwner {
        whitelist[account] = true;
    }

    function removeFromWhitelist(address account) public onlyOwner {
        whitelist[account] = false;
    }

    function buyTokens() public payable {
        require(whitelist[msg.sender], "You are not whitelisted to buy tokens");
        uint256 amount = msg.value * 100;
        _mint(msg.sender, 0, amount); // Mint with zero tokenId and no price
    }

    function claimTokens() public {
        uint256 amount = 100;
        _mint(msg.sender, 0, amount); // Mint with zero tokenId and no price
    }

    // Sponsorship Marketplace
    function createSponsorship(
        address brand,
        string memory sponsorshipType,
        string memory description,
        uint256 startDate,
        uint256 endDate,
        uint256 amount
    ) public {
        Sponsorship memory sponsorship = Sponsorship(brand, msg.sender, sponsorshipType, description, startDate, endDate, amount, "Pending");
        sponsorships.push(sponsorship);
    }

    function approveSponsorship(uint256 index) public onlyOwner {
        Sponsorship storage sponsorship = sponsorships[index];
        sponsorship.status = "Approved";
        _mint(sponsorship.brand, 0, sponsorship.amount); // Mint with zero tokenId and no price
    }

    function rejectSponsorship(uint256 index) public onlyOwner {
    Sponsorship storage sponsorship = sponsorships[index];
    sponsorship.status = "Rejected";
}

// Gamified Experience
function createAchievement(
    uint256 id,
    string memory name,
    string memory description,
    uint256 points,
    uint256 threshold
) public onlyOwner {
    Achievement memory achievement = Achievement(id, name, description, points, threshold);
    achievements.push(achievement);
}

function claimAchievement(uint256 index) public {
    Achievement storage achievement = achievements[index];
    require(points[msg.sender] >= achievement.threshold, "You don't have enough points to claim this achievement");
    points[msg.sender] -= achievement.threshold;
    _mint(msg.sender, 0, achievement.points); // Mint with zero tokenId and no price
}
}

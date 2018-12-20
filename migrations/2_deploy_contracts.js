//var CampaignFactory = artifacts.require("./CampaignFactory.sol");

var Lottery = artifacts.require("./Lottery.sol");

module.exports = function(deployer) {
   //deployer.deploy(CampaignFactory);
   deployer.deploy(Lottery);
   
};
pragma solidity ^0.6.7;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    
    
    
    event below20(int _price);
    event below30(int _price);
    event below40(int _price);
    event below50(int _price);
    event below60(int _price);

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() public {
        priceFeed = AggregatorV3Interface(0x3D400312Bb3456f4dC06D528B55707F08dFFD664);
    }

    /**
     * Returns the latest price
     */
    
    function getThePrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        
        price = price/10**9;
        
        return price;

        
    
    }
    
    
    function updateThePrice() public returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        
        price = price/10**9;
        
        if(price <20){
            emit below20(price);
        }
        else if(price <30){
            
            emit below30(price);
        }
        else if(price <40){
            emit below40(price);
        }
        else if(price <50){
            emit below50(price);
        }

    
        
        return price/10**9;

        
    
    }
    
    
    
   
    // function throwevent(uint curr) public returns () {
    //     if(curr < 20)
    //     {
    //         emit 
    //     }
    // }
}
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract VendingMachine {
    address public owner;
    mapping(address => uint) public candyBalances;

    constructor(){
        owner = msg.sender;
        candyBalances[address(this)]=100;
    }

    function getVendingMachineBalance() public view returns (uint){
        return candyBalances[address(this)];
    }

    function restockVendingMachine(uint _amount) public {
        require(msg.sender==owner,"Only owner can restock");
        candyBalances[address(this)] += _amount;
    }

    function purchaseCandy(uint _amount) public payable {
        require(msg.value>=_amount*1 ether,"You must pay atleast 1 ether per candy");
        require(candyBalances[address(this)]>=_amount,"Not enough candy present!!");
        candyBalances[address(this)]-=_amount;
        candyBalances[msg.sender]+=_amount;
    }
}
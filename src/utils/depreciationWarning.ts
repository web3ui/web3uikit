const depreciatedWarning = (description: string) => {
    console.log('--------');
    console.log('DEPRECIATION WARNING!');
    console.log(
        `${description} has been depreciated, you should remove this from your code as it will soon be fully removed and will cause breaks in your app / dapp`,
    );
    console.log(
        'Thanks for using the kit, you can reach us anytime at Discord > Moralis DAO > web3uiKit',
    );
    console.log('http://moralis.io/discord');
    console.log('--------');
};

export default depreciatedWarning;

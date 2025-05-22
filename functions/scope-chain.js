//scope chain
/*---------------------------------------------
{
    //Scope1
    let countryName = "India";
    {
        //scope2
        let stateName = "Andhrapradesh";
        {
            //scope3
            let districtName = "Kadapa";
            //console.log("district:" + districtName);
            //console.log("state:" + stateName);
            //console.log("country:" + countryName);

        }
        //console.log("state:" + stateName);
        //console.log("country:" + countryName);
    }
    console.log("country:" + countryName);
}
*///---------------------------------------------------------

{
    let X = 10;
    let Y = 20;
    Z = X + Y;
    function sum() {
        let Z = X + Y;
        console.log("sum:" + Z);
    }
    sum();
    
    {

        {

        }
    }
    console.log(Z);
}
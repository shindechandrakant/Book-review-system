

// use this function to convert 1D array into 2D array
// pass 1D array and it will 2D return matrix of 3 * 3 dimenssions

function oneDintoTwoDarray(oneDarray) {

    let twoD = [[]];
    for(let j = 0; j < oneDarray.length;)
    {
        let temp = [];
        for(let i = 0; i < 3 && j < oneDarray.length; i++)
        {
            temp.push(oneDarray[j]);
            j += 1;
        }
        twoD.push(temp);
    }
    return twoD;
}

function isValidEmail(email) {
    
    console.log("got Email for validation " + email);
    let regX = RegExp("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+");
    return regX.test(email);
}

function onlyString(str)
{
    let regX = /^[,a-zA-Z\s]+$/;
    return regX.test(str);
}


export {
    isValidEmail,
    oneDintoTwoDarray,
    onlyString
}


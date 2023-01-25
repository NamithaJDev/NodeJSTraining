exports.f1= function (arr,searchTerm)
{
    var searchPosArr=[];
    var pos=arr.indexOf(searchTerm);
    console.log(pos);
    while (pos >=0)
    {
        searchPosArr.push(pos);
        pos=arr.indexOf(searchTerm,pos+1);
    }
    return searchPosArr;
}

exports.f2 =(arrOfObj,fieldName,value)=>
{
    for(let i=0;i<arrOfObj.length;i++)
    {
        if (arrOfObj[i][fieldName] === value )
        {
            return i;
            break;
        }
    }
    return -1;
}
exports.findAllPosArrOfObj =function findAllPosArrOfObj(arrOfObj,fieldName,value)
{
    var posArr=[]
    for(let i=0;i<arrOfObj.length;i++)
    {
        if (arrOfObj[i][fieldName] === value )
        {
            posArr.push(i);
        }
    }
    return posArr;
}
const collectIds = (arr) => {
    let filterFilms = getFilteredArray(arr, function(val){
        return val.rating > 3;
        }
    );
    return getTransformedArray(filterFilms, function(val){
        return val.id;
    }) 
};
function background_change() {
    if (trees_chopped > 99 && trees_chopped < 1000) {
        document.body.style.background = "url('Images/full_forest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (trees_chopped > 999 && trees_chopped < 10000) {
        document.body.style.background = "url('Images/partial_deforest.png') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
        
    }
    if (trees_chopped > 9999 && trees_chopped < 100000) {
        document.body.style.background = "url('Images/mostly_deforest.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
    if (trees_chopped > 99999 && trees_chopped < 1000000) {
        document.body.style.background = "url('Images/deforested_desert.avif') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover"
    }
}

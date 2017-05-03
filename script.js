$(function () {

    $("#button").on("click", function () {
        window.location.href = "scene.html"
    })

    $("#button").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })

    $("#lev").on("fusing", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Fuse");
    })
    $("#lev").on("click", function () {
        document.querySelector('a-scene').querySelector('#cursor').emit("Click");
    })
})

        function switchTracks(switched) {
            if (switched) {
                var scene = document.querySelector('a-scene');
                var getT1 = scene.getElementsByClassName("train1");
                getT1[0].setAttribute("visible", false);
                var getT2 = scene.getElementsByClassName("train2");
                getT2[0].setAttribute("visible", true);
            }
        }


function make() {
    var scene = document.querySelector('a-scene');
    var getLever = scene.getElementsByClassName("lever");
    getLever[0].setAttribute("collada-model", "lever2.dae");
    
    var switched = true;
    switchTracks(switched);
//    document.getElementById("trains").setAttribute("rotation", "0 79 0");
//    scene.querySelector('#trains').emit("Change");
    
}

    
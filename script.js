function changeImage() {
    var RustImage. = document.getElementById("RustImage");
    if (RustImage.src.match("Rust.png")) {
        RustImage.src = "New_Rust.png";
    } else {
        RustImage.src = "New_Rust2.png";
    }
}
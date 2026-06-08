function changeImage(img){

    const main =
    document.getElementById("mainImage");

    main.style.opacity="0";
    main.style.transform="scale(1.03)";

    setTimeout(()=>{

        main.src = img.src;

        main.style.opacity="1";
        main.style.transform="scale(1)";

    },200);

}
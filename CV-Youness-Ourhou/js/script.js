// Global Variables
    // Get Akll headers in The page
        let headers = document.querySelectorAll("h1");


// The first Part







// The second Part

    //  Toggle Show The Picture Icon Change
        let imgContainer = document.querySelector(".about_me .cover");
        let imgIcon = document.querySelector(".upload");
        imgContainer.onmouseenter = _ =>{
            imgIcon.style.visibility = "visible"
        }
        imgContainer.onmouseleave = _ =>{
            imgIcon.style.visibility = "hidden"
        }

    // Change picture with a loaded one
        let file = document.getElementById("myPic");
        file.addEventListener("change", ()=>{
            const fileImage = file.files[0];
            if(fileImage)
            {
                let reader = new FileReader();
                reader.readAsDataURL(fileImage);
                reader.onload = () => {
                    let img = document.getElementById("picture");
                    img.src = reader.result
                }
            }
        })




// The third Part
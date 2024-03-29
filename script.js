
    let accordionContainerSection = document.querySelectorAll('.accordion-container-section');

    
    accordionContainerSection.forEach((item, index) => {
        // console.log(item);
        let title = item.querySelector(".title");
        title.addEventListener("click", () => {
            item.classList.toggle("open");

            let description = item.querySelector(".accordion-container-paragraph");
            console.log(description);

            if (item.classList.contains("open")) {
                description.style.height = `${description.scrollHeight}px`;
                item.querySelector('.title img').src = 'assets/images/icon-minus.svg'
            } else {
                description.style.height = "0px";
                item.querySelector('.title img').src = 'assets/images/icon-plus.svg'

            }   
            removeOpen(index);
        
        })

    })

    function removeOpen(index1) {
        accordionContainerSection.forEach((item2, index2) =>{
            if (index1 != index2) {
                item2.classList.remove("open");

                let des = item2.querySelector(".accordion-container-paragraph");
                des.style.height = '0px';  
                item2.querySelector('.title img').src = 'assets/images/icon-plus.svg'
                         
            }
        })
    }
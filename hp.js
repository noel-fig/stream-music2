const members = document.querySelectorAll(".member");
members.forEach(member => {
    const button = member.querySelector(".member-btn");
    const content  = member.querySelector(".member-content");

    button.addEventListener("click",() =>{

        //現在閉じているか
        const isOpen = content.classList.contains("open");

        members.forEach(otherMember => {
            const otherButton = otherMember.querySelector(".member-btn");
            const otherContent = otherMember.querySelector(".member-content");

            otherContent.classList.remove("open");

            //▼を▶に戻す。
            otherButton.textContent =
            "▶" + otherButton.textContent.replace("▼","").replace("▶","");
        });

        if(!isOpen){
            content.classList.add("open");
            button.textContent =
                "▼" + button.textContent.replace("▶","");
        }
    });
});
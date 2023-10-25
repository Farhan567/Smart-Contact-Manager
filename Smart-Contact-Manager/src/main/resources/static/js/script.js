console.log("This is Java script");

const toggleSidebar = () => {
    if ($(".sidebar").is(":visible")) {
        $(".sidebar").css("display", "none");
        $(".content").css("margin-left", "0%");
    } else {
        $(".sidebar").css("display", "block");
        $(".content").css("margin-left", "20%");
    }
};




const search = () => {
    let query = $("#search-input").val();

    if (query == "") {
        $(".search-result").hide();
    } else {
        let url = `http://localhost:8091/search/${query}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let text = `<div class='list-group'>`;

                data.forEach((contact) => {
                    text += `<a href='/contact/${contact.cid}' class='list-group-item list-group-action'> ${contact.cname} </a>`;
                });

                text += `</div>`;

                $(".search-result").html(text);
                $(".search-result").show();
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
};


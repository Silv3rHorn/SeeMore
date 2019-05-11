function clickSeeMore() {
    // alert('CONTENT SCRIPT: I am running!');

    // var see_mores = document.getElementsByXPath(".//span[@class='see_more_link_inner']");
    // var see_mores = document.evaluate(".//span[@class='see_more_link_inner']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    var see_mores = document.getElementsByClassName("see_more_link_inner");
    var see_mores_length = see_mores.length;
    alert("Total See more Found: " + see_mores_length);
    for (var i = 0; i < see_mores_length; i++) {
        see_mores[i].click();
    }
}

clickSeeMore();
let fullCharList = [];

$(()=> {
    for(let index = 1; index <= 50; index++) {
        $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`)
        .done((charList)=>{
            //this appends the full character list 50 characters at a time (max 50 per page)
            // console.log(charList);
            fullCharList = [...fullCharList, ...charList]
        })
        .done(() =>{
            if(fullCharList.length >= 2134) { //this will trigger once we got ALL the characters
                //list out characters on HTML page
                // console.log(fullCharList);
                let $listGroupContainer = $('.list-group'); //container we want to append to
                let liTags = fullCharList.map((each_char) => { //array of character anchor tags
                    if(each_char.name.length > 0){
                        return `<a class='list-group-item list-group-item-action' href='${each_char.url}'>${each_char.name} Houses: <b>${each_char.allegiances.length}</b></a>`
                    }
                })
                // liTags.sort();
                $listGroupContainer.html(liTags.join(''));
            }
        })
    }
    //Event Listeners Here - made here after the list had been created and added to our web page
    $div = $('.list-group');
    $div.click((e) => {
        e.preventDefault(); //this prevents the default behavior of clicking on the character link, which takes us to the character api object page
        // console.log(e.target.href);
        $.get(e.target.href)
        .done((detailCharObj)=> {
            // console.log(detailCharObj);
            let $modalBody = $('.modal-body');
            if(detailCharObj.allegiances.length > 0){
                $modalBody.html('');
                detailCharObj.allegiances.forEach((houseURLAPI) => {
                    $.get(houseURLAPI)
                    .done((houseObj) => {
                        console.log(houseObj.name);
                        $modalBody.html(`<br>${$modalBody.html()}<br>${houseObj.name}`)
                        $('#myModal').modal('show');
                    })
                })
            }
            // $('#myModal').modal('show');
        })
    });

});

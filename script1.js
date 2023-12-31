//playlist object
const playlist = [
    {
        hits: 'Love hits',
        movieName: 'Top-global',
        track: 'Elankaathu...',
        id: '1',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9KR50cm7tgZr7HxUyVO56GiPBEn8qNP5bzQ&usqp=CAU',
        path: "/music/1.mp3"
    },
    {
        hits: 'Rock hits',
        path: "/music/2.mp3",
        movieName: 'Top-india',
        track: 'kannana kanne...',
        id: '2',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahgQNsCzexuH8X0KpTC-3RXsYIGE66BhvFg&usqp=CAU'
    },
    {
        hits: 'Dance hits',
        track: 'kannalane...',
        id: '3',
        movieName: 'hit-loves',
        path: "/music/3.mp3",
        year: '2023',
        img: 'https://i.scdn.co/image/ab67616d00001e0206785c864b949b8e85fe0d63'
    },
    {
        hits: 'party hits',
        movieName: 'top viral',
        track: 'Nee paartha..',
        path: "/music/4.mp3",
        id: '4',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY6ieiwlykXrtnCH8Tz2F4taePvWXrEEFeIKbutmnLhaUp6ZQ7cjOsaT6VwMSPbneTVo&usqp=CAU'
    },
    {
        track: 'oru paathi..',
        movieName: 'sad Hits',
        hits: 'Melody hits',
        id: '5',
        path: "/music/5.mp3",
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqmL2ikyo6iUBj3xRYz11nemRwwJeE7lLTA&usqp=CAU'
    },
    {
        movieName: 'AR Rahman',
        track: 'Simtangaara..',
        hits: 'Peaceful piano to help you slow down, breath...',
        year: '2023',
        id: "6",
        path: "/music/6.mp3",
        img: 'https://i.scdn.co/image/ab67706c0000da8488b969dcc964862920145076'
    },
    {
        movieName: 'GV.Prakash',
        hits: 'Keep calm with ambient and post-..',
        year: '2023',
        track: "Sirikkathy..",
        id: "7",
        path: "/music/7.mp3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iEA9XB6RL87xN_F8XVEy14-pX04dL4iSzg&usqp=CAU'
    },
    {
        movieName: 'Anirudh',
        hits: 'Focus with soft study music in the background.',
        year: '2023',
        track: "Thalli pogathy..",
        id: "8",
        path: "/music/8.mp3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOVl5Kq92DgyugZCIXcUE33pcRST442rMSoHjloc24pTNq3gYB1Kyat_vj55aXoo8UX8&usqp=CAU'
    },
    {
        movieName: 'Illayaraja',
        hits: 'Kick back to the best new and recent chill hits',
        year: '2023',
        track: "Unakul naane..",
        id: "9",
        path: "/music/9.mp3",
        img: 'https://i.scdn.co/image/ab67616d0000b27357d012dc72c8b95909c4d670'
    },
    {
        movieName: 'D.Imman',
        hits: 'Rock Legends & epic songs that continue to...',
        year: '2023',
        track: "Unnavidaa...",
        id: "10",
        path: "/music/10.mp3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0rkwCpJ5A8uBISyDIWbWMZMa7ntFdnMX6g&usqp=CAU'
    },
    {
        hits: 'Siru Ponmani..',
        movieName: 'Tops Tamil',
        track: 'Siru Ponmani..',
        id: '11',
        year: '2023',
        path: "/music/11.mp3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZ3lI5L_KaBqUjMU5Igx2NDi8EUVGJg9_dQ&usqp=CAU"
    },
    {
        hits: 'All Out Tamil',
        movieName: 'All Out Tamil',
        track: 'Pudhu Vellai...',
        id: '12',
        year: '2023',
        img: 'https://i.scdn.co/image/ab67706f00000003fba39c301a85043e199fff38',
        path: "/music/12.mp3"
    },
    {
        hits: '',
        movieName: '90s Tamil',
        track: 'Neethanae...',
        id: '13',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJ1lq6YIy-mn1rrZ4TGVqNgMM8mMC-47Ccw&usqp=CAU',
        path: "/music/13.mp3"
    },
    {
        hits: '',
        movieName: 'Hot Hits Tamil',
        track: 'Margazhi-Poove...',
        id: '14',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Us-Wh5WhhVINgJyOhnoqHwZMGJAUQT3GRs1BCGwWsETUFYqJ50tyZw4aEjK4v3uDQ1w&usqp=CAU',
        path: "/music/14.mp3"
    },
    {
        hits: '',
        movieName: 'Latest Tamil',
        track: 'Kadhal-Kanave...',
        id: '15',
        year: '2023',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rnpnOD3yrtowWPjaeq9xykhhIK6imd9aXw&usqp=CAU',
        path: "/music/15.mp3"
    }
]
const bottomPlayer = document.getElementById('bottomPlay')
let sug = document.getElementById('searchUl')
let userSearch = document.getElementById('searchUl')
bottomPlayer.innerHTML = `   
    <ul class="bottomUl">
    <li>
        <img src="${playlist[0].img}" class='recentImg bottomImg' alt="">
    </li>
    <li class="recentlist">
        <div class="col-md-auto">${playlist[0].track}</div>
    </li>`

//audio tag define
const audio = new Audio("/music/1.mp3")
const songArray = new Array()
range()
//display each play list like a card
const recentList = document.getElementById('div')
playlist.forEach((s, i) => {
    const row1 = document.getElementById('row1')
    const cardBody = createSongCard(s, i);
    row1.innerHTML += cardBody;
    songArray.push(cardBody)
});

function createSongCard(arrayDetails, i) {
    return `
    <div class="col-mg-5 displayList">
    <div class="card card1" style="width: 11rem;">
    <img src=${arrayDetails.img} class="card-img-top" alt="...">
    <span class="addSong" data-id="${arrayDetails.id}">Added favourtie</span>
    <i class="fa-regular fa-heart fav" id="${arrayDetails.id}" style="backgroundcolor:white"></i>
    <i class="fa-solid fa-play playButton" id="${arrayDetails.id}" data="${arrayDetails.id}"></i>
  <div class="card-body">
    <h6 class="card-title"><strong>${arrayDetails.movieName}</strong></h6>
    <p class="card-text songTrack">${arrayDetails.track}</p>
  </div>
</div>
</div>`
}

//add favorite list notification
let addFavList = document.querySelectorAll('.fa-heart').forEach((e) => {
    e.addEventListener('click', (event) => {
        //alert('hi')
        let e = event.target.id
        document.querySelectorAll('.addSong').forEach((data, index) => {
            console.log(data.getAttribute('data-id'))
            if (data.getAttribute('data-id') == e) {
                data.style.display = "block"
                setTimeout(() => {
                    data.style.display = "none"
                    if (data.innerHTML == "Removed favourtie") {
                        data.innerHTML = "Added favourtie"
                    } else {
                        data.innerHTML = "Removed favourtie"
                    }
                }, 1000)
            }
        })
    })
})


//show all and show less playlist

let hide = document.querySelectorAll('.displayList')
const show = document.getElementById('showAll')
hide.forEach((element, index) => {
    if (index < 10) {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
    show.innerHTML = `Show all`

})


show.addEventListener('click', () => {
    if (show.innerHTML == "Show all") {
        hide.forEach((element) => {
            element.style.display = "block";
            show.innerHTML = `Show less`
        })
    } else {
        hide.forEach((element, index) => {
            if (index < 10) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
            show.innerHTML = `Show all`

        })

    }

})

//show all and show less favorite list cards
favShowAll.addEventListener('click', () => {
    const favShow = document.querySelectorAll('.displayFavList')
    const favShowAll = document.getElementById('favShowAll')
    //    console.log('f',favShow)

    favShow.forEach((element, index) => {
        if (index < 5) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        favShow.innerHTML = `Show all`
    })

    if (favShowAll.textContent == "Show all") {
        favShow.forEach((element) => {
            element.style.display = "block";
        })
        favShowAll.innerHTML = `Show less`
    } else {

    }

})

let index = 0
const recentPlayed = new Array()

//play function start
let arrayRecent = []
const getSongIndex = document.querySelectorAll('.playButton').forEach((a) => {
    a.addEventListener('click', (event) => {
        const index = event.target.id
        playSong(index)  //=> call masterplay function
        recentlyPlay(index)   //=> call recently play fuction 
    })

})


let masterPlay = document.getElementById('masterPlay')

//declare masterplay function


function playSong(index) {
    audio.src = `./music/${index}.mp3`
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    audio.play();
    recentPlayed.forEach((e) => {
        console.log(e, index)
        if (e == !index) {
            recentPlayed.unshift(index)

        }
    })
    range()
    const bottomPlayer = document.getElementById('bottomPlay')
    const bottomSet = playlist.filter(data => data.id == index)
    bottomPlayer.innerHTML = `   
                      <ul class="bottomUl">
                        <li>
                            <img src="${bottomSet[0].img}" class='recentImg bottomImg' alt="">
                        </li>
                        <li class="recentlist">
                            <div class="col-md-auto">${bottomSet[0].track}</div>
                        </li>
                        </ul>`

}

//on music end function

function musicEnd() {
    if (index == playlist.length) {
        index = 1;
    } else {
        index++;
    }
    playSong(index)
}
audio.addEventListener('ended', musicEnd)



//master play play and pause
masterPlay.addEventListener('click', () => {
    if (masterPlay.classList[1] == "fa-circle-play") {
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        audio.play();
    } else {
        audio.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')

    }
})

//recently add
let recentPlayList = []
let recentPlayList1 = []
function recentlyPlay(index) {
    div.innerHTML = "";
    playlist.forEach((i) => {
        if (i.id == index) {
            recentPlayList.forEach((data, i) => {
                console.log(data.id == index)
                if (data.id == index) {
                    recentPlayList.splice(i, 1)
                    console.log('r', recentPlayList)
                }
            })
            recentPlayList.unshift(i)

        }
    })
    recentPlayList.forEach((s) => {
        div.innerHTML += `
                            <div class="recentBody" id="${s.id}" name="recentPlay">
                                <div class="recentUl">
                                    <img src="${s.img}" class='recentImg' alt="" style="flex-grow: 1">
                                </div>
                                <div class="recentlist recentUl recentTrack" style="flex-grow: 8">
                                    <div class="col-md-auto">${s.track}</div>
                                </div>
                                <div class="recentlist recentUl" style="flex-grow: 1">
                                   <i class="fa-solid fa-play recentButton" id="${s.id}" data-index="${s.id}"></i>
                                   <i class="fa-solid fa-xmark" id="${s.id}"></i>
                                   </div>
                            </div>`

    });
    let recentCardBody = document.querySelectorAll('.recentBody')
    let xMark = document.querySelectorAll('.fa-xmark').forEach((element) => {
        element.addEventListener('click', (event) => {
            const y = event.target.id
            let arr = recentPlayList.forEach((e) => {
                document.querySelectorAll('.recentBody').forEach((e, index) => {
                    if (e.getAttribute('id') == y) {
                        recentPlayList.splice(index, 1)
                        recentlyPlay()
                    }
                })

            })

        })
    })

    //recent master play

    const recentSongIndex = document.querySelectorAll('.recentButton').forEach((a) => {
        a.addEventListener('click', (event) => {
            const x = event.target.id
            console.log(a.classList)
            playSong(x)

        })
    })
}





//add to favorite list function

const row = document.getElementById('row3')
const likedSongs = document.querySelectorAll('.fav')
const likeSong = []
likedSongs.forEach((like) => {
    like.addEventListener('click', (data) => {
        const SongId = data.target.id
        row.innerHTML = '';
        if (like.classList.contains('fa-regular')) {
            like.classList.remove('fa-regular')
            like.classList.add('fa-solid')
            //  alert('hi')
            const favCard = playlist.filter((data) => {
                return data.id == SongId
            })
            // console.log(favCard)
            likeSong.push(favCard[0])
            //      console.log(likeSong)
            favSongUpdate()
        } else {
            like.classList.remove('fa-solid')
            like.classList.add('fa-regular')
            const favCard1 = playlist.filter((data) => {
                return data.id == SongId
            })
            //    console.log(favCard1)
            const find = likeSong.findIndex((e) => e.movieName == favCard1[0].movieName)
            likeSong.splice(find, 1)
            favSongUpdate()
        }
    })
})

function favSongUpdate() {
    likeSong.forEach((data1, index) => {
        row.innerHTML += `
                            <div class="col-mg-5 displayFavList" >
                                <div class="card card1" style="width: 11rem; background: rgba(128, 128, 128, 0.103) !important;">
                                    <img src="${data1.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <i class="fa-solid fa-play playButton button" id="${data1.id}"></i>
                                        <h5 class="card-title">${data1.movieName}</h5>
                                        <p class="card-text">${data1.track}</p>
                                    </div>
                                </div>
                            </div>`
        const b = document.querySelectorAll('.button').forEach((a) => {
            a.addEventListener('click', (event) => {
                const i = event.target.id
                playSong(i)
                range()
            })
        })
    })

}

//slider control
function range() {
    const slide = document.getElementById('range')
    audio.onloadedmetadata = () => slide.max = audio.duration
    slide.onchange = () => audio.currentTime = slide.value
    audio.ontimeupdate = () => slide.value = audio.currentTime
}

//next song play event
const next = document.getElementById('nextSong')

next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.querySelectorAll('.displayList')).length) {
        index = 1;
    }
    playSong(index)
    range()

})


//preveious songs play event
const pre = document.getElementById('preSong')
pre.addEventListener('click', () => {
    index--;
    if (index < 1) {
        index = Array.from(document.querySelectorAll('.displayList')).length;
    }
    playSong(index)
    range()
})


//start time setup
const start = document.getElementById('startTime')
const end = document.getElementById('endTime')
audio.addEventListener('timeupdate', () => {
    //    console.log(audio.currentTime)
    if (audio.duration) {
        let minTime = Math.floor(audio.currentTime / 60)
        let secTime = Math.floor(audio.currentTime - minTime * 60)
        //  console.log('time',minTime,secTime)  
        let minduration = Math.floor(audio.duration / 60)
        let secduration = Math.floor(audio.duration - minduration * 60)

        if (secduration < 10) {
            secduration = "0" + secduration
        }
        if (minduration < 10) {
            minduration = "0" + minduration
        }
        if (minTime < 10) {
            minTime = "0" + minTime
        }
        if (secTime < 10) {
            secTime = "0" + secTime
        }
        start.innerHTML = `${minTime}:${secTime}`
        end.innerHTML = `${minduration}:${secduration}`
    } else {
        start.innerHTML = `00:00`
        end.innerHTML = `00:00`
    }
})

let vol = document.getElementById('volume')
console.log(vol.value)
vol.onchange = () => {
    //console.log(vol.value)
    //alert('hi')
    audio.volume = parseInt(vol.value) / 100
}

playlist.forEach((song) => {
    sug.innerHTML += `
                     <li class="searchLi" id="searchList">
                        <a class="content" id=id${song.id}>${song.track}</a>
                     </li>`
    let aTag = document.querySelectorAll('.content')
    aTag.forEach((element) => {
        element.addEventListener('click', () => {
            search.value = element.textContent
            //userSearch.style.display="none"
            let v = search.value.toLowerCase()
            let item = search.getElementsByTagName('a')
            Array.from(item).forEach((e) => {
                console.log('hi')
                let ele = e.querySelector('content')
                let eleValue = ele.textContent || ele.innerHTML
                if (eleValue.toLowerCase().includes(input.value)) {
                    e.style.display = "block";
                } else {
                    e.style.display = "none";
                }
                search.style.display = input.value ? '' : "none"
            })
        })
    })

})


//filter suggestion content
let search = document.getElementById('search')
let filter, ul, li, a, i, txtValue;
function keyUp() {
    filter = search.value.toUpperCase();
    ul = document.getElementById('searchUl')
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}



let input = document.getElementsByTagName('input')[0]
//console.log('input',input)

search.addEventListener('input', () => {
    //console.log(search.value)
    let v = search.value.toLowerCase()
    let item = search.getElementsByTagName('a')
    Array.from(item).forEach((e) => {
        let ele = e.querySelector('content')
        let eleValue = ele.textContent || ele.innerHTML
        if (eleValue.toLowerCase().includes(input.value)) {
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }
        search.style.display = input.value ? '' : "none"
    })
    //console.log(songArray) 
    songArray.forEach((data) => {
        let searchSong = document.querySelectorAll('.displayList')
        searchSong.forEach((item) => {
            let trackName = item.querySelector('.songTrack').textContent.toLowerCase()
            if (trackName.includes(v)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        })
    })

})
// alert(search.value)
// console.log(search.value)
search.addEventListener('input', () => {
    if (!search.value) {
        document.getElementById('sug').style.display = "none";
    } else {
        document.getElementById('sug').style.display = "block";
    }

})


let searchId = document.querySelectorAll('.content')
playlist.forEach((data) => {
    searchId.forEach((e) => {
        if (e.classList[2] == data.id) {
            search.value = e.textContent
            //          console.log(search.value)
        }

    })

})


audio.onplay = () => {
    let ani = document.getElementById('animation')
    ani.style.visibility = "visible"
}
audio.onpause = () => {
    document.getElementById('animation').style.visibility = "hidden"
}

function displayMore() {
    document.getElementById('sug').style.display = "none";
}


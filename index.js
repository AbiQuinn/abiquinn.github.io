iframe = document.querySelector('iframe');
iframe.src = "https://drive.google.com/file/d/16TRZjCQhdH4gINDh3yJVe34_RWFspYkh"+"/preview";

let S1=[
    ["E01 - A New Transfer Student Came",                    "https://drive.google.com/file/d/16TRZjCQhdH4gINDh3yJVe34_RWFspYkh"],
    ["E02 - We Went to a Candy Store",                       "https://drive.google.com/file/d/1xLFhFDt0Z6VRBV4sRxlUbFMq9UPHDZjl"],
    ["E03 - I Ran Away From Home With My Sister",            "https://drive.google.com/file/d/15TAVD_N1I1SDupo-NjFV9kI0ERwYJF-F"],
    ["E04 - Summer Vacation Started",                        "https://drive.google.com/file/d/1Ol3Zaexjh6EcN7gjfsm2C96BTqUNAgox"],
    ["E05 - I Pretended I Forgot My Swimsuit",               "https://drive.google.com/file/d/1hE89miYJsZD3rXeyoYBQPNjQmP91gXjW"],
    ["E06 - I Became a Ghost and Tried Hard",                "https://drive.google.com/file/d/1POK2aOGQ4wPOjXkByAF3Rzy2j83kb0-o"],
    ["E07 - My Rice Cracker Turned Into Curry",              "https://drive.google.com/file/d/1NwZnqN6_PzpDzr6TMnTvvD1j85pVWzci"],
    ["E08 - We Cooked Rice at School",                       "https://drive.google.com/file/d/1L2vPV009gEHq_LGFTx-WeBHM69Ge3Gin"],
    ["E09 - We Tried Having a Cultural Festival",            "https://drive.google.com/file/d/1HlluDZ4ZOytypTRKNBUvGa7AZbpTGA4Y"],
    ["E10 - We Watched the First Sunrise of the Year",       "https://drive.google.com/file/d/1VqzXTJdHDmqAYHLvK6WIo-BkWdPV15Vl"],
    ["E11 - We Made Snow Houses",                            "https://drive.google.com/file/d/1rUEwTpVZmPBEzyhq2ZJuiUv9hXzsOccz"],
    ["E12 - Spring Came Again",                              "https://drive.google.com/file/d/1DojeO2-qcxvj7s5dXbJP_QyJN9KEM5XK"],
    ["E13 - We're Going to Okinawa (OAD)",                   "https://drive.google.com/file/d/117O2mS11PWJXXFT3oHcn2wnSG0CZOJyO"]
];

let M=[
    ["Non Non Biyori the Movie: Vacation",                   "https://drive.google.com/file/d/1XJU7mhtHOPB8kInuXuC0NnT8nagLwcTQ"]
];

let S2=[
    ["E01 - I Became a First Grader",                        "https://drive.google.com/file/d/1yBzF0KmgCit7-UipYTJ7sxVuzhojK7xT"],
    ["E02 - We Went to Look at the Stars",                   "https://drive.google.com/file/d/1N_hc0gV1R-VwG7NwGuDlJk8PoG6kSsYk"],
    ["E03 - We Got Motivated During the Holiday Break",      "https://drive.google.com/file/d/1VZTfKceXFyZDG5U-ZT9jwwcWnG3R9tSW"],
    ["E04 - I Made a Teru-teru Bouzu",                       "https://drive.google.com/file/d/1B2B-HGLXn9o1HnNx4pdW7dPoqohxdO8r"],
    ["E05 - We Ate Okonomiyaki",                             "https://drive.google.com/file/d/1jPUFzIM97uNIi3NMMxXwi1Ds_uSnj5UF"],
    ["E06 - We Made Friends With Fireflies",                 "https://drive.google.com/file/d/1UxZSzPDCg3L5MHhJ5SLR1jNcKjxYuCeK"],
    ["E07 - We Bravely Dove In",                             "https://drive.google.com/file/d/1DX-l65528Qj2b8Axlr5Mg8Tp9stOL8xO"],
    ["E08 - I Took Lunch Duty",                              "https://drive.google.com/file/d/1zztSsO_dI51bKiiZpy64CYCedMml5SCE"],
    ["E09 - We Looked at the Moon Together",                 "https://drive.google.com/file/d/1qqPwrYNkcFRIv2d7FJw2Or5IDcWc1cW5"],
    ["E10 - I Practiced Really Hard",                        "https://drive.google.com/file/d/1L5_NllP67mHYbBpBGFiGh0rAsGRIp_XF"],
    ["E11 - I Became a Pampered Child",                      "https://drive.google.com/file/d/1CH8YGtd49794rJpbpSixvLnlcT9F1-0u"],
    ["E12 - A Year Passed",                                  "https://drive.google.com/file/d/19UL6ODSjullVVpvTrw7brMTgg1H6JMMA"],
    ["E13 - Hotaru Had Fun (OAD)",                           "https://drive.google.com/file/d/19EUg1BuX-Qk7hHnq0f3ZnDUAk3t0_rNE"]
];

let S3=[
    ["E01 - I Played the Frog Song",                         "https://drive.google.com/file/d/1vVBj9-WAy1LieAIIinH9vr3uB0lxTrVO"],
    ["E02 - Hotaru Was Really Mature?",                      "https://drive.google.com/file/d/1c8KIKyI4bugJEIILMODMfNwOkOqeQm5H"],
    ["E03 - We Were Always Like This",                       "https://drive.google.com/file/d/1fd2A1Ee39nyJvstKcqTuP5frXsUl7-1b"],
    ["E04 - I Turned Into Santa to Deliver Tomatoes",        "https://drive.google.com/file/d/1NZBaFQM-YwzdzGgyZ4Hqrj8c4Orb4aQS"],
    ["E05 - I Made Something Incredible",                    "https://drive.google.com/file/d/1haewQEM5uXocQCC26E16BI3HjZxR0rtQ"],
    ["E06 - We All Went Camping Together",                   "https://drive.google.com/file/d/1vskb1vvvjx409DnTrX82EsdcdOLLlLVD"],
    ["E07 - It Was a Thrilling Autumn",                      "https://drive.google.com/file/d/1PLYQ7X3LH9RRoOHFjWaTqSRPXkhpBMuI"],
    ["E08 - My Senpai Had Entrance Exams Coming Up",         "https://drive.google.com/file/d/1PnLozXxcIY2Vawlv69JknEL_8eHrIBPw"],
    ["E09 - We Made Tasty Food",                             "https://drive.google.com/file/d/1H8nzbf0_Y-YeE_qlDPdgfcMGiVYcFzLu"],
    ["E10 - It Got Cold and Then Hot",                       "https://drive.google.com/file/d/1S2nQrwKYWd0xoA7vpBgK77js7g-BwygD"],
    ["E11 - I Got Drunk and Remembered",                     "https://drive.google.com/file/d/13WgN_CZL7EMV0DkUsFD9Jq7UGIlisDK0"],
    ["E12 - The Cherry Blossoms Bloomed Again",              "https://drive.google.com/file/d/1kFXERiBwuiBYAsjVdS9bx1AL0cemZM2k"],
    ["E13 - Our Club Worked Hard (OAD)",                     "https://drive.google.com/file/d/1OxV0cJ1ywYqIuad5ZVBzaKlighGd0QxS"]
];

let videos = [S1,M,S2,S3];

function setSeason(){
    var Season = document.getElementById("season");
    var selSeason = Season.options[Season.selectedIndex].value;

    getEpisodes(selSeason);
}

function getEpisodes(selSeason) {
    var select =  document.getElementById("episode");
    select.innerHTML = "";

    var options = videos[selSeason];
    
    for(var i = 0; i < options.length; i++){
        var opt = options[i][0];
        var el = document.createElement("option");
        el.text = opt;
        el.value = i;
        select.add(el);
    }
}

function setEpisode(){
    var Episode = document.getElementById("episode");
    var selEpisode = Episode.options[Episode.selectedIndex].value;
    var Season = document.getElementById("season");
    var selSeason = Season.options[Season.selectedIndex].value;
    
    iframe = document.querySelector('iframe');
    iframe.src = videos[selSeason][selEpisode][1]+"/preview";
}

function next(){
    var Season = document.getElementById("season");
    var selSeason = Season.options[Season.selectedIndex].value;
    var Episode = document.getElementById("episode");
    var selEpisode = Episode.options[Episode.selectedIndex].value;

    if (selSeason == 3 && selEpisode == 12){

        selSeason=0;
        Season.selectedIndex = selSeason;
        getEpisodes(selSeason);
        selEpisode=0;
        Episode.selectedIndex = selEpisode;

    } else if (selSeason==1 || selEpisode==12){

        selSeason++;
        Season.selectedIndex = selSeason;
        getEpisodes(selSeason);
        selEpisode=0;
        Episode.selectedIndex = selEpisode;

    } else {

        selEpisode++;
        Episode.selectedIndex = selEpisode;

    }
    
    iframe = document.querySelector('iframe');
    iframe.src = videos[selSeason][selEpisode][1]+"/preview";
}
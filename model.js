var request = require('request');
var express = require('express'); // Express web server framework
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var token = "Bearer <placeholder>";

/*var returnedUser = user.returnedUser;
const user_id;
const display_name;
const email;
const explicit_content;
const external_urls;
const followers;
const href;
const images; //array
const product;
const type;
const uri;
*/
//getPlaylist();

function getPlaylists(){
    request({
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {"Authorization":token}}, function(err, res){
            if (res){
                var playlists = JSON.parse(res.body);
                //console.log(playlists);
            }
        })
    return playlists;
}

function getPlaylist(playlist_id){
    var playlist_id = '40Ijt7B9sCqKQCR4U1fw6c'
    var url = 'https://api.spotify.com/v1/playlists/' + playlist_id;
    request({
        url: url,
        headers: {
            "Authorization": token,
            "playlist_id": playlist_id
        }}, function(err, res){
            if(res){
                var playlist = JSON.parse(res.body);
                //console.log(playlist);
                //console.log(playlist.tracks)
                return playlist;
            }
        })
}
/*takes a playlist object
function getPlaylistTracks(playlist){
    //playlist.tracks.item.forEach(element => {
        
    });
}*/
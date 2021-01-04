function ajaxDataYoutube() {
  return $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          part: "snippet",
          maxResults: "3",
          channelId: "UCoKXb95K5h3sME3c9OCBaeA",
          key: "AIzaSyDd_LkH6TVqYH9gfkt1q0ttpaxtkSPcsP4", 
          order: "date", //最新順に取得する
          type: "video",
      },
      dataType: 'json',
      error: function() {
          $('#youtube_list').append('最新動画の取得に失敗しました。');
      }
  })
}
ajaxDataYoutube().done(function(jsondataYt) {
    const ytID = jsondataYt.items[0].id.videoId
    const ytTitle = jsondataYt.items[0].snippet.title
    const YtHtml = '<iframe width="400" height="250" src="https://www.youtube.com/embed/' + ytID  
    + '?controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen><\/iframe><h4>' + ytTitle + '<\/h4>'
    $('#youtube_list').append(YtHtml);
});
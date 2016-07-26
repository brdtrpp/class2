shareConfig = {
	app: "1751686505046416",
	picture: "https://www.joinclass.co/images/apple-touch-icon-180x180.png",
};

Template.share.helpers({

});

Template.share.events({
	"click .fb-share": function() {
		var base = "https://www.facebook.com/dialog/feed"

		var href = base + "?app_id=" + shareConfig.app
			+ "&link=" + getUrl(this)
			+ "&name=" + this.title
			+ "&picture=" + shareConfig.picture
			+ "&description=" + $("<div>").html(this.description).text();
			+ "&redirect_uri=" + getUrl(this)

		window.open(href, "_system")
	},
	"click .tw-share": function() {
		var base = "https://twitter.com/intent/tweet";

		var href = base + "?url=" + getUrl(this)
	   		+ "&text=" + this.title
	   		+ "&via=" + "joinClassApp"
	   		+ "&hashtags=" + this.category;

		window.open(href, "_system")
	}
})

Template.eventItemList.onCreated(function() {

});

function getUrl(data) {
	var url = "";

	if (data.pid) {
	  	url = location.origin + location.pathname;
	} else {
	  	url = location.origin + "/class/" + data._id
	}

	return url;
}

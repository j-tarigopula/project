/****************************
CrushFTP GUI Panel custom js
*****************************/
/* Do not change these lines */
var panelSettings = {};
panelSettings.localization = {};
/****************************/

// Panel details
var panelName = "Settings";
panelSettings._panel = $("#pnl" + panelName);

// Localizations
panelSettings.localization = {
};

// Assign localizations
localizations.panels[panelName] = $.extend(panelSettings.localization, localizations.panels[panelName]);

// Interface methods
panelSettings.init = function(){
	applyLocalizations(panelName, localizations.panels);
	window.dataBindEvents.push(panelSettings.bindData);
	panelSettings.bindEvents();
}

panelSettings.clearForm = function(panel)
{
	panel = panel || panelSettings._panel;
	panel.find("input, select, textarea").each(function(){
		if($(this).attr("type")=="checkbox")
		{
			if($(this).closest("td").is(".checkboxArea"))return;
			crushFTP.UI.checkUnchekInput($(this));
		}
		else
		{
			$(this).val("");
		}
	});
}

panelSettings.bindData = function(userInfo, jsonDeep, panel)
{
	var dataPanel = panel || panelSettings._panel;
	panelSettings.clearForm(dataPanel);

	if(panel)
	{
		panel.removeClass("inheritValSet");
	}

	if(userInfo.user)
	{
		userManager.data.bindValuesFromJson(dataPanel, userInfo.user, false, panel);
		try{
			if(userInfo.user.user_bytes_received != undefined && userInfo.user.user_bytes_received != "")
			{
				var bytesReceived = userManager.methods.seperateValueAndInheritValue(userInfo.user.user_bytes_received).value;
				if(bytesReceived == "NaN" || isNaN(bytesReceived))
					bytesReceived = 0;
				$("#user_bytes_received_value", panelSettings._panel).text(crushFTP.methods.formatBytes(parseInt(bytesReceived)));
				$("#user_bytes_received", panelSettings._panel).text(bytesReceived);
			}
			if(userInfo.user.user_bytes_sent != undefined && userInfo.user.user_bytes_sent != "")
			{
				var bytesSent = userManager.methods.seperateValueAndInheritValue(userInfo.user.user_bytes_sent).value;
				if(bytesSent == "NaN" || isNaN(bytesSent))
					bytesSent = 0;
				$("#user_bytes_sent_value", panelSettings._panel).text(crushFTP.methods.formatBytes(parseInt(bytesSent)));
				$("#user_bytes_sent", panelSettings._panel).text(bytesSent);
			}
			if(userInfo.user.dir_depth == undefined)
			{
				var dir_depth = userManager.methods.seperateValueAndInheritValue(userInfo.user.dir_depth).value;
				if(!dir_depth || dir_depth == "NaN" || isNaN(dir_depth))
					dir_depth = 1;
				$("#dir_depth", panelSettings._panel).val(dir_depth);
			}
			// if(userInfo.user.dir_max_size == undefined)
			// {
			// 	var dir_max_size = userManager.methods.seperateValueAndInheritValue(userInfo.user.dir_max_size).value;
			// 	if(!dir_max_size || dir_max_size == "NaN" || isNaN(dir_max_size))
			// 		dir_max_size = 10485760;
			// 	$("#dir_max_size", panelSettings._panel).val(dir_max_size);
			// }
		}catch(ex){}
	}
	userManager.UI.panelsPostbindEvent(dataPanel, panel);
}

panelSettings.bindEvents = function()
{
	userManager.UI.togglePanels(panelSettings._panel);

	$(".checkboxArea>input[type='checkbox']", panelSettings._panel).change(function(){
		var curUserData = crushFTP.storage("currentUserInherited");
		if(!$(this).is(":checked"))
		{
			curUserData = {user: crushFTP.storage("currentUsersLowerLevelsData")};
			$(this).closest("fieldset").addClass("inheritSet");
		}
		else
			$(this).closest("fieldset").removeClass("inheritSet");
		if(!$(this).closest("fieldset").hasClass("notInheritable"))
			panelSettings.bindData(curUserData, false, $(this).closest("fieldset"));
	});

	$("#editCredits", panelSettings._panel).unbind().click(function(){
		var creditsData = $("#creditsData", panelSettings._panel);
		var upVal = creditsData.find("#user_bytes_received").text();
		var downVal = creditsData.find("#user_bytes_sent").text();
		jPrompt("Choose one :", "", "Stop Options", function(value){
			if(value)
			{
				function enterBytes(flag)
				{
					var type = flag ? "Uploaded " : "Downloaded ";
					var curVal = flag ? upVal : downVal;
					jPrompt("Please enter a Kilobytes amount (just a number, no label) :", curVal, type + "Bytes!", function(value){
						if(value)
						{
							value = parseInt(value);
							if(isNaN(value))value = 0;
							var trgr = false;
							if(flag)
							{
								trgr = creditsData.find("#user_bytes_received").text(value).attr("bytes", value*1024);
								$("#user_bytes_received_value", panelSettings._panel).text(crushFTP.methods.formatBytes(parseInt(value)));
							}
							else
							{
								trgr = creditsData.find("#user_bytes_sent").text(value).attr("bytes", value*1024);
								$("#user_bytes_sent_value", panelSettings._panel).text(crushFTP.methods.formatBytes(parseInt(value)));
							}
							panelSettings._panel.trigger("changed", [trgr]);
						}
					});
				}
				enterBytes(value == 0);
			}
		}, ["0|Edit Upload Bytes", "1|Edit Download Bytes"]);
		return false;
	});

	$("a.serverFilePickButton", panelSettings._panel).each(function(){
		$(this).unbind("click").click(function(){
			var curElem = $(this);
			curElem.crushFtpLocalFileBrowserPopup({
				type : curElem.attr("PickType") || 'dir',
				file_mode : curElem.attr("FileMode") || 'user',
				existingVal : $("#" + curElem.attr("rel"), panelSettings._panel).val(),
				callback : function(selectedPath){
					var trgr = $("#" + curElem.attr("rel"), panelSettings._panel).val(selectedPath).trigger("change");
					panelSettings._panel.trigger("changed", [trgr]);
				}
			});
			return false;
		});
	});

	$('.clearMaxTransferAmtUpload,.clearMaxTransferAmtDownload, .clearMaxTransferCountUpload,.clearMaxTransferCountDownload').unbind().click(function(){
		var days = [];
		for (var i = 1; i < 366; i++) {
			days.push(i.toString());
		}
		var type = $(this).is(".clearMaxTransferAmtUpload") || $(this).is(".clearMaxTransferCountUpload") ? "Upload" : "Download";
		var cmd = $(this).is(".clearMaxTransferAmtUpload") || $(this).is(".clearMaxTransferAmtDownload") ? 'clearMaxTransferAmounts' : 'clearMaxTransferAmounts';
		jPrompt("Please select days :", false, "Clear Transfer Amount - " + type, function(value){
		    if(value)
		    {
		    	crushFTP.UI.showLoadingIndicator(true);
		    	var _userName = $(document).data("userName");
				crushFTP.data.serverRequest({
					command: 'adminAction',
					action: cmd,
					serverGroup : $("#userConnectionGroups").val() || "MainUsers",
					user_name : _userName,
					duration : parseInt(value),
					transfer_type : type.toUpperCase()
				},
				function(data){
					crushFTP.UI.hideLoadingIndicator(true);
					if(data)
					{
						crushFTP.UI.growl("Success", "Transfer amount for "+type+" is cleared for last "+value+" day(s)", false, 3000)
					}
				});
		    }
		}, days);
		return false;
	});
}

panelSettings.generateXML = function()
{
	var xml = "";

	//General items
	panelSettings._panel.find("td.checkboxArea").not(".specialProperty").find("input:checked").each(function(){
		var formPanel = $(this).closest("td").next();
		xml += "\r\n" + userManager.data.buildXMLToSubmitForm(formPanel);
	});
	xml += "\r\n" + userManager.data.buildXMLToSubmitForm(panelSettings._panel.find("#CrushStaticVars"));

	return xml;
}
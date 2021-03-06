/*!
* CrushFTP Pickup User Popup
*
* http://crushFTP.com/
*
* Copyright 2012, CrushFTP
*
* Date: Tue, Mar 20 2012
*
* Author: Vipul Limbachiya
*
* http://vipullimbachiya.com
*/

(function($){
    $.crushFtpPickUserPopup = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
		var ajaxCallURL = "/WebInterface/function/";
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        // Add a reverse reference to the DOM object
        base.$el.data("crushFtpPickUserPopup", base);

        base.init = function(){
            base.options = $.extend({},$.crushFtpPickUserPopup.defaultOptions, options);
            //initialization code here
			base.initUserBrowse(base.options);
        };

		base.getServerGroups = function(callback)
		{
			if(!callback)return;
			var obj = {
				command: 'getServerItem',
				key : "server_settings/server_groups"
			};
			obj.c2f = crushFTP.getCrushAuth();
			$.ajax({
				type: "POST",
				url: ajaxCallURL,
				data: obj,
				success: function (data){
					if(data)
					{
						callback($.xml2json(data, true));
					}
					else
					{
						callback(false);
					}
				},
				error : function()
				{
					callback(false);
				}
			});
		};

		base.bindUserList = function(serverGroup)
		{
			var availableUsers = $("#availableUsersListingPanelPopup", base.usersBrowsePanelPopup).empty();
			var selectedUsers = $("#selectedUsersListingPanelPopup", base.usersBrowsePanelPopup).empty();
			var users = base.$el.val().split(",");
			for(var i=0;i<users.length;i++)
			{
				if(users[i] && users[i].length>0)
				{
					selectedUsers.append("<li class='ui-widget-content' userName='" + users[i].toUpperCase() + "'><span class='user'>" + users[i].toUpperCase() + "</span></li>");
				}
			}

			base.usersBrowsePanelPopup.block({
				message:  '<div><span style="float: left; margin-right: 0.3em;" class="ui-icon ui-icon-refresh"></span>Please wait..</div>',
				css: {
					border: 'none',
					padding: '15px',
					backgroundColor: '#000',
					'-webkit-border-radius': '10px',
					'-moz-border-radius': '10px',
					opacity: .5,
					color: '#fff',
					width: '100px',
					'text-align':'left'
				}
			});

			serverGroup = serverGroup || "MainUsers";
			var groupInfoObj = {
				command: 'getUserXML',
				serverGroup : serverGroup,
				xmlItem : "group"
			}
			groupInfoObj.c2f = crushFTP.getCrushAuth();
			$.ajax({
				type: "POST",
				url: ajaxCallURL,
				data: groupInfoObj,
				success: function (groupData){
					if(groupData)
					{
						var groups = $.xml2json(groupData);
						if(groups && groups.response_data && groups.response_data.result_item && groups.response_data.result_item.result_item)
						{
							groups = groups.response_data.result_item.result_item;
							for(var item in groups)
							{
								if(item && typeof groups[item] == "object" && typeof groups[item].name == "undefined")
								{
									var groupName = "..." + item.toUpperCase();
									if(availableUsers.find("li[userName='" + groupName + "']").length==0 && selectedUsers.find("li[userName='" + groupName + "']").length==0)
									{
										availableUsers.append("<li class='ui-widget-content' userName='" + groupName + "'><span class='user'>" + groupName + "</span></li>");
									}
								}
							}
						}
						$(groupData).find("item").each(function(){
							if($(this).attr("name"))
							{
								var groupName = "..." + $(this).attr("name").toUpperCase();
								if(availableUsers.find("li[userName='" + groupName + "']").length==0 && selectedUsers.find("li[userName='" + groupName + "']").length==0)
								{
									availableUsers.append("<li class='ui-widget-content' userName='" + groupName + "'><span class='user'>" + groupName + "</span></li>");
								}
							}
						});
					}
					var obj = {
						command: 'getUserList',
						serverGroup : serverGroup
					};
					obj.c2f = crushFTP.getCrushAuth();
					$.ajax({
						type: "POST",
						url: ajaxCallURL,
						data: obj,
						success: function (data){
							if(data)
							{
								var users = $.xml2json(data, true);
								if(users && users.response_data && users.response_data.length>0 && users.response_data[0].user_list && users.response_data[0].user_list.length>0)
								{
									var userList = users.response_data[0].user_list[0].user_list;
									if(userList && userList.length>0 && userList[0].user_list_subitem && userList[0].user_list_subitem.length>0)
									{
										userList = userList[0].user_list_subitem;
										if(userList && userList.length>0)
										{
											for(var i=0;i<userList.length;i++)
											{
												if(availableUsers.find("li[userName='" + userList[i].text.toUpperCase() + "']").length==0 && selectedUsers.find("li[userName='" + userList[i].text.toUpperCase() + "']").length==0)
												{
													availableUsers.append("<li class='ui-widget-content' userName='" + userList[i].text.toUpperCase() + "'><span class='user'>" + userList[i].text.toUpperCase() + "</span></li>");
												}
											}
										}
									}
								}
								base.usersBrowsePanelPopup.unblock();
							}
							else
							{
								jAlert($(data).text(), "Failure");
								base.usersBrowsePanelPopup.unblock();
							}
						}
					});
				}
			});
		};

        base.initUserBrowse = function(options)
		{
			var usersBrowsePanelPopup = $("#usersBrowsePanelPopup");
			var isInit = false;
			if(usersBrowsePanelPopup.length==0)
			{
				isInit = true;
				var htmlToAppend = "<div id=\"usersBrowsePanelPopup\">";
				htmlToAppend += "<div><select id='userGroupsForPopup' class='inputBox'></select><span class='spacer'></span><a style=\"float:right;margin:0px 7px 2px 0px;\" href=\"#\" class=\"button refreshItems\"><span style=\"display:inline-block;margin:0px 3px -3px -7px;\" class=\"pointer ui-icon ui-icon-refresh\"></span>Reload Users</a><div class=\"clear\"></div>";
				htmlToAppend += "<table style=\"width:100%;\">";
				htmlToAppend += "	<tr>";
				htmlToAppend += "		<td style=\"vertical-align: top;width:49%;\">";
				htmlToAppend += "			<div class='list-filter-panel'>Filter:<input class='list-filter' id='user-list-filter' type='text' /><span class='ui-icon  ui-icon-close clear-btn'></span></div>";
				htmlToAppend += "			<div id=\"availableUsers\" style=\"height:350px;\" class=\"ui-corner-all ui-widget ui-widget-content nobg sideScroll\">";
				htmlToAppend += "				<ol id=\"availableUsersListingPanelPopup\" class=\"LargeListBox nobg selectable multiple\">";
				htmlToAppend += "				</ol>";
				htmlToAppend += "			</div>";
				htmlToAppend += "		</td>";
				htmlToAppend += "		<td style=\"vertical-align: top;width:50px;\">";
				htmlToAppend += "		<a href=\"#\" class=\"button addItem\"><span style=\"display:inline-block;margin:0px 3px 0px 4px;\" class=\"pointer ui-icon ui-icon-arrowthick-1-e\"></span></a><div class=\"clear\"></div><br/>";
				htmlToAppend += "		<a href=\"#\" class=\"button removeItem\"><span style=\"display:inline-block;margin:0px 3px 0px 4px;\" class=\"pointer ui-icon ui-icon-arrowthick-1-w\"></span></a>";
				htmlToAppend += "		</td>";
				htmlToAppend += "		</td>";
				htmlToAppend += "		<td style=\"vertical-align: top;width:49%;\">";
				htmlToAppend += "			<div class='list-filter-panel'>Filter:<input class='list-filter' id='selected-user-list-filter' type='text' /><span class='ui-icon  ui-icon-close clear-btn'></span></div>";
				htmlToAppend += "			<div id=\"selectedUsers\" style=\"height:350px;\" class=\"ui-corner-all ui-widget-content nobg sideScroll\">";
				htmlToAppend += "				<ol id=\"selectedUsersListingPanelPopup\" class=\"LargeListBox nobg selectable multiple\">";
				htmlToAppend += "				</ol>";
				htmlToAppend += "			</div>";
				htmlToAppend += "		</td>";
				htmlToAppend += "	</tr>";
				htmlToAppend += "</table>";
				htmlToAppend += "</div>";
				$("body").append(htmlToAppend);
				usersBrowsePanelPopup = $("#usersBrowsePanelPopup").hide();
			}
			base.usersBrowsePanelPopup = usersBrowsePanelPopup;
			var userGroupsForPopup = $("#userGroupsForPopup", usersBrowsePanelPopup).form();
			usersBrowsePanelPopup.find(".note").remove();
			if(options.note)
			{
				usersBrowsePanelPopup.find("table").before("<div class='note' style='margin-top:10px;'>"+ options.note +"</div>");
			}
			if(isInit)
			{
				$("ol.selectable", usersBrowsePanelPopup).selectable();
				var availableUsers = $("#availableUsersListingPanelPopup", usersBrowsePanelPopup);
				var selectedUsers = $("#selectedUsersListingPanelPopup", usersBrowsePanelPopup);

				userGroupsForPopup.change(function(){
					base.bindUserList($(this).val());
				});

				$(usersBrowsePanelPopup).find(".button").button().click(function(){
					if($(this).hasClass("addItem"))
					{
						var selected = availableUsers.find("li.ui-selected");
						selectedUsers.append(selected);
					}
					else if($(this).hasClass("removeItem"))
					{
						var selected = selectedUsers.find("li.ui-selected");
						availableUsers.append(selected);
					}
					else if($(this).hasClass("refreshItems"))
					{
						base.bindUserList(userGroupsForPopup.val());
					}
					return false;
				});
				usersBrowsePanelPopup.dialog({
					autoOpen: false,
					title : "Select Users",
					height: 600,
					width: 500,
					minHeight : 600,
					minWidth : 500,
					modal: true,
					resizable: true,
					closeOnEscape: true,
					buttons: {
						"Cancel" : function(){
							$(this).dialog( "close" );
						},
						"OK": function() {
							var users = [];
							selectedUsers.find("li").each(function(){
								var userName = $(this).attr("userName");
								if(userName && userName.length>0 && !users.has(userName))
								{
									users.push(userName);
								}
							});
							base.$el.val(users.join(","));
							$(this).dialog( "close" );
						}
					},
					resize : function(evt, ui){
						var height = ui.size.height;
						usersBrowsePanelPopup.find(".sideScroll").height(height - 140);
					},
					beforeClose : function(){
						return true;
					},
					open : function(evt, ui){
						base.getServerGroups(function(data)
						{
							userGroupsForPopup .empty();
							var items = data;
							if(items.response_data && items.response_data[0].result_value && items.response_data[0].result_value[0].result_value_subitem)
							{
								var groups = items.response_data[0].result_value[0].result_value_subitem;
								for(var i=0;i<groups.length;i++)
								{
									if(groups[i] && groups[i].text)
									{
										userGroupsForPopup.append("<option value='"+groups[i].text+"'>"+groups[i].text+"</option>");
									}
								}
							}
							userGroupsForPopup.val("MainUsers");
							if(userGroupsForPopup.find("option").length==1)userGroupsForPopup.hide();
							else userGroupsForPopup.show();
							base.bindUserList();
							$(".list-filter", usersBrowsePanelPopup).val("").trigger('keyup');
						});
						var height = usersBrowsePanelPopup.parent().height();
						usersBrowsePanelPopup.find(".sideScroll").height(height - 140);
					}
				});

				$('.clear-btn').unbind().click(function(){
					$(this).closest('td').find("input").val("").trigger('keyup');
					return false;
				});

				$(".list-filter", usersBrowsePanelPopup).unbind("keyup").keyup(
					function (evt, data) {
						var evt = (evt) ? evt : ((event) ? event : null);
						var elem = $(this);
						if (evt.keyCode == 27)
						{
							elem.val("").trigger("keyup");
							evt.preventDefault();
							evt.stopEventPropagation();
							return false;
						}
						else if(evt.keyCode == 13)
						{
							if(elem.val()!="")
							{
								elem.val("").trigger("keyup");
							}
							evt.preventDefault();
							evt.stopEventPropagation();
							return false;
						}
						var phrase = $.trim(elem.val());
						if(phrase.length<1)
						{
							phrase = "";
						}
						if (elem.data("last_searched") && elem.data("last_searched") === phrase) {
							return false;
						}
						function startFilter()
						{
							if(phrase && phrase.length>1)
							{
								var parentElm = elem.closest('td').find("ol:first");
								parentElm.find("li").hide();
								var items = parentElm.find("span.user:Contains('"+phrase+"')").closest("li").show();
								if(!crushFTP.methods.isVisibleOnScreen($(items.get(0))))
								{
									var itemPos = $(items.get(0)).offset();
									if(itemPos)
									{
										parentElm.animate({
											scrollTop: itemPos.top - 120,
										}, 500);
									}
								}
							}
							else{
								var parentElm = elem.closest('td').find("ol:first");
								parentElm.find("li").show();
							}
							elem.data("last_searched", phrase);
						}
						if(data)
						{
							startFilter();
						}
						else
						{
							delay(function () {
					            startFilter();
					        }, 200);
						}
					});
				}
			usersBrowsePanelPopup.dialog("open");
		};

        // Run initializer
        base.init();
    };

    $.fn.crushFtpPickUserPopup = function(options){
        return this.each(function(){
            (new $.crushFtpPickUserPopup(this, options));
        });
    };
})(jQuery);
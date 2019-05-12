this.Urls=(function(){var Urls={};var self={url_patterns:{}};var _get_url=function(url_pattern){return function(){var _arguments,index,url,url_arg,url_args,_i,_len,_ref,_ref_list,match_ref,provided_keys,build_kwargs;_arguments=arguments;_ref_list=self.url_patterns[url_pattern];if(arguments.length==1&&typeof(arguments[0])=="object"){var provided_keys_list=Object.keys(arguments[0]);provided_keys={};for(_i=0;_i<provided_keys_list.length;_i++)
provided_keys[provided_keys_list[_i]]=1;match_ref=function(ref)
{var _i;if(ref[1].length!=provided_keys_list.length)
return false;for(_i=0;_i<ref[1].length&&ref[1][_i]in provided_keys;_i++);return _i==ref[1].length;}
build_kwargs=function(keys){return _arguments[0];}}else{match_ref=function(ref)
{return ref[1].length==_arguments.length;}
build_kwargs=function(keys){var kwargs={};for(var i=0;i<keys.length;i++){kwargs[keys[i]]=_arguments[i];}
return kwargs;}}
for(_i=0;_i<_ref_list.length&&!match_ref(_ref_list[_i]);_i++);if(_i==_ref_list.length)
return null;_ref=_ref_list[_i];url=_ref[0],url_args=build_kwargs(_ref[1]);for(url_arg in url_args){var url_arg_value=url_args[url_arg];if(url_arg_value===undefined||url_arg_value===null){url_arg_value='';}else{url_arg_value=url_arg_value.toString();}
url=url.replace("%("+url_arg+")s",url_arg_value);}
return'/'+url;};};var name,pattern,url,url_patterns,_i,_len,_ref;url_patterns=[['account_change_password',[['accounts/password/change/',[]]],],['account_confirm_email',[['accounts/confirm\u002Demail/%(key)s/',['key',]]],],['account_email',[['accounts/email/',[]]],],['account_email_verification_sent',[['accounts/confirm\u002Demail/',[]]],],['account_inactive',[['accounts/inactive/',[]]],],['account_login',[['accounts/login/',[]]],],['account_logout',[['accounts/logout/',[]]],],['account_reset_password',[['accounts/password/reset/',[]]],],['account_reset_password_done',[['accounts/password/reset/done/',[]]],],['account_reset_password_from_key',[['accounts/password/reset/key/%(uidb36)s\u002D%(key)s/',['uidb36','key',]]],],['account_reset_password_from_key_done',[['accounts/password/reset/key/done/',[]]],],['account_set_password',[['accounts/password/set/',[]]],],['account_signup',[['accounts/signup/',[]]],],['admin:account_emailaddress_add',[['admin/account/emailaddress/add/',[]]],],['admin:account_emailaddress_autocomplete',[['admin/account/emailaddress/autocomplete/',[]]],],['admin:account_emailaddress_change',[['admin/account/emailaddress/%(object_id)s/change/',['object_id',]]],],['admin:account_emailaddress_changelist',[['admin/account/emailaddress/',[]]],],['admin:account_emailaddress_delete',[['admin/account/emailaddress/%(object_id)s/delete/',['object_id',]]],],['admin:account_emailaddress_history',[['admin/account/emailaddress/%(object_id)s/history/',['object_id',]]],],['admin:app_list',[['admin/%(app_label)s/',['app_label',]]],],['admin:auth_group_add',[['admin/auth/group/add/',[]]],],['admin:auth_group_autocomplete',[['admin/auth/group/autocomplete/',[]]],],['admin:auth_group_change',[['admin/auth/group/%(object_id)s/change/',['object_id',]]],],['admin:auth_group_changelist',[['admin/auth/group/',[]]],],['admin:auth_group_delete',[['admin/auth/group/%(object_id)s/delete/',['object_id',]]],],['admin:auth_group_history',[['admin/auth/group/%(object_id)s/history/',['object_id',]]],],['admin:authtoken_token_add',[['admin/authtoken/token/add/',[]]],],['admin:authtoken_token_autocomplete',[['admin/authtoken/token/autocomplete/',[]]],],['admin:authtoken_token_change',[['admin/authtoken/token/%(object_id)s/change/',['object_id',]]],],['admin:authtoken_token_changelist',[['admin/authtoken/token/',[]]],],['admin:authtoken_token_delete',[['admin/authtoken/token/%(object_id)s/delete/',['object_id',]]],],['admin:authtoken_token_history',[['admin/authtoken/token/%(object_id)s/history/',['object_id',]]],],['admin:content_content_add',[['admin/content/content/add/',[]]],],['admin:content_content_autocomplete',[['admin/content/content/autocomplete/',[]]],],['admin:content_content_change',[['admin/content/content/%(object_id)s/change/',['object_id',]]],],['admin:content_content_changelist',[['admin/content/content/',[]]],],['admin:content_content_delete',[['admin/content/content/%(object_id)s/delete/',['object_id',]]],],['admin:content_content_history',[['admin/content/content/%(object_id)s/history/',['object_id',]]],],['admin:content_tag_add',[['admin/content/tag/add/',[]]],],['admin:content_tag_autocomplete',[['admin/content/tag/autocomplete/',[]]],],['admin:content_tag_change',[['admin/content/tag/%(object_id)s/change/',['object_id',]]],],['admin:content_tag_changelist',[['admin/content/tag/',[]]],],['admin:content_tag_delete',[['admin/content/tag/%(object_id)s/delete/',['object_id',]]],],['admin:content_tag_history',[['admin/content/tag/%(object_id)s/history/',['object_id',]]],],['admin:dynamic_preferences_globalpreferencemodel_add',[['admin/dynamic_preferences/globalpreferencemodel/add/',[]]],],['admin:dynamic_preferences_globalpreferencemodel_autocomplete',[['admin/dynamic_preferences/globalpreferencemodel/autocomplete/',[]]],],['admin:dynamic_preferences_globalpreferencemodel_change',[['admin/dynamic_preferences/globalpreferencemodel/%(object_id)s/change/',['object_id',]]],],['admin:dynamic_preferences_globalpreferencemodel_changelist',[['admin/dynamic_preferences/globalpreferencemodel/',[]]],],['admin:dynamic_preferences_globalpreferencemodel_delete',[['admin/dynamic_preferences/globalpreferencemodel/%(object_id)s/delete/',['object_id',]]],],['admin:dynamic_preferences_globalpreferencemodel_history',[['admin/dynamic_preferences/globalpreferencemodel/%(object_id)s/history/',['object_id',]]],],['admin:dynamic_preferences_users_userpreferencemodel_add',[['admin/dynamic_preferences_users/userpreferencemodel/add/',[]]],],['admin:dynamic_preferences_users_userpreferencemodel_autocomplete',[['admin/dynamic_preferences_users/userpreferencemodel/autocomplete/',[]]],],['admin:dynamic_preferences_users_userpreferencemodel_change',[['admin/dynamic_preferences_users/userpreferencemodel/%(object_id)s/change/',['object_id',]]],],['admin:dynamic_preferences_users_userpreferencemodel_changelist',[['admin/dynamic_preferences_users/userpreferencemodel/',[]]],],['admin:dynamic_preferences_users_userpreferencemodel_delete',[['admin/dynamic_preferences_users/userpreferencemodel/%(object_id)s/delete/',['object_id',]]],],['admin:dynamic_preferences_users_userpreferencemodel_history',[['admin/dynamic_preferences_users/userpreferencemodel/%(object_id)s/history/',['object_id',]]],],['admin:index',[['admin/',[]]],],['admin:jsi18n',[['admin/jsi18n/',[]]],],['admin:login',[['admin/login/',[]]],],['admin:logout',[['admin/logout/',[]]],],['admin:password_change',[['admin/password_change/',[]]],],['admin:password_change_done',[['admin/password_change/done/',[]]],],['admin:robots_rule_add',[['admin/robots/rule/add/',[]]],],['admin:robots_rule_autocomplete',[['admin/robots/rule/autocomplete/',[]]],],['admin:robots_rule_change',[['admin/robots/rule/%(object_id)s/change/',['object_id',]]],],['admin:robots_rule_changelist',[['admin/robots/rule/',[]]],],['admin:robots_rule_delete',[['admin/robots/rule/%(object_id)s/delete/',['object_id',]]],],['admin:robots_rule_history',[['admin/robots/rule/%(object_id)s/history/',['object_id',]]],],['admin:robots_url_add',[['admin/robots/url/add/',[]]],],['admin:robots_url_autocomplete',[['admin/robots/url/autocomplete/',[]]],],['admin:robots_url_change',[['admin/robots/url/%(object_id)s/change/',['object_id',]]],],['admin:robots_url_changelist',[['admin/robots/url/',[]]],],['admin:robots_url_delete',[['admin/robots/url/%(object_id)s/delete/',['object_id',]]],],['admin:robots_url_history',[['admin/robots/url/%(object_id)s/history/',['object_id',]]],],['admin:sites_site_add',[['admin/sites/site/add/',[]]],],['admin:sites_site_autocomplete',[['admin/sites/site/autocomplete/',[]]],],['admin:sites_site_change',[['admin/sites/site/%(object_id)s/change/',['object_id',]]],],['admin:sites_site_changelist',[['admin/sites/site/',[]]],],['admin:sites_site_delete',[['admin/sites/site/%(object_id)s/delete/',['object_id',]]],],['admin:sites_site_history',[['admin/sites/site/%(object_id)s/history/',['object_id',]]],],['admin:socialaccount_socialaccount_add',[['admin/socialaccount/socialaccount/add/',[]]],],['admin:socialaccount_socialaccount_autocomplete',[['admin/socialaccount/socialaccount/autocomplete/',[]]],],['admin:socialaccount_socialaccount_change',[['admin/socialaccount/socialaccount/%(object_id)s/change/',['object_id',]]],],['admin:socialaccount_socialaccount_changelist',[['admin/socialaccount/socialaccount/',[]]],],['admin:socialaccount_socialaccount_delete',[['admin/socialaccount/socialaccount/%(object_id)s/delete/',['object_id',]]],],['admin:socialaccount_socialaccount_history',[['admin/socialaccount/socialaccount/%(object_id)s/history/',['object_id',]]],],['admin:socialaccount_socialapp_add',[['admin/socialaccount/socialapp/add/',[]]],],['admin:socialaccount_socialapp_autocomplete',[['admin/socialaccount/socialapp/autocomplete/',[]]],],['admin:socialaccount_socialapp_change',[['admin/socialaccount/socialapp/%(object_id)s/change/',['object_id',]]],],['admin:socialaccount_socialapp_changelist',[['admin/socialaccount/socialapp/',[]]],],['admin:socialaccount_socialapp_delete',[['admin/socialaccount/socialapp/%(object_id)s/delete/',['object_id',]]],],['admin:socialaccount_socialapp_history',[['admin/socialaccount/socialapp/%(object_id)s/history/',['object_id',]]],],['admin:socialaccount_socialtoken_add',[['admin/socialaccount/socialtoken/add/',[]]],],['admin:socialaccount_socialtoken_autocomplete',[['admin/socialaccount/socialtoken/autocomplete/',[]]],],['admin:socialaccount_socialtoken_change',[['admin/socialaccount/socialtoken/%(object_id)s/change/',['object_id',]]],],['admin:socialaccount_socialtoken_changelist',[['admin/socialaccount/socialtoken/',[]]],],['admin:socialaccount_socialtoken_delete',[['admin/socialaccount/socialtoken/%(object_id)s/delete/',['object_id',]]],],['admin:socialaccount_socialtoken_history',[['admin/socialaccount/socialtoken/%(object_id)s/history/',['object_id',]]],],['admin:socialhome_policydocument_add',[['admin/socialhome/policydocument/add/',[]]],],['admin:socialhome_policydocument_autocomplete',[['admin/socialhome/policydocument/autocomplete/',[]]],],['admin:socialhome_policydocument_change',[['admin/socialhome/policydocument/%(object_id)s/change/',['object_id',]]],],['admin:socialhome_policydocument_changelist',[['admin/socialhome/policydocument/',[]]],],['admin:socialhome_policydocument_delete',[['admin/socialhome/policydocument/%(object_id)s/delete/',['object_id',]]],],['admin:socialhome_policydocument_history',[['admin/socialhome/policydocument/%(object_id)s/history/',['object_id',]]],],['admin:users_profile_add',[['admin/users/profile/add/',[]]],],['admin:users_profile_autocomplete',[['admin/users/profile/autocomplete/',[]]],],['admin:users_profile_change',[['admin/users/profile/%(object_id)s/change/',['object_id',]]],],['admin:users_profile_changelist',[['admin/users/profile/',[]]],],['admin:users_profile_delete',[['admin/users/profile/%(object_id)s/delete/',['object_id',]]],],['admin:users_profile_history',[['admin/users/profile/%(object_id)s/history/',['object_id',]]],],['admin:users_user_add',[['admin/users/user/add/',[]]],],['admin:users_user_autocomplete',[['admin/users/user/autocomplete/',[]]],],['admin:users_user_change',[['admin/users/user/%(object_id)s/change/',['object_id',]]],],['admin:users_user_changelist',[['admin/users/user/',[]]],],['admin:users_user_delete',[['admin/users/user/%(object_id)s/delete/',['object_id',]]],],['admin:users_user_history',[['admin/users/user/%(object_id)s/history/',['object_id',]]],],['admin:view_on_site',[['admin/r/%(content_type_id)s/%(object_id)s/',['content_type_id','object_id',]]],],['api\u002Ddocs',[['api/',[]]],],['api\u002Dimage\u002Dupload',[['api/image\u002Dupload/',[]]],],['api\u002Dstreams:followed',[['api/streams/followed/',[]]],],['api\u002Dstreams:limited',[['api/streams/limited/',[]]],],['api\u002Dstreams:local',[['api/streams/local/',[]]],],['api\u002Dstreams:profile\u002Dall',[['api/streams/profile\u002Dall/%(uuid)s/',['uuid',]]],],['api\u002Dstreams:profile\u002Dpinned',[['api/streams/profile\u002Dpinned/%(uuid)s/',['uuid',]]],],['api\u002Dstreams:public',[['api/streams/public/',[]]],],['api\u002Dstreams:tag',[['api/streams/tag/%(name)s/',['name',]]],],['api\u002Dstreams:tags',[['api/streams/tags/',[]]],],['api\u002Dtoken\u002Dauth',[['api\u002Dtoken\u002Dauth/',[]]],],['api:api\u002Droot',[['api/.%(format)s',['format',],],['api/',[]]],],['api:content\u002Ddetail',[['api/content/%(pk)s.%(format)s',['pk','format',],],['api/content/%(pk)s/',['pk',]]],],['api:content\u002Dlist',[['api/content.%(format)s',['format',],],['api/content/',[]]],],['api:content\u002Dreplies',[['api/content/%(pk)s/replies.%(format)s',['pk','format',],],['api/content/%(pk)s/replies/',['pk',]]],],['api:content\u002Dshare',[['api/content/%(pk)s/share.%(format)s',['pk','format',],],['api/content/%(pk)s/share/',['pk',]]],],['api:content\u002Dshares',[['api/content/%(pk)s/shares.%(format)s',['pk','format',],],['api/content/%(pk)s/shares/',['pk',]]],],['api:profile\u002Dcreate\u002Dexport',[['api/profiles/create_export.%(format)s',['format',],],['api/profiles/create_export/',[]]],],['api:profile\u002Ddetail',[['api/profiles/%(uuid)s.%(format)s',['uuid','format',],],['api/profiles/%(uuid)s/',['uuid',]]],],['api:profile\u002Dfollow',[['api/profiles/%(uuid)s/follow.%(format)s',['uuid','format',],],['api/profiles/%(uuid)s/follow/',['uuid',]]],],['api:profile\u002Dretrieve\u002Dexport',[['api/profiles/retrieve_export.%(format)s',['format',],],['api/profiles/retrieve_export/',[]]],],['api:profile\u002Dunfollow',[['api/profiles/%(uuid)s/unfollow.%(format)s',['uuid','format',],],['api/profiles/%(uuid)s/unfollow/',['uuid',]]],],['api:tag\u002Ddetail',[['api/tags/%(uuid)s.%(format)s',['uuid','format',],],['api/tags/%(uuid)s/',['uuid',]]],],['api:tag\u002Dfollow',[['api/tags/%(uuid)s/follow.%(format)s',['uuid','format',],],['api/tags/%(uuid)s/follow/',['uuid',]]],],['api:tag\u002Dlist',[['api/tags.%(format)s',['format',],],['api/tags/',[]]],],['api:tag\u002Dunfollow',[['api/tags/%(uuid)s/unfollow.%(format)s',['uuid','format',],],['api/tags/%(uuid)s/unfollow/',['uuid',]]],],['api:user\u002Ddetail',[['api/users/%(pk)s.%(format)s',['pk','format',],],['api/users/%(pk)s/',['pk',]]],],['bookmarklet',[['bookmarklet/',[]]],],['content:bookmarklet',[['content/bookmarklet/',[]]],],['content:create',[['content/create/',[]]],],['content:delete',[['content/%(pk)s/~delete/',['pk',]]],],['content:reply',[['content/%(pk)s/~reply/',['pk',]]],],['content:update',[['content/%(pk)s/~edit/',['pk',]]],],['content:view',[['content/%(pk)s/',['pk',]]],],['content:view\u002Dby\u002Dslug',[['content/%(pk)s/%(slug)s/',['pk','slug',]]],],['content:view\u002Dby\u002Duuid',[['content/%(uuid)s/',['uuid',]]],],['djdt:debug\u002Duserpanel\u002Dlogin',[['__debug__/users/login/%(pk)s',['pk',]]],],['djdt:debug\u002Duserpanel\u002Dlogin\u002Dform',[['__debug__/users/login/',[]]],],['djdt:debug\u002Duserpanel\u002Dlogout',[['__debug__/users/logout',[]]],],['djdt:render_panel',[['__debug__/render_panel/',[]]],],['djdt:sql_explain',[['__debug__/sql_explain/',[]]],],['djdt:sql_profile',[['__debug__/sql_profile/',[]]],],['djdt:sql_select',[['__debug__/sql_select/',[]]],],['djdt:template_source',[['__debug__/template_source/',[]]],],['dynamic_preferences.global',[['account/global/',[]]],],['dynamic_preferences.global.section',[['account/global/%(section)s',['section',]]],],['dynamic_preferences.user',[['account/user/',[]]],],['dynamic_preferences.user.section',[['account/user/%(section)s',['section',]]],],['federate:content\u002Dfetch',[['fetch/%(objtype)s/%(guid)s',['objtype','guid',]]],],['federate:content\u002Dxml',[['p/%(uuid)s.xml',['uuid',]]],],['federate:hcard',[['hcard/users/%(uuid)s',['uuid',]]],],['federate:host\u002Dmeta',[['.well\u002Dknown/host\u002Dmeta',[]]],],['federate:nodeinfo',[['nodeinfo/1.0',[]]],],['federate:nodeinfo\u002Dwellknown',[['.well\u002Dknown/nodeinfo',[]]],],['federate:nodeinfo2',[['.well\u002Dknown/x\u002Dnodeinfo2',[]]],],['federate:receive\u002Dpublic',[['receive/public/',[]]],],['federate:receive\u002Duser',[['receive/users/%(uuid)s/',['uuid',]]],],['federate:rfc7033\u002Dwebfinger',[['.well\u002Dknown/webfinger',[]]],],['federate:social\u002Drelay',[['.well\u002Dknown/x\u002Dsocial\u002Drelay',[]]],],['federate:webfinger',[['webfinger',[]]],],['home',[['',[]]],],['javascript\u002Dcatalog',[['jsi18n/',[]]],],['js_reverse',[['jsreverse/',[]]],],['markdownx_markdownify',[['markdownx/markdownify/',[]]],],['markdownx_upload',[['markdownx/upload/',[],],['markdownx/upload/',[]]],],['privacy\u002Dpolicy',[['privacy/',[]]],],['rest_framework:login',[['api\u002Dauth/login/',[]]],],['rest_framework:logout',[['api\u002Dauth/logout/',[]]],],['robots_rule_list',[['robots.txt',[]]],],['rq_actions',[['django\u002Drq/queues/actions/%(queue_index)s/',['queue_index',]]],],['rq_clear',[['django\u002Drq/queues/%(queue_index)s/empty/',['queue_index',]]],],['rq_deferred_jobs',[['django\u002Drq/queues/%(queue_index)s/deferred/',['queue_index',]]],],['rq_delete_job',[['django\u002Drq/queues/%(queue_index)s/%(job_id)s/delete/',['queue_index','job_id',]]],],['rq_finished_jobs',[['django\u002Drq/queues/%(queue_index)s/finished/',['queue_index',]]],],['rq_home',[['django\u002Drq/',[]]],],['rq_home_json',[['django\u002Drq/stats.json/',[],],['django\u002Drq/stats.json/%(token)s',['token',]]],],['rq_job_detail',[['django\u002Drq/queues/%(queue_index)s/%(job_id)s/',['queue_index','job_id',]]],],['rq_jobs',[['django\u002Drq/queues/%(queue_index)s/',['queue_index',]]],],['rq_requeue_all',[['django\u002Drq/queues/%(queue_index)s/requeue\u002Dall/',['queue_index',]]],],['rq_requeue_job',[['django\u002Drq/queues/%(queue_index)s/%(job_id)s/requeue/',['queue_index','job_id',]]],],['rq_started_jobs',[['django\u002Drq/queues/%(queue_index)s/started/',['queue_index',]]],],['rq_worker_details',[['django\u002Drq/workers/%(queue_index)s/%(key)s/',['queue_index','key',]]],],['rq_workers',[['django\u002Drq/workers/%(queue_index)s/',['queue_index',]]],],['search:global',[['search/',[]]],],['socialaccount_connections',[['accounts/social/connections/',[]]],],['socialaccount_login_cancelled',[['accounts/social/login/cancelled/',[]]],],['socialaccount_login_error',[['accounts/social/login/error/',[]]],],['socialaccount_signup',[['accounts/social/signup/',[]]],],['streams:followed',[['streams/followed/',[]]],],['streams:limited',[['streams/limited/',[]]],],['streams:local',[['streams/local/',[]]],],['streams:public',[['streams/public/',[]]],],['streams:tag',[['streams/tag/%(name)s/',['name',]]],],['streams:tags',[['streams/tags/',[]]],],['terms\u002Dof\u002Dservice',[['terms/',[]]],],['users:all\u002Dcontent',[['u/%(username)s/all/',['username',]]],],['users:api\u002Dtoken',[['u/~api\u002Dtoken/',[]]],],['users:contacts\u002Dfollowed',[['p/~followed/',[]]],],['users:contacts\u002Dfollowers',[['p/~followers/',[]]],],['users:delete\u002Daccount',[['delete\u002Daccount/',[]]],],['users:detail',[['u/%(username)s/',['username',]]],],['users:picture\u002Dupdate',[['u/~update\u002Dpicture/',[]]],],['users:profile\u002Dall\u002Dcontent',[['p/%(uuid)s/all/',['uuid',]]],],['users:profile\u002Ddetail',[['p/%(uuid)s/',['uuid',]]],],['users:profile\u002Dorganize',[['p/~organize/',[]]],],['users:profile\u002Dupdate',[['p/~update/',[]]]]];self.url_patterns={};for(_i=0,_len=url_patterns.length;_i<_len;_i++){_ref=url_patterns[_i],name=_ref[0],pattern=_ref[1];self.url_patterns[name]=pattern;url=_get_url(name);Urls[name]=url;Urls[name.replace(/-/g,'_')]=url;}
return Urls;})();
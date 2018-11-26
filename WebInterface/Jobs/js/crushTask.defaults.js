var crushTask = {};
crushTask.defaultValues = {
    as2Action: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "As2",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "As2",
        key_path: "",
        as2EncryptKeyPassword: "",
        as2EncryptKeystorePath: "",
        as2EncryptKeystorePassword: "",
        as2EncryptKeystoreFormat: "JKS",
        as2EncryptKeyAlias: "",
        as2EncryptType: "none",
        as2SignKeyAlias: "",
        as2SignKeyPassword: "",
        as2SignKeystoreFormat: "JKS",
        as2SignKeystorePassword: "",
        as2SignType: "none",
        as2SignKeystorePath: "",
        as2RecipientUrl: "",
        as2ToPartner: "",
        as2AsyncMdn: "false",
        as2Compress: "false",
        as2FromPartner: "",
        as2Subject: "",
        as2From: "",
        as2ResponseUrl: "",
        mdnWaitSeconds: "",
        interval: ""
    },
    copyAction: {
        addAfterCopy: "false",
        changed: "2",
        changedTimeout: "60",
        destPath: "{path}{stem}{ext}",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Copy",
        preserveModifiedDate: "true",
        retry: "0",
        retry_delay: "1",
        power_of_two_delay : false,
        sourceFilter: "*",
        ssh_private_key: "",
        ssh_private_key_pass: "",
        ssh_two_factor: "false",
        timeout: "600000",
        ascii: "false",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Copy",
        threads: "1",
        pasv: "true",
        resume: "false",
        resume_failure: "false",
        ascii_convert: "none",
        simple: "false",
        keystore: "",
        keystore_pass: "",
        key_pass: "",
        copyUnique: "false",
        secure: "false",
        send_compressed: "false",
        receive_compressed: "false",
        add_cache : "false",
        process_first : "false",
        block_overwrite_pattern : "",
        append : "false",
        validate_size : "false"
    },
    deleteAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Delete",
        destPath : "{url}",
        retry: "10",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Delete"
    },
    emailAction: {
        attachFiles: "false",
        emailBcc: "",
        emailBody: "",
        emailCc: "",
        emailFrom: "",
        emailSubject: "",
        emailTo: "",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Email",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Email",
        loop_items : "false",
        loop_delay : "1",
        retry : "1",
        delay : "1",
        load_mime_types : "false"
    },
    executeAction: {
        argument: "",
        command: "",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Execute",
        separator: ";",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        workingDirectory: "{real_path}",
        type: "Execute",
        environment_vars: "",
        ignore_error: "false"
    },
    excludeAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Exclude",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Exclude"
    },
    findAction: {
        absolute_paths: "true",
        changing: "true",
        changingAll: "true",
        days: "0",
        depth: "1",
        cache_name: "",
        fail_jump: "",
        fail_no_files: "true",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        findFilter: "*",
        findUrl: "{path}",
        hours: "0",
        minutes: "0",
        time_offset: "0",
        multiThreaded: "false",
        name: "Find",
        retry_delay: "0",
        retry_minutes: "0",
        sourceFilter: "*",
        ssh_private_key: "",
        ssh_private_key_pass: "",
        ssh_two_factor: "false",
        timeout: "600000",
        success_log: "false",
        ignore_subfolder_cwd_errors : "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Find",
        modified_comparison: "new",
        find_deleted: "false",
        pasv: "true",
        secure: "false",
        ignore_folders: "false",
        max_items: "",
        config_cwd_list: "false",
        no_stat: "false",
        add_cache : "false"
    },
    findcacheAction: {
        fail_jump: "",
        fail_no_files: "false",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        cache_folder: "",
        cache_mode: "read",
        cache_name: "CacheItem",
        multiThreaded: "false",
        name: "Find",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "FindCache"
    },
    jumpAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        jump_job: "",
        jump_task: "",
        multiThreaded: "false",
        name: "Jump",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        continueJump: "true",
        variable2: "",
        variable1: "",
        variableCondition: "contains",
        type: "Jump",
        if_else_scenario : "true"
    },
    httpAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        destUrl: "http://domain.com/?file={path}",
        recent: "false",
        httpMethod: "POST",
        name: "Http",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        retries: "0",
        maxFiles: "100",
        maxFilesSeconds: "1",
        delay: "1000",
        http_timeout: "30",
        post: "",
        type: "Http",
        username: "",
        password: ""
    },
    tunnelAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        destUrl: "http://domain.com/",
        name: "Tunnel",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Tunnel",
        tunnel_action: "Start",
        tunnel_name: "",
        username: "",
        password: ""
    },
    makedirectoryAction: {
        destPath: "{path}new_folder",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "MakeDirectory",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "MakeDirectory",
        pasv: "true",
        secure: "false",
        ssh_private_key: "",
        ssh_private_key_pass: "",
        ssh_two_factor: "false",
        timeout: "600000",
        keystore: "",
        keystore_pass: "",
        key_pass: "",
        ascii: "false",
        simple: "false"
    },
    moveAction: {
        destPath: "{path}{stem}{ext}",
        changed: "2",
        changedTimeout: "60",
        retry: "0",
        retry_delay: "1",
        power_of_two_delay : false,
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        threads: "1",
        name: "Move",
        preserveModifiedDate: "true",
        sourceFilter: "*",
        ssh_private_key: "",
        ssh_private_key_pass: "",
        ssh_two_factor: "false",
        timeout: "600000",
        ascii: "false",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Move",
        pasv: "true",
        secure: "false",
        send_compressed: "false",
        receive_compressed: "false",
        keystore: "",
        keystore_pass: "",
        key_pass: "",
        copyUnique: "false",
        resume: "false",
        resume_failure: "false",
        ascii_convert: "none",
        simple: "false",
        add_cache : "false",
        process_first : "false",
        block_overwrite_pattern : "",
        append : "false",
        validate_size : "false"
    },
    pgpAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Pgp",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Pgp",
        key_path: "",
        ascii_armor: "false",
        key_password: "",
        encryption_method: "Encrypt",
        delete_original: "false"
    },
    popimapAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "PopImap",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "PopImap",
        destPath: "",
        findUrl: "",
        mail_attachments: "true",
        mail_body: "false",
        mail_delete: "false",
        mail_file_filter: "*",
        mail_from_filter: "*",
        mail_to_filter: "*",
        mail_host: "imap.gmail.com",
        mail_name: "msg_{mail_index}.{mail_type}",
        mail_pass: "",
        mail_path: "",
        mail_port: "993",
        mail_protocol: "imaps",
        mail_read: "true",
        mail_size: "0",
        mail_subject_filter: "*",
        mail_unread: "true",
        mail_user: "",
        mail_inbox: "Inbox",
        start_tls : "false",
        recurse_messages : "true",
        timeout: "600000"
    },
    previewAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Preview",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Preview"
    },
    renameAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Rename",
        newName: "{stem}{ext}",
        retry: "10",
        skipSubitems: "true",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Rename"
    },
    sortAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Sort",
        sort_variable: "name",
        sort_direction: "ascending",
        sort_type: "text",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Sort"
    },
    userslistAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "UserVariable",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "UsersList",
        destPath: "",
        excludeUserFilters: "default,TempAccount,anonymous",
        findUrl: "",
        findUserFilters: "*",
        taskToCall: "",
        userConnectionGroup: "MainUsers"
    },
    uservariableAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "UserVariable",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "UserVariable",
        varName: "myVariable",
        varValue: "10",
        use_first : false,
        remove_item : false
    },
    unzipAction: {
        delete_zip: "false",
        external_zip: "false",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        internal_zip: "true",
        multiThreaded: "false",
        name: "Unzip",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Unzip",
        unzip_in_folder: "false",
        destPath: "",
        retry: "0",
        retry_delay: "1",
        power_of_two_delay : false
    },
    waitAction: {
        delay: "1",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Wait",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Wait",
        variable2: "",
        variable1: "",
        variableCondition: "contains",
        wait_time_unit: "seconds",
        waitThreads: "false",
        conditional_enabled: "false"
    },
    writefileAction: {
        afterContent: "",
        beforeContent: "<LINE><item> <title>{name}</title> <description>{path}</description> <link>{url}</link> </item>{r}{n}</LINE>",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        fileContents: "<?xml version=\"1.0\" ?>\r\n<rss version=\"2.0\">\r\n<channel>\r\n<title>New Files</title>\r\n<description>Incoming files...</description>\r\n<link>http : //www.crushftp.com</link>\r\n</channel>\r\n</rss>",
        filePath: "",
        findAfter: "",
        findBefore: "</channel>",
        findText: "",
        replaceText: "",
        multiThreaded: "false",
        name: "WriteFile",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "WriteFile",
        overwrite: "false",
        loop_items: "false"
    },
    zipAction: {
        external_zip: "false",
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        filePath: "/archives/newArchive.zip",
        internal_zip: "true",
        multiThreaded: "false",
        name: "Zip",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Zip",
        exclude_zip_file : "false"
    },
    sqlAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        db_driver: "org.gjt.mm.mysql.Driver",
        db_driver_file: "./mysql-connector-java-5.0.4-bin.jar",
        db_url: "jdbc:mysql://127.0.0.1:3306/crushftp?autoReconnect=true",
        db_user: "CrushSQL",
        db_pass: "",
        db_query: "select * from users\nwhere userName=?\nand userPass=?\nand (expireDate is null or expireDate > ?)",
        name: "SQL",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "SQL",
        rollback: "false"
    },
    fileparserAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        column_headers: "true",
        delimiter: "comma",
        column_override: "",
        name: "FileParser",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {tas,kName}{r}{n}",
        text_encoding : "UTF8",
        type: "FileParser",
        read_as_text_blob: "false",
        read_as_properties : "false",
        read_as_none : "true",
        max_count : "0"
    },
    customAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Custom",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Custom"
    },
    breakpointAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        name: "BreakPoint",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "BreakPoint"
    },
    compressAction : {
        fail_jump : "",
        failure_log : "false",
        failure_log_file : "./failure.log",
        failure_log_line : "FAIL : {taskName}{r}{n}",
        name : "Compress",
        sourceFilter : "*",
        success_log : "false",
        success_log_file : "./success.log",
        success_log_line : "OK : {taskName}{r}{n}",
        type : "Compress"
    },
    decompressAction : {
        fail_jump : "",
        failure_log : "false",
        failure_log_file : "./failure.log",
        failure_log_line : "FAIL : {taskName}{r}{n}",
        name : "Decompress",
        sourceFilter : "*",
        success_log : "false",
        success_log_file : "./success.log",
        success_log_line : "OK : {taskName}{r}{n}",
        type : "Decompress",
        retry: "0",
        retry_delay : "1",
        power_of_two_delay : false
    },
    killAction : {
        fail_jump : "",
        failure_log : "false",
        failure_log_file : "./failure.log",
        failure_log_line : "FAIL : {taskName}{r}{n}",
        name : "Kill",
        sourceFilter : "*",
        success_log : "false",
        success_log_file : "./success.log",
        success_log_line : "OK : {taskName}{r}{n}",
        type : "Kill"
    },
    linkAction : {
        fail_jump : "",
        failure_log : "false",
        failure_log_file : "./failure.log",
        failure_log_line : "FAIL : {taskName}{r}{n}",
        name : "Link",
        link : "",
        sourceFilter : "*",
        success_log : "false",
        success_log_file : "./success.log",
        success_log_line : "OK : {taskName}{r}{n}",
        type : "Link"
    },
    javaAction: {
        fail_jump: "",
        failure_log: "false",
        failure_log_file: "./failure.log",
        failure_log_line: "FAIL : {taskName}{r}{n}",
        multiThreaded: "false",
        name: "Java",
        sourceFilter: "*",
        success_log: "false",
        success_log_file: "./success.log",
        success_log_line: "OK : {taskName}{r}{n}",
        type: "Java",
        full_class : ""
    }
};
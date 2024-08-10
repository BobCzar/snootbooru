<ul>
    <li><%- ctx.postCount %> posts</li><span class='sep'>
    </span><li><%= ctx.makeFileSize(ctx.diskUsage) %></li><span class='sep'>
    </span><li>Build <a class='version' href='https://github.com/bobczar/snootbooru/commits/main'><%- ctx.version %></a><%- ctx.isDevelopmentMode ? " (DEV MODE)" : "" %> from <%= ctx.makeRelativeTime(ctx.buildDate) %></li><span class='sep'>
    </span><% if (ctx.canListSnapshots) { %><li><a href='<%- ctx.formatClientLink('history') %>'>History</a></li><span class='sep'>
    </span><% } %><li>Support/Donate to us <a href='https://ko-fi.com/snootbooru'>here</a></li><span class='sep'>
    </span><li><a href='https://mods.snootbooru.com'>Snoot and Wani mods</a></li><span class='sep'>
    </span><li><a href = 'mailto:snootbooru@gmail.com'>Contact us</a></li>
</ul>

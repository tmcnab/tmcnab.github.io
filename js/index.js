$('article').each(function (i, item)
{
    var uri = $(this).data('url');

    var components = uri.split('/');

    console.log(components);

    var pubdate = components[1] + '-' + components[2] + '-' + components[3];
    var title = components[4].replace(/\_/gi, ' ').replace('.html', '');


    //var title = $(this).data('title');
    //var pubdate = $(this).data('date');
    
    var permalink = '#' + uri.replace('blog/', '').replace('.html', '');

    // Set id of article
    $(this).attr('id', permalink.replace('#',''));

    var header = $('<header>');
    header.append($('<h3>').text(title));

    var subheader = $('<span>').addClass('subheader');
    subheader.append
    (
        $('<a>')
        .attr({
            href: permalink,
            rel: 'tooltip',
            title: 'Permalink'
        }).html($('<i>').addClass('icon-link'))
    );
    subheader.append($('<time>').attr('pubdate', 'pubdate').text("Posted on " + pubdate));
    header.append(subheader);

    $('#blog_list').append($('<li>').append(
        $('<a>').attr('href', permalink).text(title)
    ));

    
    $(this).load($(this).data('url'), function () {
        $(this).prepend(header);
    });
});
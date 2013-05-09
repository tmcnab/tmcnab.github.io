$('article').each(function (i, item)
{
    var title = $(this).data('title');
    var pubdate = $(this).data('date');
    var uri = $(this).data('url');
    var permalink = '#' + uri.replace('blog/', '').replace('.html', '');

    // Set id of article
    $(this).attr('id', permalink.replace('#',''));

    var header = $('<header>');
    header.append($('<h3>').text(title));

    var subheader = $('<span>');
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
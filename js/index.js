var month_names = new Array();
month_names[month_names.length] = "January";
month_names[month_names.length] = "February";
month_names[month_names.length] = "March";
month_names[month_names.length] = "April";
month_names[month_names.length] = "May";
month_names[month_names.length] = "June";
month_names[month_names.length] = "July";
month_names[month_names.length] = "August";
month_names[month_names.length] = "September";
month_names[month_names.length] = "October";
month_names[month_names.length] = "November";
month_names[month_names.length] = "December";

var day_names = new Array();
day_names[day_names.length] = "Sunday";
day_names[day_names.length] = "Monday";
day_names[day_names.length] = "Tuesday";
day_names[day_names.length] = "Wednesday";
day_names[day_names.length] = "Thursday";
day_names[day_names.length] = "Friday";
day_names[day_names.length] = "Saturday";


function ordinal_suffix_of(i) {
    var j = i % 10;
    if (j == 1 && i != 11) {
        return i + "st";
    }
    if (j == 2 && i != 12) {
        return i + "nd";
    }
    if (j == 3 && i != 13) {
        return i + "rd";
    }
    return i + "th";
}

$('article').each(function (i, item)
{
    var uri = $(this).data('url');
    var components = uri.split('/');
    var pubdate = components[1] + '-' + components[2] + '-' + components[3];
    var title = components[4].replace(/\_/gi, ' ').replace('.html', '');
    var permalink = '#' + uri.replace('blog/', '').replace('.html', '');

    // Set id of article
    $(this).attr('id', permalink.replace('#',''));

    // Create article content + header
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

    var pubdateAsDate = new Date(pubdate);
    var pubdateAsText = day_names[pubdateAsDate.getDay()] + ' ' +
        month_names[pubdateAsDate.getMonth()] + ' ' +
        ordinal_suffix_of(pubdateAsDate.getDate()) + ', ' +
        pubdateAsDate.getFullYear();

    subheader.append($('<time>').attr('pubdate', 'pubdate').html(pubdateAsText));
    header.append(subheader);
    $('#blog_list').append($('<li>').append(
        $('<a>').attr('href', permalink).text(title)
    ));

    // Load content and prepend header
    $(this).load($(this).data('url'), function () {
        $(this).prepend(header);
    });
});
$(document).foundation()

/* Wordcloud */
all_list = [{text: 'alchemy', size:  5}, {text: 'data science', size:  10}, {text: 'statistics', size:  12}, {text: 'hermetism', size:  4}, {text: 'tea', size:  2}, {text: 'chopp', size:  2}, {text: 'factorio', size:  3}, {text: 'python', size:  14}, {text: 'westworld', size:  8}, {text: 'marvel', size:  8}, {text: 'c', size:  10}, {text: 'data visualization', size:  12}, {text: 'web development', size:  6}];
personal_list = [{text: 'alchemy', size:  5}, {text: 'statistics', size:  12}, {text: 'hermetism', size:  4}, {text: 'tea', size:  2}, {text: 'chopp', size:  2}, {text: 'factorio', size:  3}, {text: 'westworld', size:  8}, {text: 'marvel', size:  8}, ];
professional_list = [{text: 'data science', size:  10}, {text: 'statistics', size:  12}, {text: 'python', size:  14}, {text: 'c', size:  10}, {text: 'data visualization', size:  12}, {text: 'web development', size:  6}, ];


function create_word_cloud(list) {
    d3.wordcloud()
    .size([800, 400])
    .scale('sqrt')
    .selector('#wordcloud_canvas')
    .words(list)
    .font('Montserrat')
    .spiral('rectangular')
    .start();
}

$(document).ready(function() {
	create_word_cloud(all_list);
});
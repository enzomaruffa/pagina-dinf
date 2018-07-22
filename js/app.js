$(document).foundation()

/* Wordcloud */
all_list = [{text : 'alchemy', weight :  5}, {text : 'data science', weight :  10}, {text : 'statistics', weight :  12}, {text : 'hermetism', weight :  4}, {text : 'tea', weight :  2}, {text : 'chopp', weight :  2}, {text : 'factorio', weight :  3}, {text : 'python', weight :  14}, {text : 'westworld', weight :  8}, {text : 'marvel', weight :  8}, {text : 'c', weight :  10}, {text : 'data visualization', weight :  12}, {text : 'web development', weight :  6}]
personal_list = [{text : 'alchemy', weight :  5}, {text : 'statistics', weight :  12}, {text : 'hermetism', weight :  4}, {text : 'tea', weight :  2}, {text : 'chopp', weight :  2}, {text : 'factorio', weight :  3}, {text : 'westworld', weight :  8}, {text : 'marvel', weight :  8}]
professional_list = [{text : 'data science', weight :  10}, {text : 'statistics', weight :  12}, {text : 'python', weight :  14}, {text : 'c', weight :  10}, {text : 'data visualization', weight :  12}, {text : 'web development', weight :  6}]

list_maps = [{name : 'all_list', list : all_list}, {name : 'personal_list', list : personal_list}, {name : 'professional_list', list : professional_list}]

function create_word_cloud(list) {
	console.log(list)
	max_weight = Math.max.apply(Math, list.map(function(o) { return o.weight; }))

	width = $('#bio')[0].offsetWidth;

	$('#wordcloud_canvas').jQCloud(list, {
	  width: width,
	  height: 350,
	  steps: max_weight,
	  autoResize : true,
	  delay : 500
	});
}

function update_word_cloud(list) {
	$('#wordcloud_canvas').empty();
	create_word_cloud(list);
}

/* Define wordcloud buttons active feature */
$('.wordcloud_button').click(function() {
	$('.wordcloud_button').removeClass('wordcloud_button--active');
	$(this).addClass('wordcloud_button--active');
	list_name = $(this).attr('list_name');
	list_obj = list_maps.find(function(o) { if(o.name == list_name) { return o; } })
	update_word_cloud(list_obj.list)
});

/* Generate skills area*/ 
dev_list = [' dev', [' programming', ' webdev', ' devops'], [['python', ' 70', ' programming'], ['c', ' 80', ' programming'], ['javascript', ' 50', ' webdev'], ['css', ' 50', ' webdev'], ['java', ' 75', ' programming'], ['git', ' 60', ' devops']]]
pessoa_list = [' pessoa', [' equipe', ' pessoal'], [['liderança', ' 90', ' equipe'], ['teamwork', ' 90', ' equipe'], ['pitching', ' 85', ' pessoal']]]


categories_list = [dev_list, pessoa_list];

var min = 25
var max = 60

var colors = ['#5B2C6F', '#148F77', '#F4D03F', '#A93226', '#2874A6', '#C39BD3', '#186A3B']

function pick_color(id) {
    return colors[id];       
}

for (list of categories_list) {
	category_name = list[0].trim();
	category_subcategories = list[1];
	category_elements = list[2];

	skills_grid = $("#skills-grid")

	crel(skills_grid[0],
	    crel('div', {'class' : "cell small-12 medium-12 large-12"},
	    	crel('div', {'class' : "callout skill-category"},
	    		crel('h2', {'class' : "category-title text-center"}, category_name),
	    		crel('div', {'class' : "grid-x align-center", 'id' : category_name + "_skill_grid"})
	    	)
	    )
	)

	category_grid = $("#" + category_name + "_skill_grid")

	for (skill of category_elements) {
		skill_color = pick_color(category_subcategories.indexOf(skill[2]))
		crel(category_grid[0],
		    crel('div', {'class' : "skill-item text-center cell small-6 medium-6 large-4"},
		    	crel('span', {'class' : "fa-stack fa-5x"},
		    		crel('i', {'class' : "fas fa-star fa-stack-1x", "style" : "background: -webkit-linear-gradient(top, #222 0%, #222 " + (((100-parseInt(skill[1]))/100*max)+min) + "%, " + skill_color + " " + (((100-parseInt(skill[1])+1)/100*max)+min) + "%, " + skill_color + " 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"}, ),
		    	),
		    	crel('h3', {'class' : "text-center skill-name"}, skill[0]),
		    	crel('p', {'class' : "text-center skill-val"}, skill[1])
		    )
		)
	}
}

/*
  <!-- Category -->
  <div class="cell small-12 medium-6 large-6">
    <div class="callout skill-category">
      <h2 class="category-title">categoria x</h2>
      <div class="grid-x align-center">
        <!-- Skill -->
        <div class="skill-item cell small-6 medium-6 large-4"> 
          <span class="fa-stack fa-7x">
            <i class="fas fa-star fa-stack-1x" style="
              background: -webkit-linear-gradient(top, #222 0%, #222 49%,#ae54ce 50%,#ae54ce 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;"></i>
          </span>
          <h3 class='text-center'>python</h3>
        </div>
      </div>
    </div>
  </div> 
*/


$(document).ready(function() {
	create_word_cloud(all_list);
});

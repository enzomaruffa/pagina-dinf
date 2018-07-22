# Get file
file = open("skills")

# Get lines from file
lines = [line.rstrip("\n") for line in file]

# Split lines
lines = [line.split(",") for line in lines]

class Skill:
	def __init__(self, skill_name, skill_level, skill_category, skill_subcategory):
		self.skill_name = skill_name
		self.skill_level = skill_level
		self.skill_category = skill_category
		self.skill_subcategory = skill_subcategory

skills_list = []
categories_list = []

for line in lines:
	skills_list.append(Skill(line[0], line[1], line[2], line[3]))
	if line[2] not in categories_list:
		categories_list.append(line[2])

final_list = []
for category in categories_list:
	final_list.append([skill for skill in skills_list if skill.skill_category == category])

# Write to file
write_file = open("skills_done", "w")

for category_list in final_list:
	category_name = category_list[0].skill_category
	write_file.write(category_name + "_list = ['" + category_name + "', [")

	subcategories = []

	for skill in category_list:
		if skill.skill_subcategory not in subcategories:
			if skill != category_list[-1]:
				write_file.write("'" + skill.skill_subcategory + "', ")
			else:
				write_file.write("'" + skill.skill_subcategory + "']")
			subcategories.append(skill.skill_subcategory)
	
	write_file.write(', [')

	for skill in category_list:
		if skill != category_list[-1]:
			write_file.write("['" + skill.skill_name + "', '" + skill.skill_level + "', '" + skill.skill_subcategory + "'], ")
		else:
			write_file.write("['" + skill.skill_name + "', '" + skill.skill_level + "', '" + skill.skill_subcategory + "']")
	write_file.write("]]\n")
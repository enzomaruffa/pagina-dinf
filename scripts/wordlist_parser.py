
# Get file
file = open("wordlist")

# Get lines from file
lines = [line.rstrip('\n') for line in file]

# Split lines
lines = [line.split(',') for line in lines]

all_list = []
personal_list = []
professional_list = []

for line in lines:
	categories = line[2].split()

	all_list.append([line[0], line[1]])

	if ('personal' in categories):
		personal_list.append([line[0], line[1]])
	if ('professional' in categories):
		professional_list.append([line[0], line[1]])

write_file = open("wordlist_done", "w")

write_file.write("all_list = [") 
for word in all_list:
	if word != all_list[-1]:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}, ") 
	else:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}]\n") 
		
write_file.write("personal_list = [") 
for word in personal_list:
	if word != personal_list[-1]:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}, ") 
	else:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}]\n") 

write_file.write("professional_list = [") 
for word in professional_list:
	if word != professional_list[-1]:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}, ") 
	else:
		write_file.write("{text : '" + word[0] + "', weight : " + word[1] + "}]\n") 
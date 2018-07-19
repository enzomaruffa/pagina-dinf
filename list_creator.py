
# Get file
file = open("wordlist.txt")

# Get lines from file
lines = [line.rstrip('\n') for line in file]

# Split lines
lines = [line.split(',') for line in lines]

all_list = []
personal_list = []
professional_list = []

for line in lines:
	categories = line[2].split()

	for i in range(0, int(line[1])):
		all_list.append(line[0])

	if ('personal' in categories):
		for i in range(0, int(line[1])):
			personal_list.append(line[0])
	if ('professional' in categories):
		for i in range(0, int(line[1])):
			professional_list.append(line[0])

write_file = open("wordlist_done", "w") 
print("all_list =", all_list, file=write_file) 
print("personal_list =", personal_list, file=write_file) 
print("professional_list =", professional_list, file=write_file) 
# ********************************************
#           Name: MAC Adress Tracking        *
#           Author: Moritz Weirauch          *
#           Version: 0.1                     *
# ********************************************

# ******************

	# Store Current List into File 
	
		currList = `wl -i eth1 assoclist`
		currList < /c/Users/Moritz/Documents/GitHub/CheckIn/scripts/curassoc.txt

# ******************
# Variables

	file=/c/Users/Moritz/Documents/GitHub/CheckIn/scripts/assoc.txt
	mapfile -t oldListArray < /c/Users/Moritz/Documents/GitHub/CheckIn/scripts/assoc.txt
	mapfile -t newListArray < /c/Users/Moritz/Documents/GitHub/CheckIn/scripts/curassoc.txt

# ******************
# Track lost devices

	# Determine Devices that left

	oldDevices=()
	for i in "${oldListArray[@]}"; do
		skip=
		for j in "${newListArray[@]}"; do
			[[ $i == $j ]] && { skip=1; break; }
		done
		[[ -n $skip ]] || oldDevices+=("$i")
	done
	declare -p oldDevices
	
	# Push all the Old ones to the API
	
	for i in "${oldDevices[@]}"; do
		echo "Old Device:" $i
	done

# ********************
# Track new devices

	newDevices=()
	for i in "${newListArray[@]}"; do
		skip=
		for j in "${oldListArray[@]}"; do
			[[ $i == $j ]] && { skip=1; break; }
		done
		[[ -n $skip ]] || newDevices+=("$i")
	done
	declare -p newDevices
	
	# Push all the new Ones to the APi
	
	for i in "${newDevices[@]}"; do
		echo "New Device:" $i
	done


# *********************
# Refresh "Old" assoc List

    currList > file 

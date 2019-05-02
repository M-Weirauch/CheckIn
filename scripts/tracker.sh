# ********************************************
#           Name: MAC Adress Tracking        *
#           Author: Moritz Weirauch          *
#           Version: 0.1                     *
# ********************************************

# ******************
# Preparations

	# Variables 
	
		rdir="/var/checkin"

	# Create Files if the do not yet exist
		
		# Holder Directory
		mkdir /var/checkin
		
		# Create file to store "old" list 
		touch $rdir/assoc.txt
		adir="${rdir}/assoc.txt"
		
		# Create file to store "new" list
		touch $rdir/curassoc.txt
		cdir="${rdir}/curassoc.txt"

	# Store Current List into File 
	
		currList = `wl -i eth1 assoclist`
		currList < $cdir

# ******************
# Variables

	file=/c/Users/Moritz/Documents/GitHub/CheckIn/scripts/assoc.txt
	mapfile -t oldListArray < $adir
	mapfile -t newListArray < $cdir

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

    currList > $adir

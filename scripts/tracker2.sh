#!/bin/sh
# ********************************************
#           Name: MAC Adress Tracking        *
#           Author: Moritz Weirauch          *
#           Version: 0.2                     *
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
	
		wl assoclist > $cdir

# Push the List to API Endpoint

    curl -X POST -d @$cdir https://dummyurl.com/api/post/devices/


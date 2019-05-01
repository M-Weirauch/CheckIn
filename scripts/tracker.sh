# ********************************************
#           Name: MAC Adress Tracking       *
#           Author: Moritz Weirauch         *
#           Version: 0.1                    *
# *******************************************

# ******************
# Variables


    file=”/var/log/assoc”
    oldList=`cat file`
    newList=`wl -i <interface> asoclist`
    oldListArray=($oldList)
    newListArray($newList)

# ******************
# Track lost devices

    oldDevices=()
    for i in oldListArray; do 
        skip=
        for j in newListArray; do
            [[ $i == $j ]] && { skip=1;break; }
        done
        [[ -n $skip ]] || oldDevices+=(“$i”)
    done
    declare -p oldDevices
    # Push the Device List
    for i in oldDevices do
        curl {mac: $i}  https://dummyurl.com/post/device/
    done

# ********************
# Track new devices

    # Find Devices that are new
    newDevices=()
    for i in newListArray; do 
        skip=
        for j in oldListArray; do
            [[ $i == $j ]] && { skip=1;break; }
        done
        [[ -n $skip ]] || newDevices+=(“$i”)
    done
    declare -p newDevices
    # Push the Device List
    for i in oldDevices do
        curl {mac: $i}  https://dummyurl.com/post/device/
    done

# *********************
# Refresh "Old" assoc List

    newList > file 

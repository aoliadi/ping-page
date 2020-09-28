#! /usr/bin/bash

git status

echo "Do you want to stage edited files? Y/N"
read stage_response
case "$stage_response" in
    [yY] | [yY][eE][sS])
        echo "Okay then! Staging taking place"
        git add .
        
        echo "Please, enter commit message:"
        read commit_message
        git commit -m "'$commit_message'"
        
        ;;
        
    [nN] | [nN][oO])
        echo "No staging."
        exit
        ;;
        
    *)
        echo "Please enter a response"
        ;;
esac

echo "Do you want to check log? Y/N"
read log_response
if [ "$log_response" == "yes" ] || [ "$log_response" == "y" ]
then
    git log
else
    echo "Okay, cancelled"
fi

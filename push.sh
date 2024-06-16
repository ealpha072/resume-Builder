#check git status

if [[ -n $(git status -s) ]]; then

    echo "Select changes to add"
    echo "All:Default (*) [1]"
    echo "Current (.) [2]"

    #add option for file
    read -p "Pick option [1,2]: " stage_option

    if [ $stage_option -eq 1 ];then
        echo "Adding all changes"
        git add *
    elif [ $stage_option -eq 2 ]; then
        echo "Adding current changes..."
        git add .
    else
        echo "Adding all changes..."
        git add *
    fi

    #commit tag
    echo "Commit types: feat, fix, docs, style, refactor, test,chore"
    read -p "Commit type: " commit_type

    #commit message and header
    read -p "Commit message: " commit_msg
    git commit -m "$commit_type: $commit_msg"

    read -p "Push changes? [y/n]: " push_ch

    if [ "$push_ch" == "y" ];then
        if git push -v ;then
            echo "Changes pushed to remote"
        else
            echo "Error pushing changes"
        fi
    fi
else
    echo "No changes to commit"
fi